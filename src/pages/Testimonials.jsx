import React, { useState, useEffect } from "react";
import {
  Award,
  Shield,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  X,
  Quote,
  TrendingUp,
  Star,
} from "lucide-react";

// Import testimonial images
import rec1 from "../assets/images/recommendation1.jpg";
import rec2 from "../assets/images/recommendation2.jpg";
import rec3 from "../assets/images/recommendation3.jpg";
import rec4 from "../assets/images/recommendation4.jpg";
import rec5 from "../assets/images/recommendation5.jpg";
import rec6 from "../assets/images/recommendation6.jpg";
import rec7 from "../assets/images/recommendation7.jpg";
import rec8 from "../assets/images/recommendation8.jpg";
import rec9 from "../assets/images/recommendation9.jpg";

// Homepage background
import bgImage from "../assets/images/background-image.png";

// Custom LinkedIn icon
const LinkedInIcon = ({ size = 16, className = "" }) => (
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

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [counts, setCounts] = useState({ testimonials: 0, rating: 0, countries: 0, transformations: 0, calls: 0 });

  // ─── Live Counters: Hero Stats ───
  useEffect(() => {
    const animateCount = (start, end, key, duration = 1800) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setCounts((prev) => ({ ...prev, [key]: value }));
        if (progress < 1) window.requestAnimationFrame(step);
        else setCounts((prev) => ({ ...prev, [key]: end }));
      };
      window.requestAnimationFrame(step);
    };

    const heroObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount(0, 86, "testimonials");
          animateCount(0, 5, "rating");
          animateCount(0, 20, "countries");
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("hero-stats");
    if (statsSection) heroObserver.observe(statsSection);

    return () => heroObserver.disconnect();
  }, []);

  // ─── Live Counters: Results Section ───
  useEffect(() => {
    const animateCount = (start, end, key, duration = 1800) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setCounts((prev) => ({ ...prev, [key]: value }));
        if (progress < 1) window.requestAnimationFrame(step);
        else setCounts((prev) => ({ ...prev, [key]: end }));
      };
      window.requestAnimationFrame(step);
    };

    const resultsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount(0, 500, "transformations");
          animateCount(0, 1000, "calls");
          // countries already animated above, but we can re-animate if needed – skip to avoid conflict
        }
      },
      { threshold: 0.5 }
    );

    const resultsSection = document.getElementById("results-section");
    if (resultsSection) resultsObserver.observe(resultsSection);

    return () => resultsObserver.disconnect();
  }, []);

  // ─── Scroll Reveal (animate-on-scroll) ───
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const testimonials = [
    { id: 1, name: "Keresha Gordon", title: "Client", quote: "As soon as I sent Akash my resume...", image: rec1, source: "LinkedIn", result: "Ultra-Fast Execution", location: "Global" },
    { id: 2, name: "Leanne Kotze", title: "Client", quote: "Hands down, Akash is the best resume writer...", image: rec2, source: "LinkedIn", result: "Industry-First Coaching", location: "Global" },
    { id: 3, name: "Jason Watson", title: "Client", quote: "I must say, he truly has a gift...", image: rec3, source: "LinkedIn", result: "Resume Transformation", location: "Global" },
    { id: 4, name: "Micheal Brown", title: "Client", quote: "Akash had a lot of great suggestions...", image: rec4, source: "LinkedIn", result: "Impact-Driven Metrics", location: "Global" },
    { id: 5, name: "Rachel Jude", title: "Client", quote: "Jumping back into the job market...", image: rec5, source: "LinkedIn", result: "Game-Changing Layout", location: "Global" },
    { id: 6, name: "Charlotte B.", title: "Client", quote: "Thanks for the exceptional service...", image: rec6, source: "LinkedIn", result: "Premium Execution", location: "Global" },
    { id: 7, name: "Jesus Acosta", title: "Client", quote: "Akash is a true professional...", image: rec7, source: "LinkedIn", result: "Elite Responsiveness", location: "Global" },
    { id: 8, name: "Rishabh Dev Dogra", title: "Tech Professional", quote: "Akash clearly explained how the market works...", image: rec8, source: "LinkedIn", result: "Market-Entry Roadmap", location: "India" },
    { id: 9, name: "Neeshant Pandey", title: "Backend Engineer", quote: "He was candid and super practical...", image: rec9, source: "LinkedIn", result: "Recruiter-Side Clarity", location: "India" },
    // Text-only Topmate cards
    { id: 10, name: "Mitanshu Agrawal", title: "Software Engineer", quote: "I had a great conversation with Akash...", image: null, source: "Topmate", result: "Strategic Career Clarity", location: "India" },
    { id: 11, name: "Manisha Agrawal", title: "HR Professional", quote: "The session with Akash was wonderful...", image: null, source: "Topmate", result: "ATS Content Polishing", location: "Global" },
    { id: 12, name: "Vishesh Jha", title: "Tech Applicant", quote: "Had an incredibly insightful...", image: null, source: "Topmate", result: "Confidence Boosted", location: "India" },
    { id: 13, name: "Shubham Tiwari", title: "Full-Stack Developer", quote: "He took the time to review my active profile...", image: null, source: "Topmate", result: "Profile Optimization", location: "India" },
    { id: 14, name: "Krishna Pandey", title: "Backend Developer", quote: "I want to express my heartfelt gratitude...", image: null, source: "Topmate", result: "Interview Preparation", location: "Global" },
    { id: 15, name: "Yogesh Mishra", title: "System Engineer", quote: "Gave me a crystal clear roadmap...", image: null, source: "Topmate", result: "Targeted Placement Plan", location: "India" },
  ];

  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.source.toLowerCase() === activeFilter.toLowerCase());

  const certifications = [
    { title: "Certified Professional Resume Writer (CPRW)", organization: "PARW/CC", icon: <Award size={36} className="text-secondary" /> },
    { title: "AON Certified BEI Expert", organization: "AON", icon: <Shield size={36} className="text-secondary" /> },
    { title: "Fair and Effective Interviewing", organization: "PMI", icon: <Users size={36} className="text-secondary" /> },
    { title: "Employer Branding on LinkedIn", organization: "LinkedIn", icon: <LinkedInIcon size={36} className="text-secondary" /> },
    { title: "Performance-Based Hiring", organization: "HRCI", icon: <CheckCircle size={36} className="text-secondary" /> },
  ];

  return (
    <div className="min-h-screen pt-20 bg-cream text-primary overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-3 px-8 py-3 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-xl animate-on-scroll">
            <div className="px-4 py-1 bg-accent text-white text-xs font-bold rounded-2xl tracking-widest">
              ★ 86+ Testimonials · 5/5 Rating
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold text-white leading-[1.05] tracking-tight mb-8 animate-on-scroll">
            Real Stories.<br />
            <span className="italic text-accent">Proven Results.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-white/90 mb-12 animate-on-scroll">
            Trusted by ambitious professionals worldwide
          </p>

          {/* Live Stats */}
          <div id="hero-stats" className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-on-scroll">
            {[
              { label: "Testimonials", value: counts.testimonials, suffix: "+" },
              { label: "Avg. Rating", value: counts.rating, suffix: "/5" },
              { label: "Countries", value: counts.countries, suffix: "+" },
              { label: "Satisfaction", value: "100", suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white/10 backdrop-blur-md rounded-2xl py-6 border border-white/20">
                <div className="text-5xl font-serif font-bold text-accent tabular-nums">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm uppercase tracking-widest text-white/80 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16 animate-on-scroll">
            <button
              onClick={() => document.getElementById("testimonials-grid").scrollIntoView({ behavior: "smooth" })}
              className="group bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-4 transition-all shadow-xl"
            >
              Explore Success Stories <ArrowRight className="group-hover:translate-x-2 transition" />
            </button>
            <a
              href="https://www.linkedin.com/in/akashsingh79/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white hover:bg-[#0A66C2] hover:text-white px-12 py-6 rounded-full text-lg font-medium flex items-center justify-center gap-3 transition-all backdrop-blur-xl"
            >
              <LinkedInIcon size={24} /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUST MARQUEE ─── */}
      <div className="bg-white py-4 border-b border-secondary/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-secondary font-medium">
          {Array(5).fill("★ Trusted by Professionals Worldwide • 86+ Testimonials • Perfect 5/5 Rating").map((text, i) => (
            <span key={i} className="mx-16 text-sm tracking-widest">{text}</span>
          ))}
        </div>
      </div>

      {/* ─── TESTIMONIALS SECTION ─── */}
      <section id="testimonials-grid" className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-secondary mb-4 animate-on-scroll">
              <Star className="w-8 h-8" />
              <span className="uppercase tracking-[3px] text-sm font-semibold">86+ CLIENT VOICES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-primary animate-on-scroll">What Our Clients Say</h2>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-12 animate-on-scroll">
            {["all", "Topmate", "LinkedIn"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
                  activeFilter === filter
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-white text-primary/70 hover:bg-secondary/10 border border-secondary/20"
                }`}
              >
                {filter === "all" ? "All Stories" : filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((item, idx) => {
              const hasImage = !!item.image;
              return (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-secondary/10 hover:border-secondary shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer animate-on-scroll"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  onClick={() => hasImage && setSelectedImage(item.image)}
                >
                  {hasImage ? (
                    <div className="relative aspect-[4/5]">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[180%] transition-transform duration-1000" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-secondary border border-secondary/20">
                        {item.source}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                        <TrendingUp size={14} /> {item.result}
                      </div>
                    </div>
                  ) : (
                    <div className="p-9 flex flex-col h-full min-h-[420px]">
                      <Quote className="w-10 h-10 text-secondary/30 mb-6" />
                      <p className="italic text-primary/80 leading-relaxed flex-1">"{item.quote}"</p>
                      <div className="mt-8 pt-6 border-t border-secondary/10">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-primary">{item.name}</h4>
                            <p className="text-sm text-muted">{item.title}</p>
                          </div>
                          <div className="flex text-amber-500">★★★★★</div>
                        </div>
                        <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-secondary text-xs font-bold px-4 py-1 rounded-full">
                          {item.source} • {item.result}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── RESULTS SECTION – Live Counters ─── */}
      <section id="results-section" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-serif tracking-tight text-primary mb-4 animate-on-scroll">Results That Speak Louder Than Words</h2>
          <p className="text-muted mb-16 animate-on-scroll">Real impact delivered.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: "transformations", num: counts.transformations, label: "Career Transformations", suffix: "+" },
              { key: "calls", num: counts.calls, label: "Interview Calls Generated", suffix: "+" },
              { key: "countries", num: counts.countries, label: "Countries Served", suffix: "+" },
            ].map((item, i) => (
              <div key={i} className="bg-cream border border-secondary/10 rounded-3xl p-12 hover:border-secondary transition-all group animate-on-scroll" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="text-7xl font-serif font-bold text-secondary group-hover:scale-110 transition-transform tabular-nums">
                  {item.num}{item.suffix}
                </div>
                <p className="mt-6 text-primary text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase font-semibold tracking-widest text-secondary text-sm animate-on-scroll">Globally Recognized</div>
            <h2 className="text-5xl font-serif tracking-tight text-primary mt-3 animate-on-scroll">Certified Excellence</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group bg-white border border-secondary/10 hover:border-secondary p-10 rounded-3xl transition-all hover:-translate-y-2 animate-on-scroll"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="mb-8 text-secondary transition-transform group-hover:scale-110 inline-block duration-500">{cert.icon}</div>
                <h4 className="text-xl font-semibold text-primary leading-tight mb-3">{cert.title}</h4>
                <p className="text-muted">{cert.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-28 bg-primary relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight animate-on-scroll">Ready to Write Your Success Story?</h2>
          <p className="text-white/80 text-xl mt-6 max-w-lg mx-auto animate-on-scroll">Join 86+ satisfied clients who transformed their careers.</p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-4 bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-full font-bold uppercase tracking-wider text-lg shadow-xl transition-all animate-on-scroll"
            style={{ transitionDelay: "150ms" }}
          >
            <Calendar className="w-6 h-6" /> Book Your Strategy Call
          </a>
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full">
            <img src={selectedImage} alt="Recommendation" className="rounded-3xl shadow-2xl max-h-[90vh] w-auto mx-auto" onClick={e => e.stopPropagation()} />
            <button onClick={() => setSelectedImage(null)} className="absolute -top-4 -right-4 bg-white p-4 rounded-full text-primary hover:bg-red-100 transition">
              <X size={32} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}