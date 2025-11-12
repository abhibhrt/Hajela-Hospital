'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCamera, FaTimes, FaTrash, FaPaperPlane, FaPlay } from 'react-icons/fa';
import { useAlert } from '@/app/hooks/useAlert';
import { formatDateTimeSafe } from '@/app/utils/dateFormat';

export default function Story() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null); // for full-screen view
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
    setMounted(true);
    fetchStories();
  }, []);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setCaption('');
  };

  const getToken = () => {
    const stored = localStorage.getItem('admin');
    if (!stored) return null;
    try {
      const admin = JSON.parse(stored);
      return admin?.token || null;
    } catch {
      return null;
    }
  };

  const handleUpload = async () => {
    if (!file) return showAlert('select a file first', 'warning');
    const token = getToken();
    if (!token) return showAlert('admin token missing', 'error');

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('caption', caption);

      const res = await axios.post(
        `${apiBase}/api/stories/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      showAlert('story uploaded successfully', 'success');
      resetSelection();
      setStories((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
      showAlert('failed to upload story', 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    const token = getToken();
    if (!token) return showAlert('admin token missing', 'error');
    if (!window.confirm('Delete this story?')) return;

    try {
      await axios.delete(`${apiBase}/api/stories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      showAlert('story deleted', 'success');
      setStories((prev) => prev.filter((s) => s._id !== id));
      setSelectedStory(null); // close modal if open
    } catch (err) {
      console.error(err);
      showAlert('failed to delete', 'error');
    }
  };

  const resetSelection = () => {
    setFile(null);
    setPreview(null);
    setCaption('');
  };

  const openStory = (story) => {
    setSelectedStory(story);
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  return (
    <div className="flex flex-col font-mono text-sm">
      {/* Upload Section */}
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto">
          {!preview ? (
            <div className="flex flex-col items-center justify-center w-full h-96">
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
                id="story-image-video"
              />
              <label htmlFor="story-image-video" className='cursor-pointer p-8 rounded-full flex justify-center items-center border-2 border-green-400 bg-white hover:bg-blue-100 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl'>
                <FaCamera className="text-5xl text-green-600" />
              </label>
              <p className="text-xl font-semibold text-gray-800 mt-6">Tap to add story update</p>
              <p className="text-sm text-gray-600 mt-2">Photo or video</p>
            </div>
          ) : (
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative">
                {file.type.startsWith('video/') ? (
                  <video
                    src={preview}
                    controls
                    className="w-full h-96 object-contain bg-black"
                  />
                ) : (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-96 object-contain bg-black"
                  />
                )}
                <button
                  onClick={resetSelection}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg"
                >
                  <FaTimes className="text-gray-700" />
                </button>
              </div>

              <div className="p-4 border-t">
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Add a caption..."
                  className="w-full p-3 text-sm bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 rounded-xl"
                  rows={3}
                />
              </div>

              <div className="p-4 border-t bg-gray-50 flex justify-end">
                <button
                  onClick={handleUpload}
                  disabled={uploading}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full text-white font-medium transition-all ${uploading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-500 cursor-pointer hover:bg-green-600 shadow-lg hover:shadow-xl'
                    }`}
                >
                  <FaPaperPlane />
                  <span>{uploading ? 'Sending...' : 'Send'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Active Stories Grid */}
      <div className="bg-white border-t">
        <div className="mx-auto p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Active Story Updates</h3>

          {loading ? (
            <p className="text-gray-500">loading...</p>
          ) : stories.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No story updates yet</p>
          ) : (
            <div className="overflow-x-auto">
              <div className="flex gap-4 p-2 min-w-max">
                {stories.map((story) => (
                  <div key={story._id} className="flex-shrink-0 relative">
                    <button
                      onClick={() => openStory(story)}
                      className="relative group w-20 h-20 rounded-full overflow-hidden ring-4 ring-green-500 p-1 cursor-pointer hover:ring-green-600 transition-all"
                    >
                      <div className="w-full h-full rounded-full overflow-hidden">
                        {story.resource_type === 'video' ? (
                          <video
                            src={story.url}
                            className="w-full h-full object-cover"
                            muted
                          />
                        ) : (
                          <img
                            src={story.url}
                            alt={story.caption}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      {story.resource_type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-2">
                            <FaPlay className='text-white text-xs' />
                          </div>
                        </div>
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(story._id);
                      }}
                      className="absolute -top-1 -right-1 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaTrash className="text-red-500 text-xs" />
                    </button>
                    <div className="text-center mt-1 text-xs text-gray-500">
                      {mounted
                        ? formatDateTimeSafe(story.createdAt, {
                          timeStyle: 'short',
                        }).replace(',', '')
                        : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full-Screen Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4">
          <button
            onClick={closeStory}
            className="absolute top-6 right-6 bg-white/90 p-3 rounded-full shadow-lg z-10"
          >
            <FaTimes className="text-gray-700 text-xl" />
          </button>

          <div className="flex-1 flex items-center justify-center max-w-lg w-full">
            {selectedStory.resource_type === 'video' ? (
              <video
                src={selectedStory.url}
                controls
                autoPlay
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <img
                src={selectedStory.url}
                alt={selectedStory.caption}
                className="max-h-full max-w-full object-contain"
              />
            )}
          </div>

          {/* Caption Below */}
          {selectedStory.caption && (
            <div className="text-white text-center p-6 text-lg font-medium max-w-lg">
              {selectedStory.caption}
            </div>
          )}
        </div>
      )}
    </div>
  );
}