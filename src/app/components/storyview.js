'use client';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useAlert } from '@/app/hooks/useAlert';

export default function StoryViewer() {
  const [stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const progressRef = useRef(null);
  const timerRef = useRef(null);
  const { showAlert } = useAlert();
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || '';

  const fetchStories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiBase}/api/stories`);
      setStories(res.data || []);
    } catch (err) {
      console.error(err);
      showAlert('failed to fetch stories', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const openStory = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeStory = () => {
    setIsOpen(false);
    clearTimeout(timerRef.current);
  };

  const nextStory = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      closeStory();
    }
  };

  const startAutoProgress = () => {
    clearTimeout(timerRef.current);
    if (stories[currentIndex]?.resource_type === 'video') return;
    if (progressRef.current) progressRef.current.style.width = '0%';
    setTimeout(() => {
      if (progressRef.current) progressRef.current.style.width = '100%';
    }, 50);
    timerRef.current = setTimeout(() => nextStory(), 5000);
  };

  useEffect(() => {
    if (isOpen && stories.length > 0) startAutoProgress();
    return () => clearTimeout(timerRef.current);
  }, [isOpen, currentIndex]);

  if (stories.length === 0 || loading) return <></>;

  return (
    <>
      <div className="flex gap-3 overflow-x-auto px-3 py-2">
        {stories.map((story, idx) => (
          <div
            key={story._id}
            className="flex-shrink-0 cursor-pointer relative group"
            onClick={() => openStory(idx)}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-500">
              {story.resource_type === 'video' ? (
                <video
                  src={story.url}
                  className="object-cover w-full h-full"
                  muted
                />
              ) : (
                <img
                  src={story.url}
                  alt="story"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <p className="text-xs text-center text-gray-700 mt-1 line-clamp-1">
              {story.caption || 'story'}
            </p>
          </div>
        ))}
      </div>

      {/* fullscreen popup viewer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50"
          >
            {/* close button */}
            <button
              onClick={closeStory}
              className="absolute top-4 right-4 text-white p-2 bg-black/40 rounded-full hover:bg-black/60"
              title="close"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* progress bar */}
            <div className="absolute top-2 left-0 right-0 mx-4 h-1 bg-gray-600 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-green-500 transition-all duration-[5000ms] ease-linear w-0"
              ></div>
            </div>

            {/* story content fullscreen */}
            <motion.div
              key={stories[currentIndex]?._id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={nextStory}
            >
              {stories[currentIndex]?.resource_type === 'video' ? (
                <video
                  key={stories[currentIndex].url}
                  src={stories[currentIndex].url}
                  autoPlay
                  muted
                  playsInline
                  disablePictureInPicture
                  controls={false}
                  className="w-full h-full object-cover"
                  onEnded={nextStory}
                />
              ) : (
                <img
                  src={stories[currentIndex].url}
                  alt="story"
                  className="w-full h-full object-cover"
                />
              )}

              <p className="absolute bottom-10 text-white text-center text-sm bg-black/40 px-4 py-2 rounded-md">
                {stories[currentIndex]?.caption || ''}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
