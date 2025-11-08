'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAlert } from '@/app/hooks/useAlert'
import FormWrapper from './FormWrapper'
import FormSuccess from './FormSuccess'

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appointmentType: '',
    preferredDate: '',
    message: '',
  })
  const [minDate, setMinDate] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [appointmentData, setAppointmentData] = useState(null)
  const [downloading, setDownloading] = useState(false)
  const { showAlert } = useAlert()

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0])
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/appointments/book`, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        type: formData.appointmentType,
        date: new Date(formData.preferredDate).toISOString(),
        message: formData.message,
      })

      if (res.status !== 200 && res.status !== 201) throw new Error('failed to book appointment')
      setAppointmentData(res.data.appointment)
      setIsSubmitted(true)
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'an unexpected error occurred'
      showAlert(msg, 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const downloadPdf = async () => {
    if (!appointmentData) return
    try {
      setDownloading(true)
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/appointments/download-pdf`,
        appointmentData,
        { responseType: 'blob' }
      )

      if (res.status !== 200 && res.status !== 201) throw new Error('failed to generate pdf')
      const blob = new Blob([res.data], { type: 'application/pdf' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'appointment.pdf'
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      showAlert('failed to download pdf', 'error')
    } finally {
      setDownloading(false)
    }
  }

  return isSubmitted ? (
    <FormSuccess appointmentData={appointmentData} downloading={downloading} downloadPdf={downloadPdf} />
  ) : (
    <FormWrapper formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} minDate={minDate} />
  )
}