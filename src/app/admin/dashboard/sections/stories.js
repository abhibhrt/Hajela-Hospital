'use client';
import { useState } from 'react';
import axios from 'axios';
import { FaBook, FaTimes } from 'react-icons/fa';
import { useAlert } from '@/app/hooks/useAlert';

export default function Story() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const { showAlert } = useAlert();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return showAlert('select a file first', 'warning');

    const storedAdmin = localStorage.getItem('admin');
    if (!storedAdmin) return showAlert('admin not found in localstorage', 'error');

    const admin = JSON.parse(storedAdmin);
    const token = admin?.token;
    if (!token) return showAlert('invalid admin token', 'error');

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('caption', caption);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/stories/upload`,
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
    } catch (err) {
      console.error('upload error:', err);
      showAlert('failed to upload story', 'error');
    } finally {
      setUploading(false);
    }
  };

  const resetSelection = () => {
    setFile(null);
    setPreview(null);
    setCaption('');
  };

  return (
    <div className="flex min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center space-x-3 mb-4">
          <FaBook className="text-green-500 text-xl" />
          <h3 className="text-lg font-semibold text-gray-800">Upload Story</h3>
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
    </div>
  );
}