'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import WikiHeader from '../wiki-header';
import WikiContent from '../wiki-content';
import WikiSidebar from '../wiki-sidebar';
import WikiLoader from '../wiki-loader';
import WikiError from '../wiki-error';
import { FaBook } from 'react-icons/fa';

export default function WikiPage() {
  const { topic } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const cleanTopic = str => (!str ? '' : decodeURIComponent(str).replace(/-/g, ' ').trim());

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
          const words = query.split(' ').filter(Boolean);
          if (words.length > 1) {
            res = await fetch(
              `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(words[0])}`
            );
          }
        }
        if (!res.ok) throw new Error('No data found');
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
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.extract,
      image: data.thumbnail?.source || data.originalimage?.source,
      datePublished: data.timestamp,
      author: { '@type': 'Organization', name: 'Wikipedia' },
      publisher: {
        '@type': 'Organization',
        name: 'Wikipedia',
        logo: {
          '@type': 'ImageObject',
          url: 'https://en.wikipedia.org/static/favicon/wikipedia.ico'
        }
      }
    }
    : null;

  if (loading) return <WikiLoader topic={cleanTopic(topic)} />;
  if (error) return <WikiError topic={cleanTopic(topic)} />;
  if (!data)
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex flex-col items-center justify-center p-6'>
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='text-center'>
          <FaBook className='text-6xl text-gray-400 mb-4 mx-auto' />
          <h2 className='text-2xl font-bold text-gray-600 mb-2'>No Data Available</h2>
          <p className='text-gray-500'>Please try searching for a different topic.</p>
        </motion.div>
      </div>
    );

  return (
    <>
      {structuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <div className='min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-100 relative'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent' />
        <div className='relative z-10 min-h-screen flex md:items-center justify-center'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='w-full max-w-6xl'
          >
            <div className='bg-white border border-gray-200 shadow-xl overflow-hidden'>
              <WikiHeader data={data} />
              <div className='p-2 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <WikiContent data={data} />
                <WikiSidebar data={data} imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}