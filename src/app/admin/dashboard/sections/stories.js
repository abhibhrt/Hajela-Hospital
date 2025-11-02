import { FaBook } from 'react-icons/fa';

export default function Story() {
    return (
        <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                    <FaBook className="text-green-500 text-xl" />
                    <h3 className="text-lg font-semibold">Your Story</h3>
                </div>
                <textarea
                    className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Write your story here..."
                />
                <button className="mt-4 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-lg transform transition-all duration-300 hover:scale-105">
                    Save Story
                </button>
            </div>
        </div>
    );
}