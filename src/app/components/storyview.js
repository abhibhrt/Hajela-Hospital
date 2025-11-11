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
  const [duration, setDuration] = useState(6000);
  const progressRef = useRef(null);
  const timerRef = useRef(null);
  const videoRef = useRef(null);
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

  const startAutoProgress = (customDuration = 6000) => {
    clearTimeout(timerRef.current);
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      void progressRef.current.offsetWidth; // reflow to reset transition
      progressRef.current.style.transition = `width ${customDuration}ms linear`;
      progressRef.current.style.width = '100%';
    }
    timerRef.current = setTimeout(() => nextStory(), customDuration);
  };

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      const vidDuration = videoRef.current.duration * 1000;
      setDuration(vidDuration);
      startAutoProgress(vidDuration);
    }
  };

  useEffect(() => {
    clearTimeout(timerRef.current);

    if (!isOpen || stories.length === 0) return;

    const currentStory = stories[currentIndex];
    if (currentStory?.resource_type === 'video') {
      if (videoRef.current?.readyState >= 1) {
        handleVideoLoaded();
      }
    } else {
      setDuration(6000);
      startAutoProgress(6000);
    }

    return () => clearTimeout(timerRef.current);
  }, [isOpen, currentIndex]);

  if (stories.length === 0 || loading) return <></>;

  return (
    <>
      {/* story preview list */}
      <div className='flex gap-3 overflow-x-auto px-3 py-2'>
        {stories.map((story, idx) => (
          <div
            key={story._id}
            className='flex-shrink-0 cursor-pointer relative group'
            onClick={() => openStory(idx)}
          >
            <div className='w-20 h-20 rounded-full overflow-hidden border-2 border-green-500'>
              {story.resource_type === 'video' ? (
                <video
                  src={story.url}
                  className='object-cover w-full h-full'
                  muted
                />
              ) : (
                <img
                  src={story.url}
                  alt='story'
                  className='object-cover w-full h-full'
                />
              )}
            </div>
            <p className='text-xs text-center text-gray-700 mt-1 line-clamp-1'>
              {story.caption || 'story'}
            </p>
          </div>
        ))}
      </div>

      {/* fullscreen viewer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black flex flex-col justify-center items-center z-[9999]'
          >
            {/* close button */}
            <button
              onClick={closeStory}
              className='absolute top-4 right-4 text-white p-2 bg-black/40 rounded-full hover:bg-black/60 z-[10000]'
              title='close'
            >
              <FaTimes className='text-xl' />
            </button>

            {/* story content */}
            <motion.div
              key={stories[currentIndex]?._id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className='relative w-full h-full flex items-center justify-center bg-black'
              onClick={nextStory}
            >
              {stories[currentIndex]?.resource_type === 'video' ? (
                <video
                  ref={videoRef}
                  key={stories[currentIndex].url}
                  src={stories[currentIndex].url}
                  autoPlay
                  playsInline
                  disablePictureInPicture
                  controls={false}
                  muted
                  className='max-w-full max-h-full object-contain'
                  onEnded={nextStory}
                  onLoadedMetadata={handleVideoLoaded}
                />
              ) : (
                <img
                  src={stories[currentIndex].url}
                  alt='story'
                  className='max-w-full max-h-full object-contain'
                />
              )}

              {/* caption */}
              <p className='absolute bottom-16 text-white text-center text-sm bg-black/40 px-4 py-2 rounded-md'>
                {stories[currentIndex]?.caption || ''}
              </p>
            </motion.div>

            {/* progress bar moved to bottom */}
            <div className='absolute bottom-0 left-0 right-0 mx-4 mb-3 h-1 bg-gray-700 rounded-full overflow-hidden z-[10001]'>
              <div
                ref={progressRef}
                className='h-full bg-green-500 w-0'
                style={{ transition: `width ${duration}ms linear` }}
              ></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}