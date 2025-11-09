'use client';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit, FaUpload, FaTimes } from 'react-icons/fa';
import { useAlert } from '@/app/hooks/useAlert';
import { formatDateSafe } from '@/app/utils/dateFormat';

export default function Gallery() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { showAlert } = useAlert();

    const fileRef = useRef(null);
    const [caption, setCaption] = useState('');
    const [description, setDescription] = useState('');

    const [editingId, setEditingId] = useState(null);
    const [editCaption, setEditCaption] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [savingEditId, setSavingEditId] = useState(null);

    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || '';

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('admin');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (parsed?.token) setIsAdmin(true);
            } catch {
                console.warn('invalid admin object');
            }
        }
        fetchPhotos();
    }, []);

    const getAuthHeaders = () => {
        const stored = localStorage.getItem('admin');
        if (!stored) return {};
        try {
            const admin = JSON.parse(stored);
            if (admin?.token) {
                return { Authorization: `Bearer ${admin.token}` };
            }
        } catch {
            return {};
        }
        return {};
    };

    const fetchPhotos = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${apiBase}/api/gallery`);
            setPhotos(res.data || []);
        } catch (err) {
            showAlert('failed to fetch photos', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!fileRef.current?.files?.[0]) {
            showAlert('no file selected', 'error');
            return;
        }

        const form = new FormData();
        form.append('file', fileRef.current.files[0]);
        form.append('caption', caption);
        form.append('description', description);

        setUploading(true);

        try {
            const res = await axios.post(`${apiBase}/api/gallery/upload`, form, {
                headers: {
                    ...getAuthHeaders(),
                    'Content-Type': 'multipart/form-data',
                },
            });
            setPhotos((prev) => [res.data, ...prev]);
            fileRef.current.value = '';
            setCaption('');
            setDescription('');
            showAlert('photo uploaded successfully', 'success');
        } catch (err) {
            showAlert(err.response?.data?.message || 'upload failed', 'error');
        } finally {
            setUploading(false);
        }
    };

    const startEdit = (photo) => {
        setEditingId(photo._id);
        setEditCaption(photo.caption || '');
        setEditDescription(photo.description || '');
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditCaption('');
        setEditDescription('');
    };

    const saveEdit = async (id) => {
        setSavingEditId(id);
        try {
            const res = await axios.put(
                `${apiBase}/api/gallery/${id}`,
                { caption: editCaption, description: editDescription },
                { headers: { ...getAuthHeaders() } }
            );
            setPhotos((prev) => prev.map((p) => (p._id === id ? res.data : p)));
            setEditingId(null);
            showAlert('photo updated successfully', 'success');
        } catch (err) {
            showAlert(err.response?.data?.message || 'update failed', 'error');
        } finally {
            setSavingEditId(null);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('delete this photo?')) return;
        const prev = photos;
        setPhotos((prev) => prev.filter((p) => p._id !== id));

        try {
            await axios.delete(`${apiBase}/api/gallery/${id}`, {
                headers: { ...getAuthHeaders() },
            });
            showAlert('photo deleted successfully', 'success');
        } catch (err) {
            setPhotos(prev);
            showAlert(err.response?.data?.message || 'delete failed', 'error');
        }
    };

    return (
        <div className="space-y-6">
            {isAdmin && (
                <form
                    onSubmit={handleUpload}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-3"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                        <label className="border-dashed border-2 border-blue-300 rounded-md p-3 cursor-pointer hover:border-blue-500 transition bg-gray-100">
                            <input
                                ref={fileRef}
                                type="file"
                                accept="image/*"
                                className="w-full text-sm cursor-pointer"
                            />
                        </label>

                        <div>
                            <label className="text-xs text-gray-600 mb-1 block">caption</label>
                            <input
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                                placeholder="short caption"
                                className="w-full rounded-md border px-3 py-2 text-sm"
                            />
                        </div>

                        <div>
                            <label className="text-xs text-gray-600 mb-1 block">description</label>
                            <input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="optional description"
                                className="w-full rounded-md border px-3 py-2 text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            type="submit"
                            disabled={uploading}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:opacity-95 transition cursor-pointer"
                        >
                            <FaUpload />
                            <span>{uploading ? 'uploading...' : 'upload'}</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                fileRef.current.value = '';
                                setCaption('');
                                setDescription('');
                            }}
                            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm hover:opacity-90 transition cursor-pointer"
                        >
                            <FaTimes />
                            <span>reset</span>
                        </button>
                    </div>
                </form>
            )}

            <div>
                {loading ? (
                    <div className="text-sm text-gray-600">loading...</div>
                ) : photos.length === 0 ? (
                    <div className="bg-white p-6 rounded-xl shadow text-gray-600">
                        no photos yet
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {photos.map((photo) => (
                            <div
                                key={photo._id}
                                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
                            >
                                <div className="relative">
                                    <img
                                        src={photo.url}
                                        alt={photo.caption || 'photo'}
                                        className="w-full h-48 object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute left-3 bottom-3 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                                        {photo.caption || 'untitled'}
                                    </div>

                                    {isAdmin && (
                                        <div className="absolute right-3 top-3 flex items-center gap-2">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    startEdit(photo);
                                                }}
                                                title="edit"
                                                className="bg-white/90 p-2 rounded-full shadow cursor-pointer"
                                            >
                                                <FaEdit />
                                            </button>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDelete(photo._id);
                                                }}
                                                title="delete"
                                                className="bg-white/90 p-2 rounded-full shadow cursor-pointer"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="p-3 space-y-2">
                                    <div className="text-sm text-gray-600 line-clamp-2">
                                        {photo.description || 'no description'}
                                    </div>

                                    {editingId === photo._id ? (
                                        <div className="mt-2 space-y-2">
                                            <input
                                                value={editCaption}
                                                onChange={(e) => setEditCaption(e.target.value)}
                                                placeholder="caption"
                                                className="w-full rounded-md border px-2 py-1 text-sm"
                                            />
                                            <input
                                                value={editDescription}
                                                onChange={(e) => setEditDescription(e.target.value)}
                                                placeholder="description"
                                                className="w-full rounded-md border px-2 py-1 text-sm"
                                            />

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => saveEdit(photo._id)}
                                                    disabled={savingEditId === photo._id}
                                                    className="text-xs bg-blue-600 text-white px-3 py-1 rounded-md"
                                                >
                                                    {savingEditId === photo._id ? 'saving...' : 'save'}
                                                </button>
                                                <button
                                                    onClick={cancelEdit}
                                                    className="text-xs bg-gray-100 px-3 py-1 rounded-md"
                                                >
                                                    cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-xs text-gray-400">
                                            {mounted ? formatDateSafe(photo.createdAt) || photo.createdAt : ''}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}