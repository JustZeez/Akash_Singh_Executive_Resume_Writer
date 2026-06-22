import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Shield,
  Star,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  X,
  TrendingUp,
  MapPin,
  Briefcase,
  FileCheck,
  Target,
  Clock,
  Zap,
  Sparkles,
  MessageCircle,
  Building2,
  FileText,
  PenTool,
  Rocket,
  HelpCircle,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

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

// ─── Service Data ───
const services = [
  {
    id: 1,
    icon: <Zap size={32} className="text-secondary" />,
    title: "ATS Resume Writing + LinkedIn",
    description:
      "Rank up your profile to 10x higher in recruiter searches! Complete ATS optimization with LinkedIn profile content. Freshers to Senior Professionals.",
    price: "$110",
    originalPrice: "$200",
    tag: "Bestseller",
    popular: true,
  },
  {
    id: 2,
    icon: <PenTool size={32} className="text-secondary" />,
    title: "Executive CV / Resume Writing",
    description:
      "Deep researched CV writing for Business Heads, CXOs, Managing Directors, Partners, Non-Executive Board Members & Independent Directors.",
    price: "$400",
    originalPrice: "$700",
    tag: "Executive",
    popular: false,
  },
  {
    id: 3,
    icon: <Rocket size={32} className="text-secondary" />,
    title: "100% Guaranteed Executive Job Search",
    description:
      "Full-spectrum job search support for Executives across US, Europe, Middle East & APAC. Daily role identification, application & executive outreach.",
    price: "$1,500",
    originalPrice: "$2,700",
    tag: "Premium",
    popular: false,
  },
  {
    id: 4,
    icon: <Target size={32} className="text-secondary" />,
    title: "Executive Interview Preparation",
    description:
      "Deep researched interview preparation with STAR and BEI-based responses. Company research, panel analysis & country-specific insights.",
    price: "$400",
    originalPrice: "$700",
    tag: "Executive",
    popular: false,
  },
  {
    id: 5,
    icon: <LinkedInIcon size={32} className="text-secondary" />,
    title: "LinkedIn & Job Boards Optimization",
    description:
      "Profile optimization for LinkedIn, Indeed, Glassdoor, Monster, Bayt, Naukri & more. 10x visibility increase with keyword strategy.",
    price: "$250",
    originalPrice: "$300",
    tag: "Popular",
    popular: true,
  },
  {
    id: 6,
    icon: <MessageCircle size={32} className="text-secondary" />,
    title: "Job Search Strategy Session",
    description:
      "30-min 1:1 video session. Know the WHAT, WHY and HOW of job search. Personalized support for applications, networking & interview prep.",
    price: "$300",
    originalPrice: "$500",
    tag: "Best Value",
    popular: false,
  },
  {
    id: 7,
    icon: <FileText size={32} className="text-secondary" />,
    title: "33 Resume Templates + Cover Letter",
    description:
      "Craft Your Professional Identity! 33 premium templates including 1-page, 2-page, Google Slides formats + Cover Letters + References.",
    price: "Free",
    originalPrice: null,
    tag: "Free",
    popular: false,
  },
  {
    id: 8,
    icon: <Building2 size={32} className="text-secondary" />,
    title: "Referral at Big4, Google, Microsoft",
    description:
      "Professional referral service via Robert Walters network. Submit your resume and job ID for consideration at top global companies.",
    price: "By Request",
    originalPrice: null,
    tag: "Referral",
    popular: false,
  },
  {
    id: 9,
    icon: <HelpCircle size={32} className="text-secondary" />,
    title: "Ask Me Anything",
    description:
      "Send me a FREE message! Ask about my learnings, career advice, or recruitment insights. 470+ questions answered with detailed responses.",
    price: "Free",
    originalPrice: null,
    tag: "Free",
    popular: false,
  },
];

export default function Services() {
  const [counts, setCounts] = useState({
    resumes: 0,
    professionals: 0,
    hiringManagers: 0,
    years: 0,
  });

  const statsRef = useRef(null);

  // ─── Animate Stats ───
  useEffect(() => {
    const animateStats = (entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000;
        const steps = 60;
        let step = 0;
        const interval = setInterval(() => {
          step++;
          const progress = step / steps;
          setCounts({
            resumes: Math.min(Math.floor(100000 * progress), 100000),
            professionals: Math.min(Math.floor(7000 * progress), 7000),
            hiringManagers: Math.min(Math.floor(900 * progress), 900),
            years: Math.min(Math.floor(9 * progress), 9),
          });
          if (step >= steps) {
            clearInterval(interval);
            setCounts({
              resumes: 100000,
              professionals: 7000,
              hiringManagers: 900,
              years: 9,
            });
          }
        }, duration / steps);
        statsRef.current?.disconnect();
      }
    };

    const observer = new IntersectionObserver(animateStats, { threshold: 0.5 });
    const section = document.getElementById("stats-section");
    if (section) {
      observer.observe(section);
      statsRef.current = observer;
    }
    return () => observer.disconnect();
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

  return (
    <div className="min-h-screen pt-20 bg-cream text-primary overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-3 px-8 py-3 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-xl animate-on-scroll">
            <div className="px-4 py-1 bg-accent text-white text-xs font-bold rounded-2xl tracking-widest">
              ★ TOP 0.1% ON PLATFORM
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold text-white leading-[1.05] tracking-tight mb-6 animate-on-scroll">
            Ready to <span className="italic text-accent">Transform</span>
            <br />
            Your Career?
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-white/90 leading-relaxed animate-on-scroll">
            Join <strong>27,000+</strong> professionals who have accelerated their
            career growth with strategic positioning and ATS-optimized profiles.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12 animate-on-scroll">
            <a
              href="#services-grid"
              className="group bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-4 transition-all shadow-xl"
            >
              Explore Services <ArrowRight className="group-hover:translate-x-2 transition" />
            </a>
            <Link
              to="/contact"
              className="border border-white/40 text-white hover:bg-white/10 px-12 py-6 rounded-full text-lg font-medium flex items-center justify-center gap-3 transition-all backdrop-blur-xl"
            >
              <Sparkles size={20} /> Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BADGES / TRUST BAR ─── */}
      <div className="bg-white py-6 border-b border-secondary/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { icon: <Award size={20} className="text-secondary" />, label: "Top 0.1% on Platform" },
              { icon: <Shield size={20} className="text-secondary" />, label: "Trusted Pro '24" },
              { icon: <Star size={20} className="text-secondary" />, label: "Top Speaker '24" },
              { icon: <Users size={20} className="text-secondary" />, label: "People's Choice" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm font-semibold text-primary/80 animate-on-scroll"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SERVICES GRID ─── */}
      <section id="services-grid" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
              Executive Career Solutions
            </span>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-primary mt-3 animate-on-scroll">
              Strategic Services for <span className="italic text-accent">Every Career Stage</span>
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg animate-on-scroll">
              From ATS-optimized resumes for fresh graduates to deep-researched Executive CVs
              for C-Suite leaders. Every service is personally crafted and reviewed by me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`bg-white rounded-3xl border ${
                  service.popular ? "border-secondary shadow-xl" : "border-secondary/10 shadow-md"
                } hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group animate-on-scroll`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Tag */}
                {service.tag && (
                  <div className="px-6 pt-4">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        service.tag === "Bestseller"
                          ? "bg-accent text-white"
                          : service.tag === "Premium"
                          ? "bg-primary text-white"
                          : service.tag === "Executive"
                          ? "bg-secondary text-white"
                          : service.tag === "Popular"
                          ? "bg-amber-500 text-white"
                          : service.tag === "Best Value"
                          ? "bg-emerald-500 text-white"
                          : service.tag === "Free"
                          ? "bg-muted text-white"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>

                  <div className="mt-6 pt-6 border-t border-secondary/10 flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-serif font-bold text-primary">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-muted text-sm line-through ml-2">{service.originalPrice}</span>
                      )}
                    </div>
                    <Link
                      to={`/services/${service.id}`}
                      className="bg-secondary text-white hover:bg-primary px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 group-hover:shadow-lg"
                    >
                      Book Now <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section id="stats-section" className="py-20 bg-white border-t border-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Resumes Reviewed", value: counts.resumes, suffix: "+" },
              { label: "Professionals Helped", value: counts.professionals, suffix: "+" },
              { label: "Hiring Managers Met", value: counts.hiringManagers, suffix: "+" },
              { label: "Years Experience", value: counts.years, suffix: "+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center group animate-on-scroll"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-5xl md:text-6xl font-serif font-bold text-secondary tabular-nums group-hover:scale-110 transition-transform">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <p className="text-muted text-sm mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-28 bg-gradient-to-b from-primary to-secondary relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-xl mb-8 animate-on-scroll">
            <Sparkles size={16} className="text-accent" />
            <span className="text-white/80 text-sm font-medium tracking-wider">Limited Slots Available</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight animate-on-scroll">
            Ready to <span className="italic text-accent">Transform</span>
            <br />
            Your Career?
          </h2>

          <p className="text-white/80 text-xl mt-6 max-w-lg mx-auto animate-on-scroll">
            Join <strong>27,000+ professionals</strong> who have accelerated their
            career growth with strategic positioning and ATS-optimized profiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link
              to="/contact"
              className="group bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-4 transition-all shadow-xl animate-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              Get Started Today <ArrowRight className="group-hover:translate-x-2 transition" />
            </Link>
            <a
              href="#services-grid"
              className="border border-white/40 text-white hover:bg-white/10 px-12 py-6 rounded-full text-lg font-medium flex items-center justify-center gap-3 transition-all backdrop-blur-xl animate-on-scroll"
              style={{ transitionDelay: "250ms" }}
            >
              <Calendar size={20} /> Explore All Services
            </a>
          </div>

          <p className="text-white/50 text-sm mt-8 animate-on-scroll">100% Secure • Money-back Satisfaction Guarantee</p>
        </div>
      </section>

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