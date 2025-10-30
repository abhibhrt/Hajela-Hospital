"use client";
export default function MapEmbed() {
    return (
        <div className="w-full h-[300px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831.9651973636483!2d77.39329286050179!3d23.225408450287592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42c6fa9482f9%3A0x17ed9239e0b82c6d!2sHajela%20Hospital%20-%20Advanced%20Medical%20Care%20Bhopal!5e1!3m2!1sen!2sin!4v1761810055787!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}