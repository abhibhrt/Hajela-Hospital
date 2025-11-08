'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBook, FaTimes, FaTrash } from 'react-icons/fa';
import { useAlert } from '@/app/hooks/useAlert';

export default function Story() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showAlert } = useAlert();

  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || '';

  // fetch all active stories
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

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
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
      setFile(null);
      setPreview(null);
      setCaption('');
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
    if (!confirm('delete this story?')) return;

    try {
      await axios.delete(`${apiBase}/api/stories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      showAlert('story deleted successfully', 'success');
      setStories((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      console.error(err);
      showAlert('failed to delete story', 'error');
    }
  };

  const resetSelection = () => {
    setFile(null);
    setPreview(null);
    setCaption('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4 space-y-8">
      {/* upload form */}
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center space-x-3 mb-4">
          <FaBook className="text-green-500 text-xl" />
          <h3 className="text-lg font-semibold text-gray-800">
            Upload Story
          </h3>
        </div>

        <label className="block mb-2 text-sm font-medium text-gray-600 cursor-pointer">
          select file (image / video)
        </label>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer"
        />

        {preview && (
          <div className="relative mb-4 rounded-lg overflow-hidden border border-gray-200">
            {file.type.startsWith('video/') ? (
              <video
                src={preview}
                controls
                className="w-full h-56 object-cover bg-black"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-full h-56 object-cover"
              />
            )}
            <button
              onClick={resetSelection}
              className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
              title="remove file"
            >
              <FaTimes />
            </button>
          </div>
        )}

        <label className="block mb-2 text-sm font-medium text-gray-600">
          caption
        </label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
          placeholder="enter a caption for your story..."
        />

        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`cursor-pointer mt-5 w-full bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium ${uploading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
            }`}
        >
          {uploading ? 'uploading...' : 'upload story'}
        </button>
      </div>

      {/* story preview section */}
      <div className="w-full max-w-5xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Active Stories</h3>

        {loading ? (
          <div className="text-gray-600 text-sm">loading stories...</div>
        ) : stories.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-gray-600">
            no active stories yet
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {stories.map((story) => (
              <div
                key={story._id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 relative"
              >
                <div className="relative">
                  {story.resource_type === 'video' ? (
                    <video
                      src={story.url}
                      controls
                      className="w-full h-56 object-cover bg-black"
                    />
                  ) : (
                    <img
                      src={story.url}
                      alt={story.caption || 'story'}
                      className="w-full h-56 object-cover"
                    />
                  )}

                  <div className="absolute bottom-3 left-3 bg-black/60 text-white text-sm px-3 py-1 rounded-md">
                    {story.caption || 'no caption'}
                  </div>

                  <button
                    onClick={() => handleDelete(story._id)}
                    title="delete story"
                    className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow cursor-pointer hover:bg-white"
                  >
                    <FaTrash className="text-red-500" />
                  </button>
                </div>

                <div className="text-xs text-gray-400 p-3">
                  expires on{' '}
                  {new Date(story.expireAt).toLocaleString('en-IN', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}