import React, { useState } from 'react';
import { Mail, User, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send this to your backend or email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const services = [
    'Select a service...',
    'ATS Resume Writing + LinkedIn Optimization',
    'Executive CV / Resume Writing',
    'Guaranteed Executive Job Search',
    'Executive Interview Preparation',
    'LinkedIn & Job Boards Optimization',
    'Job Search Strategy Session',
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2">
            Engineer Your <span className="italic text-accent">Strategic Advantage</span>
          </h1>
          <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            Ready to transform your executive career? Share your goals, and I'll get back to you
            within 24 hours with a tailored strategy.
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-secondary/10 p-8 md:p-12 animate-slide-up">
          {isSubmitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="flex justify-center">
                <CheckCircle size={64} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Message Sent!</h3>
              <p className="text-muted">
                Thank you for reaching out. I'll review your message and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    Full Name <span className="text-secondary">*</span>
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary placeholder-muted/60"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    Email Address <span className="text-secondary">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary placeholder-muted/60"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary placeholder-muted/60"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    Service of Interest
                  </label>
                  <div className="relative">
                    <MessageCircle size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary appearance-none"
                    >
                      {services.map((s, idx) => (
                        <option key={idx} value={s} className="text-primary">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  Your Message <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary placeholder-muted/60 resize-none"
                    placeholder="Tell me about your career goals, challenges, and how I can help you achieve your next milestone..."
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-secondary text-white hover:bg-primary px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg shadow-secondary/30 flex items-center justify-center gap-2 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
                <p className="text-muted/60 text-xs mt-4">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-secondary hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Alternative Contact Options */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-secondary text-2xl mb-2">📞</div>
            <p className="text-primary font-bold text-sm">Call Directly</p>
            <a href="tel:+918824893507" className="text-muted text-sm hover:text-secondary transition-colors">
              +91 88248 93507
            </a>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-secondary text-2xl mb-2">✉️</div>
            <p className="text-primary font-bold text-sm">Email Us</p>
            <a href="mailto:akash.ranawat007@gmail.com" className="text-muted text-sm hover:text-secondary transition-colors">
              akash.ranawat007@gmail.com
            </a>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-secondary text-2xl mb-2">💬</div>
            <p className="text-primary font-bold text-sm">WhatsApp</p>
            <a href="https://wa.me/918824893507" target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-secondary transition-colors">
              Chat Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}