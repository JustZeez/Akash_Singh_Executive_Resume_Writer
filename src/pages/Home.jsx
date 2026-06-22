import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import {
  Award,
  MapPin,
  Briefcase,
  FileCheck,
  PenTool,
  Target,
  ArrowRight,
  Star,
  Calendar,
  Rocket,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";

import bgImage from "../assets/images/background-image.png";
import profilePhoto from "../assets/images/professional-photo.jpg";

export default function Home() {
  // Set up scroll‑triggered animations
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
      <CredibilityBar />
      <ServicesPreview />
      <WhyTrust />
      <ProcessPreview />
      <TestimonialsSection />
      <FinalCTA />

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

// ---------- HERO ----------
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8">
            <div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase animate-slide-up"
              style={{ animationDelay: "0ms" }}
            >
              <Award size={14} /> CPRW™ Certified · Elite Strategist
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              Rank <span className="italic text-accent">10x Higher</span> <br />
              in Executive Searches
            </h1>

            <p
              className="text-white/90 text-lg max-w-xl leading-relaxed animate-slide-up"
              style={{ animationDelay: "400ms" }}
            >
              Certified Professional Resume Writer (CPRW™) service engineered to beat ATS algorithms and position your profile as the indispensable top 1% candidate.
            </p>

            {/* ─── BUTTONS ─── */}
            <div
              className="pt-4 flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: "600ms" }}
            >
              {/* ✅ Book Now – now using Link to /contact */}
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-accent hover:text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-xl flex items-center gap-2"
              >
                <Calendar size={18} /> Book Now
              </Link>

              {/* Explore Expertise – stays as anchor for section scroll */}
              <a
                href="#expertise"
                className="border border-white/40 text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 backdrop-blur-sm"
              >
                Explore Expertise
              </a>
            </div>

            <div
              className="pt-6 flex flex-wrap items-center gap-8 text-white/80 text-xs font-semibold uppercase tracking-wider animate-slide-up"
              style={{ animationDelay: "800ms" }}
            >
              <span className="flex items-center gap-2">
                <Users size={16} className="text-accent" /> 27K+ Empowered
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-accent" /> 8+ Years Exp.
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" /> Global Placements
              </span>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-0.5 -right-2 bg-white text-primary px-6 py-5 rounded-xl shadow-xl flex items-center gap-3 border border-secondary/20">
            <div className="bg-secondary/20 p-2 rounded-lg">
              <TrendingUp size={18} className="text-secondary" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted font-bold">Success Rate</p>
              <p className="text-sm font-extrabold">Top 1% Profile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- CREDIBILITY BAR ----------
const CredibilityBar = () => {
  const stats = [
    { icon: <MapPin size={20} />, label: "Global Footprint", value: "NY · LDN · SG" },
    { icon: <Award size={20} />, label: "CPRW™ Credentials", value: "Accredited Elite" },
    { icon: <Briefcase size={20} />, label: "Executive Mandates", value: "27,000+" },
    { icon: <FileCheck size={20} />, label: "ATS Optimized", value: "100k+ Scanned" },
  ];

  return (
    <section id="benefits" className="py-16 bg-white border-y border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group space-y-1 animate-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-secondary mb-1 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <p className="font-serif text-xl font-bold text-primary">
                {stat.value}
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

// ---------- SERVICES ----------
const ServicesPreview = () => {
  const services = [
    {
      icon: <PenTool size={28} />,
      title: "Executive Architecture",
      desc: "High-impact CV engineering built to illustrate complex cross-border scale metrics, regional P&L mandates, and transformation performance frameworks.",
    },
    {
      icon: <Users size={28} />,
      title: "Digital Brand Optimisation",
      desc: "Advanced profile reconfiguration built to amplify discoverability, indexing search weightings, and conversion velocity across major talent pipelines.",
    },
    {
      icon: <Target size={28} />,
      title: "Strategic Positioning",
      desc: "Tailored private placement methodologies, narrative consulting, and senior stakeholder negotiation coaching leveraging STAR system design matrices.",
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
            Expertise Fields
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2 animate-on-scroll">
            Precision Positioning Strategies
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full animate-on-scroll"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-secondary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-on-scroll"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div>
                <div className="text-secondary mb-4 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-secondary/10">
                <a
                  href="#contact"
                  className="inline-flex items-center text-secondary font-semibold text-sm hover:text-primary transition-colors"
                >
                  Acquire Blueprint <ArrowRight size={14} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- WHY TRUST ----------
const WhyTrust = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-on-scroll" style={{ transitionDelay: "0ms" }}>
            <span className="text-secondary font-bold text-xs tracking-widest uppercase">Validated Grounding</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight">
              Elite Alignment. Inside Knowledge.
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Operating within prominent global talent recruitment spaces, my methodology bypasses theoretical guesswork. I execute directly on empirical target indicators, formatting architectures around verified market signals derived across top leadership hubs globally.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-cream rounded-lg border border-secondary/10 animate-on-scroll" style={{ transitionDelay: "100ms" }}>
                <p className="font-bold text-primary text-sm">CPRW Certified</p>
                <p className="text-muted text-xs">Accredited Authority</p>
              </div>
              <div className="p-4 bg-cream rounded-lg border border-secondary/10 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
                <p className="font-bold text-primary text-sm">Live Infrastructure</p>
                <p className="text-muted text-xs">Real-Time Placement Insights</p>
              </div>
            </div>
          </div>
          <div className="bg-cream p-10 rounded-2xl border border-secondary/20 shadow-xl max-w-lg mx-auto animate-on-scroll" style={{ transitionDelay: "150ms" }}>
            <blockquote className="text-primary font-serif text-xl leading-relaxed italic">
              "Your corporate visibility strategy functions as a key financial ledger tool. It must match the rigor of multi-tier portfolio evaluations."
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs">
                AS
              </div>
              <div>
                <p className="text-primary font-bold">Akash Singh</p>
                <p className="text-secondary text-xs font-semibold uppercase tracking-wider">CPRW™ Strategist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- PROCESS ----------
const ProcessPreview = () => {
  const steps = [
    { icon: <FileCheck size={22} />, title: "Structural Audit", desc: "Granular discovery phase unpacking operational scale metrics and specific geography positioning vectors." },
    { icon: <PenTool size={22} />, title: "Draft Engineering", desc: "Translating engineering, governance, or portfolio milestones into strategic high-density leadership frameworks." },
    { icon: <Target size={22} />, title: "Refining Alignment", desc: "Collaborative execution workflows designed to adjust nuance variables exactly to specialized placement vectors." },
    { icon: <Rocket size={22} />, title: "Asset Deployment", desc: "Comprehensive onboarding across active global acquisition pipelines with built-in post-launch operational buffers." },
  ];

  return (
    <section id="process" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
            Operational Map
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2 animate-on-scroll">
            The Transformation Methodology
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-secondary/10 hover:shadow-lg transition-all text-center group animate-on-scroll"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="text-secondary mb-4 flex justify-center group-hover:scale-105 transition-transform duration-300">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold text-primary">{step.title}</h4>
              <p className="text-muted text-sm leading-relaxed mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- TESTIMONIALS ----------
const TestimonialsSection = () => {
  const reviews = [
    {
      quote: "The programmatic reconstruction of my asset history instantly shifted placement response velocities. Secured board-level alignment in London weeks ahead of roadmap targets.",
      name: "A. Sharma",
      title: "VP, Global Fintech",
    },
    {
      quote: "The algorithmic indexing strategy rebalanced visibility vectors beautifully. Profile discovery indicators hit an immediate 12x step-function optimization increment inside cycle margins.",
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
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase animate-on-scroll">
            Verified Yields
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2 animate-on-scroll">
            Systemic Execution Metrics
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-cream p-8 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-all animate-on-scroll"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex text-secondary gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-primary/90 text-base leading-relaxed italic font-medium">"{review.quote}"</p>
              <div className="mt-6 pt-4 border-t border-secondary/10">
                <p className="text-primary font-bold">{review.name}</p>
                <p className="text-secondary text-xs font-semibold mt-0.5">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const FinalCTA = () => {
  return (
    <section id="contact" className="py-28 bg-primary relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        <span className="text-accent font-bold text-xs tracking-widest uppercase animate-on-scroll">
          Initialize Reconfiguration
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white animate-on-scroll">
          Engineer Your Strategic Advantage
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed animate-on-scroll">
          Secure a private, high-fidelity alignment briefing. Review operational pathways designed explicitly to maximize performance yields.
        </p>

        <div className="pt-6 flex flex-wrap justify-center gap-4">
          {/* ─── Schedule Call – now a mailto link ─── */}
          <a
            href="mailto:akash.ranawat007@gmail.com?subject=Schedule%20a%20Call&body=Hi%20Akash%2C%20I%20would%20love%20to%20schedule%20a%20call%20with%20you.%20Let%20me%20know%20when%20you're%20free."
            className="bg-white text-primary hover:bg-accent hover:text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-xl flex items-center gap-2 transition-all animate-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <Calendar size={16} /> Schedule Call
          </a>

          <a
            href="#expertise"
            className="border border-white/40 text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold uppercase tracking-wider text-sm transition-all backdrop-blur-sm animate-on-scroll"
            style={{ transitionDelay: "250ms" }}
          >
            Review Core Matrix
          </a>
        </div>
      </div>
    </section>
  );
};