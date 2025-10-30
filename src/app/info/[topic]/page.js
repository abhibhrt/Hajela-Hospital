"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaWikipediaW, FaSearch, FaExternalLinkAlt, FaBook, FaHistory, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WikiPage() {
  const { topic } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const cleanTopic = (str) => {
    if (!str) return "";
    return decodeURIComponent(str).replace(/%/g, " ").trim();
  };

  useEffect(() => {
    if (!topic) return;

    const fetchWikiData = async () => {
      setLoading(true);
      setError(null);
      setImageLoaded(false);
      const query = cleanTopic(topic);

      try {
        let res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
        );

        if (!res.ok) {
          const words = query.split(" ").filter(Boolean);
          if (words.length > 1) {
            res = await fetch(
              `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(words[0])}`
            );
          }
        }

        if (!res.ok) throw new Error("No data found");

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWikiData();
  }, [topic]);

  const structuredData = data
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.extract,
        image: data.thumbnail?.source || data.originalimage?.source,
        datePublished: data.timestamp,
        author: { "@type": "Organization", name: "Wikipedia" },
        publisher: {
          "@type": "Organization",
          name: "Wikipedia",
          logo: {
            "@type": "ImageObject",
            url: "https://en.wikipedia.org/static/favicon/wikipedia.ico",
          },
        },
      }
    : null;

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center text-gray-700 p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity },
            }}
            className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mb-6 mx-auto"
          />
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-2"
          >
            Exploring Knowledge
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600"
          >
            Loading <strong className="text-blue-600">{cleanTopic(topic)}</strong>...
          </motion.p>
        </motion.div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
            <FaSearch className="text-red-500 text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-3">Knowledge Not Found</h2>
          <p className="text-gray-700 mb-6">
            We couldn't find information about <strong>{cleanTopic(topic)}</strong>.
            Try searching for a different topic or check the spelling.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Go Back
          </motion.button>
        </motion.div>
      </div>
    );

  if (!data)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex flex-col items-center justify-center p-6">
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
          <FaBook className="text-6xl text-gray-400 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-600 mb-2">No Data Available</h2>
          <p className="text-gray-500">Please try searching for a different topic.</p>
        </motion.div>
      </div>
    );

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-6xl"
          >
            <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
              {/* Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-8 bg-gradient-to-r from-blue-100 to-purple-100 border-b border-gray-200"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-3 bg-white rounded-2xl border border-gray-200">
                      <FaWikipediaW className="text-blue-600 text-4xl" />
                    </motion.div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.title}</h1>
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <FaGlobe className="text-xs" />
                          <span>English Wikipedia</span>
                        </div>
                        {data.timestamp && (
                          <div className="flex items-center gap-1">
                            <FaHistory className="text-xs" />
                            <span>Last updated</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {data.content_urls?.desktop?.page && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={data.content_urls.desktop.page}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
                    >
                      <span>Open in Wikipedia</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main */}
                  <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="lg:col-span-2">
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                        <FaBook className="text-blue-500" /> Summary
                      </h2>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-gray-800 leading-relaxed text-lg">
                        {data.extract || "No description available."}
                      </motion.p>
                    </div>

                    {data.description && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">About this topic</h3>
                        <p className="text-gray-700">{data.description}</p>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Sidebar */}
                  <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-6">
                    {data.originalimage?.source && (
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                        <AnimatePresence>
                          <motion.img
                            key={data.originalimage.source}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.8 }}
                            transition={{ duration: 0.5 }}
                            src={data.originalimage.source}
                            alt={data.title}
                            onLoad={() => setImageLoaded(true)}
                            className="w-full h-64 object-cover rounded-xl shadow-md"
                          />
                        </AnimatePresence>
                        {!imageLoaded && (
                          <div className="w-full h-64 bg-gray-100 rounded-xl animate-pulse flex items-center justify-center">
                            <div className="text-gray-400">Loading image...</div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">Quick Facts</h3>
                      <div className="space-y-3 text-gray-700">
                        <div>
                          <strong className="text-gray-900">Title:</strong> {data.title}
                        </div>
                        {data.description && (
                          <div>
                            <strong className="text-gray-900">Type:</strong> {data.description}
                          </div>
                        )}
                        <div>
                          <strong className="text-gray-900">Source:</strong> Wikipedia
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {data.content_urls?.desktop?.page && (
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }} className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 border-t border-gray-200 text-center">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={data.content_urls.desktop.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300"
                  >
                    <FaWikipediaW className="text-xl" />
                    Read Full Article on Wikipedia
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}