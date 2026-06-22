import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Mail } from 'lucide-react';

// Custom WhatsApp SVG icon
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Show the button after a short delay (for a smoother entrance)
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Akash Singh, I come across your website and wanted to make some enquiries about your services."
    );
    window.open(`https://api.whatsapp.com/send?phone=918824893507&text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Website Enquiry");
    const body = encodeURIComponent(
      "Hi Akash Singh,\n\nI come across your website and wanted to make some enquiries about your services.\n\nRegards,"
    );
    // Use window.location.href to open the default email client
    window.location.href = `mailto:akash.ranawat007@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* Main Button */}
      <button
        onClick={toggleOpen}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent shadow-2xl flex items-center justify-center text-white transition-transform hover:scale-105 focus:outline-none relative group"
        aria-label="Contact"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-secondary/30"></span>
        <span className="absolute inset-0 rounded-full animate-pulse bg-secondary/20"></span>
        {isOpen ? (
          <X size={24} className="relative z-10" />
        ) : (
          <MessageCircle size={24} className="relative z-10" />
        )}
      </button>

      {/* Action Buttons */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col items-center gap-4 transition-all duration-300 origin-bottom ${
          isOpen
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-75 opacity-0 pointer-events-none'
        }`}
      >
        {/* WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="w-12 h-12 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110 hover:shadow-xl"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon size={22} />
        </button>
        <span className="text-xs font-medium text-muted bg-white/80 backdrop-blur px-2 py-1 rounded-full shadow-sm -mt-1">
          WhatsApp
        </span>

        {/* Email */}
        <button
          onClick={handleEmail}
          className="w-12 h-12 rounded-full bg-[#EA4335] shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110 hover:shadow-xl"
          aria-label="Email"
        >
          <Mail size={22} />
        </button>
        <span className="text-xs font-medium text-muted bg-white/80 backdrop-blur px-2 py-1 rounded-full shadow-sm -mt-1">
          Email
        </span>
      </div>

      {/* Background blur when open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm"
          onClick={toggleOpen}
        />
      )}
    </div>
  );
}