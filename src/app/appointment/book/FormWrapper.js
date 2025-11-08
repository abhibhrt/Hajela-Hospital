'use client'

import { motion } from 'framer-motion'
import FormInputs from './FormInputs'

export default function FormWrapper({ formData, handleChange, handleSubmit, isSubmitting, minDate }) {
    return (
        <motion.div
            className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
        >
            <div className='bg-gradient-to-r from-blue-600 to-teal-600 p-6'>
                <h2 className='text-2xl font-bold text-white'>Book Your IVF Consultation</h2>
                <p className='text-white/90 text-sm mt-1'>fill your details to schedule appointment with Dr. Supriya Hajela</p>
            </div>

            <form onSubmit={handleSubmit} className='p-6 space-y-6'>
                <FormInputs formData={formData} handleChange={handleChange} minDate={minDate} />
                <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
                >
                    {isSubmitting ? (
                        <div className='flex items-center justify-center'>
                            <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3'></div>
                            submitting request...
                        </div>
                    ) : (
                        'Book Now'
                    )}
                </button>
                <p className='text-gray-500 text-xs text-center'>by submitting, you agree to our privacy policy and consent to contact via phone/email</p>
            </form>
        </motion.div>
    )
}