'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

export default function FormSuccess({ appointmentData, downloading, downloadPdf }) {
    return (
        <motion.div
            className='bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-200'
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
        >
            <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <div className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center'>
                    <FaCheckCircle className='text-2xl text-white' />
                </div>
            </div>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>consultation request received!</h2>
            <p className='text-gray-600 text-lg mb-6'>thank you for choosing dr. supriya hajela. our team will contact you between <strong>10:00am to 5:00pm</strong>.</p>
            <div className='bg-green-50 border border-green-200 rounded-lg p-4 mb-4'>
                <p className='text-green-700 font-semibold'>next steps:</p>
                <p className='text-gray-600 text-sm mt-1'>1. download your pdf.<br />2. prepare any medical documents.<br />3. bring them on appointment day.</p>
            </div>
            <button
                disabled={!appointmentData || downloading}
                onClick={downloadPdf}
                className='w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed'
            >
                {downloading ? 'generating pdf...' : 'download pdf'}
            </button>
        </motion.div>
    )
}