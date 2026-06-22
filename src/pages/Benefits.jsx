import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  AlertCircle,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Homepage background image for hero
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

// ─── Custom Search Icon ───
const SearchIcon = ({ size = 24, className = "" }) => (
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
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export default function Benefits() {
  const [openFaq, setOpenFaq] = useState(null);
  const [counts, setCounts] = useState({
    clients: 0,
    resumes: 0,
    recruiters: 0,
    hiringManagers: 0,
  });

  // ─── Meet Akash stats ───
  const [meetCounts, setMeetCounts] = useState({
    years: 0,
    clients: 0,
    followers: 0,
  });

  const statsRef = useRef(null);
  const meetStatsRef = useRef(null);

  // ─── Animate stats for main stats section ───
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
            clients: Math.min(Math.floor(7000 * progress), 7000),
            resumes: Math.min(Math.floor(100000 * progress), 100000),
            recruiters: Math.min(Math.floor(300 * progress), 300),
            hiringManagers: Math.min(Math.floor(900 * progress), 900),
          });
          if (step >= steps) {
            clearInterval(interval);
            setCounts({
              clients: 7000,
              resumes: 100000,
              recruiters: 300,
              hiringManagers: 900,
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

  // ─── Animate Meet Akash stats ───
  useEffect(() => {
    const animateMeetStats = (entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000;
        const steps = 60;
        let step = 0;
        const interval = setInterval(() => {
          step++;
          const progress = step / steps;
          setMeetCounts({
            years: Math.min(Math.floor(9 * progress), 9),
            clients: Math.min(Math.floor(7000 * progress), 7000),
            followers: Math.min(Math.floor(27000 * progress), 27000),
          });
          if (step >= steps) {
            clearInterval(interval);
            setMeetCounts({
              years: 9,
              clients: 7000,
              followers: 27000,
            });
          }
        }, duration / steps);
        meetStatsRef.current?.disconnect();
      }
    };

    const observer = new IntersectionObserver(animateMeetStats, { threshold: 0.5 });
    const section = document.getElementById("meet-stats");
    if (section) {
      observer.observe(section);
      meetStatsRef.current = observer;
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // ─── FAQ Data ───
  const faqs = [
    {
      question: "How long does it take to get my resume draft?",
      answer:
        "Once I receive your current resume and details, the initial draft will be delivered within 3 business days (72 hours). Revisions are typically turned around within 2 business days.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "I offer unlimited revisions until you are completely satisfied with the profile. My goal is to ensure you are confident in your application materials.",
    },
    {
      question: "Do you work with professionals at all career levels?",
      answer:
        "Yes. I support professionals from fresh graduates to C-Suite Executives across various industries including Tech, Finance, Healthcare, Marketing, and Operations in global markets (US, UK, India, APAC).",
    },
    {
      question: "What makes your service different from other resume writers?",
      answer:
        "With 9+ years of experience in Global Leadership Hiring and Executive Search (currently with Robert Walters), I work at the intersection of recruitment intelligence and career positioning. I have personally reviewed 100,000+ resumes and spoken with over 300+ recruiters and 900+ hiring managers globally. I know exactly what gets a candidate shortlisted.",
    },
    {
      question: "Do you offer a satisfaction guarantee?",
      answer:
        "Yes. I offer a money-back satisfaction guarantee. If you're not completely satisfied with the final result, I'll work with you until you are, or refund your investment.",
    },
  ];

  // ─── Industry Expertise Data ───
  const industries = [
    {
      category: "Financial & Investment",
      subcategories: [
        "FinTech",
        "Banking & Financial Services",
        "Private Equity",
        "Venture Capital",
        "Investment Banking",
        "Asset Management",
      ],
    },
    {
      category: "Consulting & Tech",
      subcategories: [
        "Management & Strategy Consulting",
        "Big4 Advisory",
        "Software & SaaS",
        "AI & Cybersecurity",
        "Cloud Technology",
      ],
    },
    {
      category: "Consumer & Industrial",
      subcategories: [
        "Retail & E-Commerce",
        "FMCG & Luxury Brands",
        "Manufacturing",
        "Automotive",
        "Supply Chain & Logistics",
        "Energy & Utilities",
      ],
    },
    {
      category: "Healthcare & Media",
      subcategories: [
        "HealthTech & Innovation",
        "Telecommunications",
        "Media & Digital Platforms",
        "Hospitality & Travel",
      ],
    },
  ];

  // ─── Awards Data ───
  const awards = [
    { title: "Top 0.1% Career Consultant", issuer: "Topmate" },
    { title: "Trusted Pro 2024 – 2025", issuer: "Topmate" },
    { title: "Top Speaker 2024 – 2025", issuer: "Topmate" },
    { title: "People's Choice Award", issuer: "Topmate" },
    { title: "Top Voice Executive Branding Expert", issuer: "LinkedIn" },
    { title: "Global Leadership Hiring Specialist", issuer: "Topmate" },
    { title: "Strategic Global Talent Partner", issuer: "Robert Walters" },
    { title: "Senior Leadership Hiring Specialist", issuer: "Robert Walters" },
  ];

  // ─── Certifications Data ───
  const certifications = [
    {
      title: "Certified Professional Resume Writer (CPRW)",
      organization: "Professional Association of Resume Writers and Career Coaches",
      icon: <Award size={36} className="text-secondary" />,
    },
    {
      title: "AON Certified BEI Expert",
      organization: "Behavioral Event Interviewing Specialist",
      icon: <Shield size={36} className="text-secondary" />,
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-cream text-primary overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-3 px-8 py-3 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-xl animate-on-scroll">
            <div className="px-4 py-1 bg-accent text-white text-xs font-bold rounded-2xl tracking-widest">
              ★ #1 BESTSELLER SERVICE
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold text-white leading-[1.05] tracking-tight mb-6 animate-on-scroll">
            Rank <span className="italic text-accent">10x Higher</span>
            <br />
            in Recruiter Searches
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-white/90 leading-relaxed animate-on-scroll">
            Certified Professional Resume Writer (CPRW™) service designed to beat
            the ATS and position you as the top 1% candidate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 animate-on-scroll">
            <Link
              to="/contact"
              className="group bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-4 transition-all shadow-xl"
            >
              Start Now <ArrowRight className="group-hover:translate-x-2 transition" />
            </Link>
            <a
              href="#faq"
              className="border border-white/40 text-white hover:bg-white/10 px-12 py-6 rounded-full text-lg font-medium flex items-center justify-center gap-3 transition-all backdrop-blur-xl"
            >
              <ChevronDown size={20} /> See FAQs
            </a>
          </div>

          <p className="text-white/60 text-sm mt-8 animate-on-scroll">100% Secure Payment • Money-back Satisfaction Guarantee</p>
        </div>
      </section>

      {/* ─── TRUST MARQUEE ─── */}
      <div className="bg-white py-4 border-b border-secondary/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-secondary font-medium">
          {Array(5)
            .fill("★ Trusted by 7,000+ Professionals · 5.0/5 Rating · Global Clients Across North America · Europe · Middle East · APAC")
            .map((text, i) => (
              <span key={i} className="mx-16 text-sm tracking-widest">
                {text}
              </span>
            ))}
        </div>
      </div>

      {/* ─── STATS SECTION ─── */}
      <section id="stats-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Clients Trusted", value: counts.clients, suffix: "+" },
              { label: "Resumes Reviewed", value: counts.resumes, suffix: "+" },
              { label: "Recruiters Connected", value: counts.recruiters, suffix: "+" },
              { label: "Hiring Managers", value: counts.hiringManagers, suffix: "+" },
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

      {/* ─── THE PROBLEM ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
              The Problem
            </span>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-primary mt-3 animate-on-scroll">
              Is Your Resume Getting You Rejected?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock size={32} className="text-secondary" />,
                title: "The 7-Second Rule",
                desc: "Recruiters spend an average of just 7 seconds reviewing a resume. If you don't hook them instantly, you're out.",
              },
              {
                icon: <AlertCircle size={32} className="text-secondary" />,
                title: "The ATS Black Hole",
                desc: "75% of resumes are rejected by Applicant Tracking Systems before a human ever sees them due to poor formatting.",
              },
              {
                icon: <Zap size={32} className="text-secondary" />,
                title: "Invisible Impact",
                desc: "Listing duties instead of achievements makes you invisible. You need to communicate ROI, not just responsibilities.",
              },
              {
                icon: <Target size={32} className="text-secondary" />,
                title: "Resume Score: 98/100",
                desc: "Detailed keyword optimization, quantifiable achievements, and executive summary refinement — the difference between rejected and shortlisted.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-secondary/10 hover:border-secondary shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="text-secondary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─── */}
      <section className="py-24 bg-white border-t border-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
              The Solution
            </span>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-primary mt-3 animate-on-scroll">
              Get More Interviews with an <span className="italic text-accent">Executive-Grade</span> Profile
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg animate-on-scroll">
              As a Global Talent Partner and CPRW™, I don't just write resumes; I build strategic career narratives.
              Whether you are a fresher or a C-Suite executive, I align your profile with what recruiters actually search for.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileCheck size={40} className="text-secondary" />,
                title: "ATS Optimization",
                desc: "Structured to pass algorithms and rank 10x higher in databases.",
              },
              {
                icon: <LinkedInIcon size={40} className="text-secondary" />,
                title: "LinkedIn Branding",
                desc: "Keyword-rich headlines and summaries to attract headhunters.",
              },
              {
                icon: <SearchIcon size={40} className="text-secondary" />,
                title: "Recruiter Insight",
                desc: "Built using Boolean & X-Ray search techniques real recruiters use.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-cream p-10 rounded-3xl border border-secondary/10 hover:border-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl text-center group animate-on-scroll"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="text-secondary mb-6 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY EXPERTISE ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
              Industry Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-primary mt-3 animate-on-scroll">
              Specialized Across High-Impact Global Sectors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-secondary/10 hover:border-secondary shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">{industry.category}</h3>
                <ul className="space-y-2">
                  {industry.subcategories.map((sub, i) => (
                    <li key={i} className="text-muted text-sm flex items-start gap-2">
                      <Check size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEET AKASH ─── */}
      <section className="py-24 bg-white border-t border-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-on-scroll">
              <span className="text-secondary font-bold text-xs tracking-widest uppercase">Meet Akash Singh, CPRW™</span>
              <h2 className="text-5xl font-serif tracking-tight text-primary">
                Global Talent Partner &amp; Certified Resume Writer
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                With <strong>9+ years</strong> of experience in Global Leadership Hiring and Executive Search
                (currently with Robert Walters), I work at the intersection of recruitment intelligence
                and career positioning.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                I have personally reviewed <strong>100,000+ resumes</strong> and spoken with over{' '}
                <strong>300+ recruiters</strong> and <strong>900+ hiring managers</strong> globally.
                This gives me a distinct advantage: I know exactly what gets a candidate shortlisted.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                My work involves mapping C-Suite executives and leaders across VC firms and high-growth
                startups. I use this deep market intelligence to craft resumes that communicate
                enterprise impact, not just manage duties.
              </p>
              <div id="meet-stats" className="flex flex-wrap gap-8 pt-4">
                <div>
                  <p className="text-3xl font-serif font-bold text-secondary">
                    {meetCounts.years}+
                  </p>
                  <p className="text-xs text-muted uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-secondary">
                    {meetCounts.clients.toLocaleString()}+
                  </p>
                  <p className="text-xs text-muted uppercase tracking-widest">Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-secondary">
                    {meetCounts.followers.toLocaleString()}+
                  </p>
                  <p className="text-xs text-muted uppercase tracking-widest">Followers</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-secondary">CPRW™</p>
                  <p className="text-xs text-muted uppercase tracking-widest">Certified</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <div className="bg-cream p-8 rounded-3xl border border-secondary/10">
                <blockquote className="text-primary font-serif text-xl leading-relaxed italic">
                  "Helping high-impact leaders identify opportunities while positioning themselves for global leadership."
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">
                    AS
                  </div>
                  <div>
                    <p className="text-primary font-bold">Akash Singh</p>
                    <p className="text-secondary text-sm font-semibold uppercase tracking-wider">CPRW™ Strategist</p>
                  </div>
                </div>
              </div>

              {/* Featured on Billboard */}
              <div className="bg-primary p-8 rounded-3xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={28} className="text-accent" />
                  <span className="text-accent font-bold text-xs tracking-widest uppercase">Featured On</span>
                </div>
                <h4 className="text-2xl font-serif font-bold">Billboard of Times Square, New York</h4>
                <p className="text-white/70 text-sm mt-2">Marking Global Excellence | 9th April 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AWARDS & BADGES ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
              Awards & Badges
            </span>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-primary mt-3 animate-on-scroll">
              Recognized Excellence
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-secondary/10 hover:border-secondary text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-on-scroll"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="text-secondary text-3xl mb-3">🏆</div>
                <p className="text-primary font-bold text-sm">{award.title}</p>
                <p className="text-muted text-xs mt-1">{award.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="py-24 bg-white border-t border-secondary/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
              Licenses & Certifications
            </span>
            <h2 className="text-5xl font-serif tracking-tight text-primary mt-3 animate-on-scroll">
              Globally Recognized Credentials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-cream p-8 rounded-3xl border border-secondary/10 hover:border-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex items-start gap-6 animate-on-scroll"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="bg-white p-4 rounded-2xl text-secondary">{cert.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-primary leading-tight">{cert.title}</h4>
                  <p className="text-muted mt-2">{cert.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section id="faq" className="py-24 bg-cream border-t border-secondary/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
              Questions?
            </span>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-primary mt-3 animate-on-scroll">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 overflow-hidden animate-on-scroll"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-secondary/5"
                >
                  <span className="text-lg font-semibold text-primary pr-8">{faq.question}</span>
                  <span className="flex-shrink-0 text-secondary">
                    {openFaq === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </span>
                </button>
                <div
                  className={`px-8 overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? "pb-6 max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-muted leading-relaxed border-t border-secondary/10 pt-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-28 bg-gradient-to-b from-primary to-secondary relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight animate-on-scroll">
            Ready to Rank #1?
          </h2>
          <p className="text-white/80 text-xl mt-6 max-w-lg mx-auto animate-on-scroll">
            Don't let another opportunity slip by. Invest in a resume that works as hard as you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link
              to="/contact"
              className="group bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-4 transition-all shadow-xl animate-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              Book Your Spot – $110 <ArrowRight className="group-hover:translate-x-2 transition" />
            </Link>
          </div>
          <p className="text-white/50 text-sm mt-8 animate-on-scroll">Secure booking • Money-back satisfaction guarantee</p>
        </div>
      </section>

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