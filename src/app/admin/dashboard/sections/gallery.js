import { FaImages } from 'react-icons/fa';

export default function Gallery(){
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6].map(item => (
                    <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                        <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                            <FaImages className="text-white text-2xl" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}