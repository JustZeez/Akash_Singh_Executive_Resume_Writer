import React from 'react';
import { Mail } from 'lucide-react';

const LinkedInIcon = ({ size = 18, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = ({ size = 18, className = "" }) => (
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

export default function Footer() {
  return (
    <footer className="bg-white border-t border-secondary/10 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Brand & tagline */}
          <div className="space-y-2">
            <p className="text-primary font-serif text-xl font-bold tracking-tight">
              Akash Singh
            </p>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Certified Professional Resume Writer (CPRW™) · Executive Career Strategist
            </p>
            <p className="text-muted/80 text-xs italic">
              “Your career transformation starts here.”
            </p>
          </div>

          {/* Center: Quick links */}
          <div className="flex flex-col space-y-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Navigate</p>
            <a href="/" className="text-muted hover:text-secondary text-sm transition-colors">Home</a>
            <a href="/about" className="text-muted hover:text-secondary text-sm transition-colors">About</a>
            <a href="/contact" className="text-muted hover:text-secondary text-sm transition-colors">Contact</a>
            <a href="#expertise" className="text-muted hover:text-secondary text-sm transition-colors">Expertise</a>
          </div>

          {/* Right: Contact & Social */}
          <div className="flex flex-col space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Connect</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/akashsingh79/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#0A66C2] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={22} />
              </a>
              <a
                href="https://wa.me/918824893507"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#25D366] transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={22} />
              </a>
              <a
                href="mailto:akash.ranawat007@gmail.com"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
            <div className="text-muted text-xs space-y-0.5">
              <p className="flex items-center gap-2">
                <span className="opacity-50">📞</span>
                <a href="tel:+918824893507" className="hover:text-secondary transition-colors">
                  +91 88248 93507
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="opacity-50">✉️</span>
                <a href="mailto:akash.ranawat007@gmail.com" className="hover:text-secondary transition-colors">
                  akash.ranawat007@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom legal bar – updated with proper links */}
        <div className="mt-10 pt-6 border-t border-secondary/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted/70">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-primary">Akash Singh</span> · All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}