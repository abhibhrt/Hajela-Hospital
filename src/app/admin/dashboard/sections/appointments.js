import { FaUser } from 'react-icons/fa';

export default function Appointments() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map(item => (
                    <div key={item} className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
                        <div className="flex items-center space-x-3">
                            <FaUser className="text-blue-500 text-xl" />
                            <div>
                                <h3 className="font-semibold">Appointment {item}</h3>
                                <p className="text-gray-600 text-sm">Today, 2:00 PM</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}