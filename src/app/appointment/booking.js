"use client";
import { useState } from "react";
import axios from "axios";
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { useAlert } from "@/app/hooks/useAlert";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    appointmentType: "",
    preferredDate: "",
    message: "",
  });

  const { showAlert } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const appointmentTypes = [
    { value: "ivf", label: "IVF", description: "Full fertility treatment", icon: "💉" },
    { value: "iui", label: "IUI", description: "Intrauterine insemination", icon: "🧬" },
    { value: "consultation", label: "Consultation", description: "General fertility advice", icon: "💬" },
    { value: "followup", label: "Follow-up", description: "Existing patient review", icon: "📋" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/appointments/book`,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          type: formData.appointmentType,
          date: new Date(formData.preferredDate).toISOString(),
          message: formData.message,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status !== 200 && res.status !== 201) throw new Error("Failed to book appointment");
      setIsSubmitted(true);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An unexpected error occurred.";
      console.error("Booking error:", err);
      showAlert(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-2">
      {isSubmitted ? (
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-200 animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-2xl text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Consultation Request Received!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Thank you for choosing <strong>Dr. Supriya Hajela</strong> for your fertility journey.
            Our team will contact you within <strong>24 hours</strong> to confirm your appointment details.
          </p>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700 font-semibold">Next Steps:</p>
              <p className="text-gray-600 text-sm mt-1">
                We&apos;ll call you at <strong>{formData.phone}</strong> to discuss your consultation timing and preparation.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Book Another Consultation
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6">
            <h2 className="text-2xl font-bold text-white">Book Your IVF Consultation</h2>
            <p className="text-white/90 text-sm mt-1">
              Fill your details to schedule appointment with Dr. Supriya Hajela
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Appointment Type */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3">Consultation Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {appointmentTypes.map((type) => (
                  <label
                    key={type.value}
                    className={`relative flex flex-col items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.appointmentType === type.value
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-blue-400"
                      }`}
                  >
                    <input
                      type="radio"
                      name="appointmentType"
                      value={type.value}
                      checked={formData.appointmentType === type.value}
                      onChange={handleChange}
                      className="absolute opacity-0"
                    />
                    <span className="text-2xl mb-2">{type.icon}</span>
                    <span className="text-sm font-medium text-center text-gray-700">{type.label}</span>
                    <span className="text-xs text-gray-500 text-center mt-1">{type.description}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Name and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-900 font-semibold">Full Name *</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-900 font-semibold">Phone Number *</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-gray-900 font-semibold">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="block text-gray-900 font-semibold">Preferred Consultation Date</label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                />
              </div>
              <p className="text-gray-500 text-xs mt-1">
                Our team will confirm the exact timing via phone call
              </p>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-gray-900 font-semibold">
                Medical Concerns &amp; Questions
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 resize-none"
                placeholder="Please share your fertility concerns, previous treatments, or specific questions for Dr. Supriya Hajela..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Submitting Request...
                </div>
              ) : (
                "Request IVF Consultation"
              )}
            </button>

            <p className="text-gray-500 text-xs text-center">
              By submitting, you agree to our privacy policy and consent to contact via phone/email
            </p>
          </form>
        </div>
      )}
    </div>
  );
}