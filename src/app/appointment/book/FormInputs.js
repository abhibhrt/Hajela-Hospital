'use client'

import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'

export default function FormInputs({ formData, handleChange, minDate }) {
    const appointmentTypes = [
        { value: 'ivf', label: 'IVF', desc: 'full fertility treatment', icon: '💉' },
        { value: 'iui', label: 'IUI', desc: 'intrauterine insemination', icon: '🧬' },
        { value: 'consultation', label: 'Consultation', desc: 'general fertility advice', icon: '💬' },
        { value: 'followup', label: 'Follow-up', desc: 'existing patient review', icon: '📋' },
    ]

    return (
        <>
            <div>
                <label className='block text-gray-900 font-semibold mb-3'>consultation type</label>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {appointmentTypes.map((type) => (
                        <label
                            key={type.value}
                            className={`relative flex flex-col items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.appointmentType === type.value
                                    ? 'border-blue-600 bg-blue-50'
                                    : 'border-gray-300 hover:border-blue-400'
                                }`}
                        >
                            <input
                                type='radio'
                                name='appointmentType'
                                value={type.value}
                                checked={formData.appointmentType === type.value}
                                onChange={handleChange}
                                className='absolute opacity-0'
                            />
                            <span className='text-2xl mb-2'>{type.icon}</span>
                            <span className='text-sm font-medium text-center text-gray-700'>{type.label}</span>
                            <span className='text-xs text-gray-500 text-center mt-1'>{type.desc}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <InputField icon={<FaUser />} name='name' value={formData.name} onChange={handleChange} placeholder='enter your full name' label='full name *' required />
                <InputField icon={<FaPhone />} name='phone' value={formData.phone} onChange={handleChange} placeholder='+91 xxxxxxxxxx' label='phone number *' required />
            </div>

            <InputField icon={<FaEnvelope />} name='email' value={formData.email} onChange={handleChange} placeholder='your@email.com' label='email address' />

            <div className='space-y-2'>
                <label className='block text-gray-900 font-semibold'>preferred consultation date</label>
                <div className='relative'>
                    <FaCalendarAlt className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                    <input
                        type='date'
                        name='preferredDate'
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={minDate}
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300'
                    />
                </div>
                <p className='text-gray-500 text-xs mt-1'>our team will confirm the exact timing via phone call</p>
            </div>

            <div className='space-y-2'>
                <label className='block text-gray-900 font-semibold'>medical concerns & questions</label>
                <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows='4'
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 resize-none'
                    placeholder='please share your fertility concerns or previous treatments...'
                />
            </div>
        </>
    )
}

function InputField({ icon, name, value, onChange, placeholder, label, required }) {
    return (
        <div className='space-y-2'>
            <label className='block text-gray-900 font-semibold'>{label}</label>
            <div className='relative'>
                <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>{icon}</div>
                <input
                    type='text'
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300'
                />
            </div>
        </div>
    )
}