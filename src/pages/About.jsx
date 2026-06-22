import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  MapPin,
  Briefcase,
  FileCheck,
  PenTool,
  Target,
  Users,
  Clock,
  Globe,
  Star,
  Calendar,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import billboardImage from "../assets/images/Billboard.png";
import profilePhoto from "../assets/images/professional-photo.jpg";

// Custom LinkedIn SVG
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

export default function About() {
  // ─── Scroll Animation Observer ───
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

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatsBar />
      <AboutContent />
      <CoreExpertise />
      <AchievementShowcase />
      <GlobalReach />
      <ServicesOverview />
      <TestimonialsSection />
      <FinalCTA />

      {/* ─── Animations CSS ─── */}
      <style>{`
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

// ─── HERO ───
const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/80"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase animate-on-scroll">
              <Award size={14} /> CPRW™ · PARWCC Certified
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] animate-on-scroll">
              Strategic Talent Evangelist
              <br />
              <span className="italic text-accent">& Certified Resume Writer</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg max-w-xl leading-relaxed animate-on-scroll">
              Leadership hiring at the senior level is rarely transactional.
              <br className="hidden sm:block" />
              It is a strategic decision that shapes enterprise direction,
              governance and long-term value creation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-white/80 text-xs font-semibold uppercase tracking-wider animate-on-scroll">
              <span className="flex items-center gap-2">
                <Users size={16} className="text-accent" /> 27K+ Empowered
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-accent" /> 8+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <Globe size={16} className="text-accent" /> Global Placements
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] aspect-[4/5] bg-white/5 rounded-2xl p-3 border border-white/20 shadow-2xl backdrop-blur-sm animate-on-scroll">
              <img
                src={profilePhoto}
                alt="Akash Singh"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 bg-white text-primary px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-secondary/20">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Star size={16} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted font-bold">Rating</p>
                  <p className="text-sm font-extrabold">5.0 / 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── STATS BAR (Live Counting) ───
const StatsBar = () => {
  const [counts, setCounts] = useState({
    empowered: 0,
    reviewed: 0,
    sessions: 0,
    topPercent: 0,
  });

  useEffect(() => {
    const animateCount = (start, end, key, duration = 2000) => {
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

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount(0, 27000, "empowered");
          animateCount(0, 100000, "reviewed");
          animateCount(0, 1700, "sessions");
          animateCount(0, 0.1, "topPercent"); // we'll format as "Top 0.1%"
        }
      },
      { threshold: 0.5 }
    );
    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Users size={20} />, value: counts.empowered.toLocaleString(), suffix: "+", label: "Professionals Empowered" },
    { icon: <FileCheck size={20} />, value: counts.reviewed.toLocaleString(), suffix: "+", label: "Resumes Reviewed" },
    { icon: <Calendar size={20} />, value: counts.sessions.toLocaleString(), suffix: "+", label: "Sessions Completed" },
    { icon: <TrendingUp size={20} />, value: "Top", suffix: "0.1%", label: "On Platform" },
  ];

  return (
    <section id="stats-section" className="py-12 bg-white border-y border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group space-y-1 animate-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-secondary mb-1 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <p className="font-serif text-2xl font-bold text-primary">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-muted text-[10px] uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ABOUT CONTENT ───
const AboutContent = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary animate-on-scroll">
              Strategic Talent Evangelist &amp; Certified Resume Writer
            </h2>
            <div className="space-y-4 text-muted leading-relaxed animate-on-scroll">
              <p>
                I work at the intersection of <strong className="text-primary">Executive Search</strong>,{' '}
                <strong className="text-primary">Leadership Talent Intelligence</strong> and{' '}
                <strong className="text-primary">Executive Career Positioning</strong>,
                helping organizations identify high-impact leaders while supporting senior
                executives in positioning themselves for global leadership opportunities.
              </p>
              <p>
                Currently with <strong className="text-primary">Robert Walters</strong>, I focus on
                global leadership hiring and executive talent mapping, identifying senior leaders
                across venture capital firms, high-growth startups and established enterprises.
                My work involves mapping Board Members, Independent Directors, C-Suite Executives,
                Partners and Business Heads.
              </p>
              <p>
                As a globally certified executive CV writer (<strong className="text-primary">CPRW™ / PARWCC</strong>),
                I help accomplished leaders translate complex leadership journeys into clear board-ready
                narratives aligned with retained executive search expectations.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap gap-4 animate-on-scroll">
              {/* ─── Book a Session → Link to Contact ─── */}
              <Link
                to="/contact"
                className="bg-secondary text-white hover:bg-primary px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-secondary/30 flex items-center gap-2"
              >
                <Calendar size={16} /> Book a Session
              </Link>
              <a
                href="https://www.linkedin.com/in/akashsingh79/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-secondary/30 text-primary hover:bg-secondary/5 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2"
              >
                <LinkedInIcon size={16} /> Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* ─── Credentials Sidebar ─── */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-sm animate-on-scroll">
              <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-4">Credentials</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Shield size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-primary">CPRW™ Certified</p>
                    <p className="text-xs text-muted">Certified Professional Resume Writer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-primary">PARWCC Certified</p>
                    <p className="text-xs text-muted">Professional Association of Resume Writers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-primary">Global Talent Partner</p>
                    <p className="text-xs text-muted">North America · Europe · Middle East · APAC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10 animate-on-scroll">
              <p className="text-xs uppercase tracking-widest text-secondary font-bold">Featured On</p>
              <p className="text-primary font-semibold text-sm mt-1">
                Billboard of Times Square, New York
              </p>
              <p className="text-muted text-xs">9th April 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── CORE EXPERTISE ───
const CoreExpertise = () => {
  const expertise = [
    { icon: <Briefcase size={22} />, label: "Executive Search" },
    { icon: <Users size={22} />, label: "Leadership Hiring" },
    { icon: <FileCheck size={22} />, label: "ATS Optimization" },
    { icon: <PenTool size={22} />, label: "Board CV Writing" },
    { icon: <Target size={22} />, label: "LinkedIn Strategy" },
    { icon: <TrendingUp size={22} />, label: "Market Intelligence" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2 animate-on-scroll">
            Specialized Capabilities
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full animate-on-scroll"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className="bg-cream p-6 rounded-xl border border-secondary/10 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 group animate-on-scroll"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="text-secondary mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-primary font-semibold text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ACHIEVEMENT SHOWCASE ───
const AchievementShowcase = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-accent font-bold text-xs tracking-widest uppercase animate-on-scroll">
              Featured Achievement
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white animate-on-scroll">
              Featured on the Billboard of <br />
              <span className="italic text-accent">Times Square, New York</span>
            </h2>
            <p className="text-white/80 text-sm leading-relaxed animate-on-scroll">
              On <strong className="text-white">9th April 2025</strong>, Akash Singh was featured on the
              iconic Times Square billboard in New York — a testament to his global recognition as a
              top-tier executive career strategist.
            </p>
            <div className="flex flex-wrap gap-6 text-white/70 text-xs font-semibold uppercase tracking-wider animate-on-scroll">
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent" /> 27K+ Professionals
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent" /> 1,700+ Sessions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent" /> Top 0.1% on Platform
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-on-scroll">
            <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src={billboardImage}
                alt="Featured on Times Square Billboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── GLOBAL REACH ───
const GlobalReach = () => {
  const regions = [
    { name: "North America", flag: "🇺🇸", cities: "New York · Toronto · San Francisco" },
    { name: "Europe", flag: "🇬🇧", cities: "London · Paris · Frankfurt" },
    { name: "Middle East", flag: "🇦🇪", cities: "Dubai · Abu Dhabi · Riyadh" },
    { name: "APAC", flag: "🇸🇬", cities: "Singapore · Mumbai · Sydney" },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
            Global Footprint
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2 animate-on-scroll">
            Operating Across Continents
          </h2>
          <p className="text-muted mt-4 animate-on-scroll">
            Executive talent placement and career positioning across North America,
            Europe, Middle East, and Asia-Pacific.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-secondary/10 text-center hover:shadow-md transition-all duration-300 animate-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-3xl mb-2">{region.flag}</div>
              <p className="font-bold text-primary text-sm">{region.name}</p>
              <p className="text-muted text-[10px] uppercase tracking-wider mt-1">{region.cities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SERVICES OVERVIEW (with dynamic links) ───
const ServicesOverview = () => {
  // This list must have the same id as in the main services (1-6)
  const services = [
    { id: 1, icon: <FileCheck size={24} />, title: "ATS Resume Writing + LinkedIn", desc: "Complete ATS optimization with LinkedIn profile content. Rank 10x higher in recruiter searches.", price: "$110" },
    { id: 2, icon: <PenTool size={24} />, title: "Executive CV / Resume Writing", desc: "Deep researched CV writing for Business Heads, CXOs, Managing Directors, Partners & Board Members.", price: "$400" },
    { id: 3, icon: <Briefcase size={24} />, title: "Guaranteed Executive Job Search", desc: "Full-spectrum job search support across US, Europe, Middle East & APAC with daily outreach.", price: "$1,500" },
    { id: 4, icon: <Target size={24} />, title: "Executive Interview Preparation", desc: "Deep researched interview preparation with STAR and BEI-based responses & panel analysis.", price: "$400" },
    { id: 5, icon: <Users size={24} />, title: "LinkedIn & Job Boards Optimization", desc: "Profile optimization for LinkedIn, Indeed, Glassdoor, Bayt, Naukri & more. 10x visibility.", price: "$250" },
    { id: 6, icon: <Calendar size={24} />, title: "Job Search Strategy Session", desc: "30-min 1:1 video session covering the WHAT, WHY and HOW of executive job search.", price: "$300" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2 animate-on-scroll">
            Executive Career Solutions
          </h2>
          <p className="text-muted mt-4 animate-on-scroll">
            From ATS-optimized resumes for fresh graduates to deep-researched Executive CVs
            for C-Suite leaders. Every service is personally crafted and reviewed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-cream p-6 rounded-2xl border border-secondary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-secondary mb-3 group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="font-bold text-primary text-sm">{service.title}</h4>
              <p className="text-muted text-xs leading-relaxed mt-2">{service.desc}</p>
              <div className="mt-4 pt-4 border-t border-secondary/10 flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-primary">{service.price}</span>
                {/* ─── Book Now → Link to JobStrategy with id ─── */}
                <Link
                  to={`/services/${service.id}`}
                  className="text-secondary hover:text-primary text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  Book Now <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── TESTIMONIALS ───
const TestimonialsSection = () => {
  const reviews = [
    {
      quote: "The programmatic reconstruction of my asset history instantly shifted placement response velocities. Secured board-level alignment in London weeks ahead of roadmap targets.",
      name: "A. Sharma",
      title: "VP, Global Fintech",
    },
    {
      quote: "The algorithmic indexing strategy rebalanced visibility vectors beautifully. Profile discovery indicators hit an immediate 12x step-function optimization increment.",
      name: "M. Kaur",
      title: "Director, EY Middle East",
    },
    {
      quote: "Deep alignment and scannable technical layout structural integrity. Outstanding execution strategy from inception cycles down to distribution variables.",
      name: "R. Menon",
      title: "CXO, APAC Infrastructure",
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2 animate-on-scroll">
            What Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-secondary/10 hover:shadow-md transition-all animate-on-scroll"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex text-secondary gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-primary/90 text-sm leading-relaxed italic">"{review.quote}"</p>
              <div className="mt-6 pt-4 border-t border-secondary/10">
                <p className="text-primary font-bold text-sm">{review.name}</p>
                <p className="text-secondary text-xs font-semibold mt-0.5">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FINAL CTA ───
const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
        <span className="text-accent font-bold text-xs tracking-widest uppercase animate-on-scroll">
          Ready to Transform Your Career
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white animate-on-scroll">
          Engineer Your <span className="italic text-accent">Strategic Advantage</span>
        </h2>
        <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed animate-on-scroll">
          Secure a private, high-fidelity alignment briefing. Review operational pathways
          designed explicitly to maximize your executive performance yields.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          {/* ─── Schedule Call → mailto with pre-filled message ─── */}
          <a
            href="mailto:akash.ranawat007@gmail.com?subject=Schedule%20a%20Call&body=Hi%20Akash%2C%20I%20would%20love%20to%20schedule%20a%20call%20with%20you.%20Let%20me%20know%20when%20you're%20free."
            className="bg-white text-primary hover:bg-accent hover:text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-xl flex items-center gap-2 transition-all animate-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <Calendar size={16} /> Schedule Call
          </a>
          <a
            href="https://www.linkedin.com/in/akashsingh79/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold uppercase tracking-wider text-sm transition-all backdrop-blur-sm animate-on-scroll"
            style={{ transitionDelay: "250ms" }}
          >
            <LinkedInIcon size={16} /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};