import React, { useState } from "react";
import {
  Award,
  Shield,
  Star,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  X,
  AlertCircle,
  DollarSign,
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
  Mail,
  Phone,
  User,
  Globe,
  ThumbsUp,
  Upload,
  Eye,
  BarChart,
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

// ─── Custom LinkedIn Icon ───
const LinkedInIcon = ({ size = 40, className = "" }) => (
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

// ─── Full Service Details ───
const serviceDetails = {
  1: {
    id: 1,
    title: "ATS Resume Writing + LinkedIn ⚡",
    subtitle: "Freshers to Senior Professionals Resume Writing Service",
    price: "$110",
    priceINR: "₹10,000",
    priceGBP: "£80",
    originalPrice: "$200",
    tag: "Bestseller",
    icon: <Zap size={40} className="text-secondary" />,
    shortDescription:
      "Rank up your profile to 10x higher in recruiter searches! Complete ATS optimization with LinkedIn profile content. Freshers to Senior Professionals.",
    formType: "default",
    fullDescription: `Are you looking to elevate your resume and make a strong impression in today's competitive job market?

Your resume is often the first opportunity to present your professional story to recruiters and hiring managers. A well-structured resume can significantly improve your chances of moving forward in the hiring process.

As a Certified Professional Resume Writer (CPRW™, PARWCC) with experience supporting Global Talent Acquisition and Leadership Hiring, I specialize in crafting high-impact ATS resumes and LinkedIn profiles designed to improve recruiter visibility and interview opportunities.

My goal is to ensure your resume:
• Passes Applicant Tracking Systems (ATS)
• Improves your chances of ranking 10x higher in recruiter searches and talent databases
• Attracts attention from hiring managers and recruiters
• Clearly communicates your achievements and career value

Professionals I support range from fresh graduates to experienced professionals and emerging leaders across industries.

Target markets often include India, North America, Europe, Middle East and Asia-Pacific.

Your resume and LinkedIn profile are optimized using ATS best practices along with the Boolean and Google X-ray search techniques recruiters use to identify candidates.`,

    whyItMatters: `Research consistently shows how competitive the hiring process can be.

According to Forbes, recruiters spend an average of about 7 seconds reviewing a resume during the initial screening.

Another report from TeamStage suggests that less than 3% of submitted resumes result in interviews.

In such a competitive environment, your resume needs to capture attention quickly, communicate impact clearly and position you as a strong candidate within seconds.`,

    whatIProvide: [
      "Custom Resume Creation: A brand-new resume tailored to your career goals, experience level and target industry, highlighting your most relevant skills and achievements.",
      "ATS Optimization: Your resume will be structured and formatted to pass Applicant Tracking Systems while maintaining readability for human recruiters.",
      "Achievement-Focused Writing: Your experience will be reframed using quantified achievements and impact-driven bullet points that highlight real contributions.",
      "Format and Structure Refinement: A modern, professional resume layout that improves readability, clarity and overall presentation.",
      "Targeted Keyword Strategy: Your resume will incorporate role-specific keywords to improve search visibility in recruiter databases and job platforms.",
    ],

    whyWorkWithMe: `As a Certified Professional Resume Writer (CPRW™, PARWCC) with experience supporting global recruitment and leadership hiring, I understand how recruiters evaluate resumes.

This means your resume is built with practical insight into:
• Recruiter screening behavior
• ATS filtering systems
• Keyword-based candidate searches
• Hiring manager expectations

Every resume is developed through a personalized approach aligned with your career goals, industry expectations and future opportunities.`,

    background: {
      years: "9+",
      recruiters: "300+",
      hiringManagers: "900+",
      resumesReviewed: "100,000+",
      professionalsHelped: "7,000+",
      description: "With 9+ years of experience supporting recruitment and talent evaluation, I have spoken with 300+ recruiters, interacted with 900+ hiring managers, reviewed 100,000+ resumes, and helped 7,000+ professionals improve their resumes. This exposure provides real insight into what actually gets candidates shortlisted.",
    },

    whatYouGet: [
      "ATS-optimized Resume (DOCX and PDF formats)",
      "Fully written LinkedIn Profile Content tailored to your job role",
      "Professional Cover Letter (if required)",
      "Reference Page (if required)",
      "33 Premium Resume Templates",
    ],

    deliveryTimeline: {
      initialDraft: "Within 3 business days after receiving your information",
      revisions: "Unlimited Revisions with 2 business days turnaround per revision round",
    },

    requirements: [
      "Your current resume (Word or PDF format)",
      "Links to 3-5 job postings you're targeting",
      "Your LinkedIn profile URL",
      "Any specific achievements or metrics you'd like to highlight",
    ],

    testimonials: [
      "“My interview calls increased by 300% within 2 weeks!” – Jason W.",
      "“Akash's work is exceptional. He transformed my resume and I landed my dream job.” – Barbara W.",
      "“I went from 0 interview calls to 5 in just one week after using this service!” – Rachel J.",
    ],

    orderSummary: {
      items: [{ name: "ATS Resume Writing + LinkedIn ⚡ (Bestseller)", price: "$110" }],
      total: "$110",
    },
  },

  // ─── EXECUTIVE CV / RESUME WRITING (id:2) ───
  2: {
    id: 2,
    title: "Executive CV / Resume Writing",
    subtitle: "For Business Heads, CXOs, Managing Directors & Board Members",
    price: "$400",
    priceINR: "₹34,000",
    priceGBP: "£310",
    originalPrice: "$700",
    tag: "Executive",
    icon: <PenTool size={40} className="text-secondary" />,
    shortDescription:
      "Deep researched CV writing for Business Heads, CXOs, Managing Directors, Partners, Non-Executive Board Members & Independent Directors.",
    formType: "executive",
    fullDescription: `This is a premium, deep‑dive service for senior executives who need to communicate strategic value at the highest level.

I work with C‑Suite leaders, Managing Directors, Partners, and Board Members to craft compelling narratives that highlight leadership impact, governance experience, and the ability to drive transformation across global markets.

Every CV is developed through a personalized discovery process, ensuring your unique value proposition is clearly articulated for search committees and board evaluations.`,

    whyItMatters: `For executive roles, a standard resume isn't enough. Search committees expect to see strategic thinking, enterprise impact, and measurable outcomes.

Your CV must demonstrate:
• Revenue growth and P&L management
• Organizational transformation
• Board and stakeholder engagement
• Global market expansion
• M&A experience and integration`,

    whatIProvide: [
      "Strategic narrative building with quantified achievements",
      "Board‑ready formatting with professional design",
      "Customized for global markets (US, UK, Middle East, APAC)",
      "Comprehensive CV tailored for C‑Suite and board‑level roles",
      "Cover letter and LinkedIn synopsis for executive presence",
    ],

    whyWorkWithMe: `With 9+ years in global leadership hiring and executive search (currently with Robert Walters), I understand exactly what boards and search committees look for.

I have mapped Board Members, Independent Directors, and CXOs across venture capital firms, high-growth startups, and established enterprises – giving me unparalleled insight into what makes an executive profile stand out.`,

    background: {
      years: "9+",
      recruiters: "300+",
      hiringManagers: "900+",
      resumesReviewed: "100,000+",
      professionalsHelped: "7,000+",
      description: "Currently with Robert Walters, I focus on global leadership hiring and executive talent mapping. This exposure provides real insight into what gets candidates shortlisted for board-level positions.",
    },

    whatYouGet: [
      "Comprehensive CV tailored for C‑Suite and board‑level roles",
      "Strategic narrative building with quantified achievements",
      "Board‑ready formatting with professional design",
      "Customized for global markets (US, UK, Middle East, APAC)",
      "2 rounds of revisions included",
      "Cover letter and LinkedIn synopsis",
    ],

    deliveryTimeline: {
      initialDraft: "Within 5 business days after receiving your information",
      revisions: "2 business days turnaround per revision round",
    },

    requirements: [
      "Your current CV (any format)",
      "Key achievements with measurable impact (revenue growth, cost savings, team size, etc.)",
      "Your career aspirations and target roles",
      "Any specific companies or industries you're targeting",
    ],

    testimonials: [
      "“Akash's executive CV landed me a board position in London within 6 weeks.” – Emily D.",
      "“His understanding of what private equity firms look for is unparalleled.” – Robert W.",
    ],

    orderSummary: {
      items: [{ name: "Executive CV / Resume Writing (Executive)", price: "$400" }],
      total: "$400",
    },
  },

  // ─── 100% GUARANTEED EXECUTIVE JOB SEARCH (id:3) ───
  3: {
    id: 3,
    title: "100% Guaranteed Executive Job Search",
    subtitle: "Full-Spectrum Support for US, Europe, Middle East & APAC",
    price: "$1,500",
    priceINR: "₹1,25,000",
    priceGBP: "£1,160",
    originalPrice: "$2,700",
    tag: "Premium",
    icon: <Rocket size={40} className="text-secondary" />,
    shortDescription:
      "Full-spectrum job search support for Executives across US, Europe, Middle East & APAC. Daily role identification, application & executive outreach.",
    formType: "jobguaranteed",
    fullDescription: `This is our most comprehensive service – a complete hands‑on job search campaign designed for executives who want to secure their next leadership role without the stress.

I'll act as your personal job search strategist, identifying opportunities, tailoring applications, and reaching out to recruiters on your behalf. You'll get daily updates and full transparency. We don't stop until you've secured a role you love.`,

    whyItMatters: `Executive job search is different. It requires strategic networking, targeted outreach, and positioning that goes beyond job boards.

Most executive roles are filled through networks and referrals. Our service leverages my extensive connections across global markets to get your profile in front of decision-makers.`,

    whatIProvide: [
      "Daily role identification matching your profile",
      "Customized application materials for each role",
      "Executive outreach to recruiters and hiring managers",
      "Interview scheduling and preparation support",
      "Salary negotiation guidance",
      "Unlimited revisions and support until placement",
    ],

    whyWorkWithMe: `With 9+ years in executive search and global leadership hiring, I have an established network of recruiters and hiring managers across North America, Europe, Middle East, and APAC.

My background at Robert Walters gives me direct access to executive search pipelines and confidential opportunities not advertised publicly.`,

    background: {
      years: "9+",
      recruiters: "300+",
      hiringManagers: "900+",
      resumesReviewed: "100,000+",
      professionalsHelped: "7,000+",
      description: "Having worked with 300+ recruiters and 900+ hiring managers, I understand the nuances of executive placement across diverse industries and geographies.",
    },

    whatYouGet: [
      "Daily role identification matching your profile",
      "Customized application materials for each role",
      "Executive outreach to recruiters and hiring managers",
      "Interview scheduling and preparation support",
      "Salary negotiation guidance",
      "Unlimited revisions and support until placement",
    ],

    deliveryTimeline: {
      initialDraft: "Within 48 hours of engagement",
      revisions: "Daily updates and support throughout the process",
    },

    requirements: [
      "Your current CV and LinkedIn profile",
      "Target roles, industries, and geographies",
      "Your work authorization status",
      "Availability for interviews and follow‑ups",
    ],

    testimonials: [
      "“Akash found me a VP role at a Fortune 500 company in under 3 months.” – Jane S.",
      "“The daily outreach and follow‑ups made all the difference.” – David B.",
    ],

    orderSummary: {
      items: [{ name: "100% Guaranteed Executive Job Search (Premium)", price: "$1,500" }],
      total: "$1,500",
    },
  },

  4: {
    id: 4,
    title: "Executive Interview Preparation",
    subtitle: "STAR & BEI-Based Responses with Panel Analysis",
    price: "$400",
    priceINR: "₹34,000",
    priceGBP: "£310",
    originalPrice: "$700",
    tag: "Executive",
    icon: <Target size={40} className="text-secondary" />,
    shortDescription:
      "Deep researched interview preparation with STAR and BEI-based responses. Company research, panel analysis & country-specific insights.",
    formType: "interview",
    fullDescription: `This service is for executives who want to walk into any interview with absolute confidence.

I'll research the company, analyze the role, and prepare you for every possible question. You'll learn how to structure your answers to showcase leadership, impact, and cultural fit – all with a personalized coaching session.

The preparation includes behavioral event interviewing (BEI) framework and STAR response crafting for key competencies.`,

    whyItMatters: `Executive interviews are complex – they often involve multiple panels, case studies, and behavioral assessments.

Without proper preparation, even the most qualified candidates can stumble. I'll ensure you're ready for every scenario.`,

    whatIProvide: [
      "Company and role deep‑dive research",
      "Behavioral event interviewing (BEI) framework",
      "STAR response crafting for key competencies",
      "Mock interview session (1 hour) with detailed feedback",
      "Panel interview strategy and question prediction",
      "Follow‑up email templates",
    ],

    whyWorkWithMe: `Having interacted with 900+ hiring managers and conducted numerous executive interviews myself, I know exactly what interviewers are looking for – and how to help you deliver it.`,

    background: {
      years: "9+",
      recruiters: "300+",
      hiringManagers: "900+",
      resumesReviewed: "100,000+",
      professionalsHelped: "7,000+",
      description: "My experience interviewing and evaluating candidates at the highest levels gives me unique insight into what makes a successful interview performance.",
    },

    whatYouGet: [
      "Company and role deep‑dive research",
      "Behavioral event interviewing (BEI) framework",
      "STAR response crafting for key competencies",
      "Mock interview session (1 hour) with detailed feedback",
      "Panel interview strategy and question prediction",
      "Follow‑up email templates",
    ],

    deliveryTimeline: {
      initialDraft: "Within 3 business days",
      revisions: "2 business days turnaround per revision round",
    },

    requirements: [
      "Job description and company name",
      "Your CV and LinkedIn profile",
      "Any specific concerns or areas you want to focus on",
    ],

    testimonials: [
      "“Akash's mock interview was the reason I aced the panel and got the offer.” – Sarah W.",
      "“His insights on the local market and cultural nuances were invaluable.” – Michael J.",
    ],

    orderSummary: {
      items: [{ name: "Executive Interview Preparation (Executive)", price: "$400" }],
      total: "$400",
    },
  },

  5: {
    id: 5,
    title: "LinkedIn & Job Boards Optimization",
    subtitle: "10x Visibility Increase with Keyword Strategy",
    price: "$250",
    priceINR: "₹21,000",
    priceGBP: "£190",
    originalPrice: "$300",
    tag: "Popular",
    icon: <LinkedInIcon size={40} className="text-secondary" />,
    shortDescription:
      "Profile optimization for LinkedIn, Indeed, Glassdoor, Monster, Bayt, Naukri & more. 10x visibility increase with keyword strategy.",
    formType: "default",
    fullDescription: `This service is designed to make you visible to recruiters and headhunters.

I'll optimize your LinkedIn profile with high‑impact keywords, compelling storytelling, and a professional layout. I'll also enhance your presence on other job boards to ensure you're found by the right people.`,

    whyItMatters: `LinkedIn is the primary platform for executive recruitment. If your profile isn't optimized, you're invisible to recruiters.

Similarly, job boards like Indeed and Glassdoor are used by 70% of hiring managers. Our optimization ensures you appear at the top of search results.`,

    whatIProvide: [
      "LinkedIn profile overhaul (headline, about, experience, skills, recommendations)",
      "Keyword optimization for search ranking on LinkedIn and job boards",
      "Profile summary and headline crafted to attract recruiters",
      "Guidance on job board settings and alerts",
      "Optimization for 5 job boards of your choice",
    ],

    whyWorkWithMe: `With deep knowledge of Boolean and X-Ray search techniques, I understand exactly how recruiters find candidates – and I'll make sure you're discoverable.`,

    background: {
      years: "9+",
      recruiters: "300+",
      hiringManagers: "900+",
      resumesReviewed: "100,000+",
      professionalsHelped: "7,000+",
      description: "Having analyzed recruiter search behavior across multiple platforms, I know what keywords and formats drive visibility.",
    },

    whatYouGet: [
      "LinkedIn profile overhaul (headline, about, experience, skills, recommendations)",
      "Keyword optimization for search ranking on LinkedIn and job boards",
      "Profile summary and headline crafted to attract recruiters",
      "Guidance on job board settings and alerts",
      "Optimization for 5 job boards of your choice",
    ],

    deliveryTimeline: {
      initialDraft: "Within 3 business days",
      revisions: "2 business days turnaround per revision round",
    },

    requirements: [
      "Your current LinkedIn profile URL",
      "Your CV or resume",
      "Target job titles and industries",
      "List of job boards you'd like to optimize",
    ],

    testimonials: [
      "“My LinkedIn profile now shows up in every recruiter search! I get 5+ messages weekly.” – Lisa T.",
      "“Akash transformed my LinkedIn into a lead generator.” – Rishabh D.",
    ],

    orderSummary: {
      items: [{ name: "LinkedIn & Job Boards Optimization (Popular)", price: "$250" }],
      total: "$250",
    },
  },

  6: {
    id: 6,
    title: "Job Search Strategy Session",
    subtitle: "30-Min 1:1 Video Session",
    price: "$300",
    priceINR: "₹25,000",
    priceGBP: "£230",
    originalPrice: "$500",
    tag: "Best Value",
    icon: <MessageCircle size={40} className="text-secondary" />,
    shortDescription:
      "30-min 1:1 video session. Know the WHAT, WHY and HOW of job search. Personalized support for applications, networking & interview prep.",
    formType: "default",
    fullDescription: `A highly personalized 30‑minute session where we dive deep into your job search strategy.

Whether you're stuck, overwhelmed, or just need a fresh perspective, I'll give you clear, actionable steps to accelerate your job search.

This session is ideal for professionals at any level who want to understand the WHAT, WHY, and HOW of an effective job search.`,

    whyItMatters: `A strategic job search is more effective than a blind one. In just 30 minutes, you'll get a customized roadmap that saves you weeks of trial and error.`,

    whatIProvide: [
      "30‑minute 1:1 video consultation",
      "Personalized job search roadmap",
      "Application strategy tailored to your profile",
      "Networking and outreach guidance",
      "Interview tips and common pitfalls",
      "Follow‑up resources and templates",
    ],

    whyWorkWithMe: `With 9+ years of experience in recruitment and career strategy, I can quickly identify gaps in your approach and provide targeted solutions.`,

    background: {
      years: "9+",
      recruiters: "300+",
      hiringManagers: "900+",
      resumesReviewed: "100,000+",
      professionalsHelped: "7,000+",
      description: "I've helped thousands of professionals navigate their job search with clarity and confidence.",
    },

    whatYouGet: [
      "30‑minute 1:1 video consultation",
      "Personalized job search roadmap",
      "Application strategy tailored to your profile",
      "Networking and outreach guidance",
      "Interview tips and common pitfalls",
      "Follow‑up resources and templates",
    ],

    deliveryTimeline: {
      initialDraft: "Scheduled within 48 hours of booking",
      revisions: "Follow-up support via email",
    },

    requirements: [
      "Your current CV and LinkedIn profile",
      "Target roles and industries you're exploring",
      "Any specific challenges you're facing",
    ],

    testimonials: [
      "“The session gave me a clear roadmap – I landed a role in 2 months.” – Mitanshu A.",
      "“Akash's advice on networking completely changed my approach.” – Shubham T.",
    ],

    orderSummary: {
      items: [{ name: "Job Search Strategy Session (Best Value)", price: "$300" }],
      total: "$300",
    },
  },

  7: {
    id: 7,
    title: "33 Resume Templates + Cover Letter",
    subtitle: "Craft Your Professional Identity",
    price: "Free",
    priceINR: "Free",
    priceGBP: "Free",
    originalPrice: null,
    tag: "Free",
    icon: <FileText size={40} className="text-secondary" />,
    shortDescription:
      "33 premium templates including 1-page, 2-page, Google Slides formats + Cover Letters + References.",
    formType: "default",
    fullDescription: `This is a completely free resource to help you get started with a professional resume.

Choose from 33 designs that suit various industries and career levels. Each template is fully editable and comes with instructions on how to customize.

Perfect for professionals who want a professional head start without the premium price tag.`,

    whyItMatters: `A well-designed resume template saves you hours of formatting and ensures you present yourself professionally.`,

    whatIProvide: [
      "33 professional resume templates in Word, Google Docs, and PDF",
      "1 cover letter template (editable)",
      "Reference list template",
      "Tips on customizing for your industry",
      "Free access to our template library",
    ],

    whyWorkWithMe: `I've curated these templates based on what works – they're recruiter-tested and designed to pass ATS filters.`,

    background: {
      years: "9+",
      recruiters: "300+",
      hiringManagers: "900+",
      resumesReviewed: "100,000+",
      professionalsHelped: "7,000+",
      description: "These templates are built from years of experience reviewing 100,000+ resumes.",
    },

    whatYouGet: [
      "33 professional resume templates in Word, Google Docs, and PDF",
      "1 cover letter template (editable)",
      "Reference list template",
      "Tips on customizing for your industry",
      "Free access to our template library",
    ],

    deliveryTimeline: {
      initialDraft: "Instant download",
      revisions: "N/A",
    },

    requirements: [],

    testimonials: [
      "“The templates are gorgeous and saved me hours of formatting.” – Sweeta S.",
      "“I used the Google Slides format to apply for a startup role and got an interview!” – Vivek K.",
    ],

    orderSummary: {
      items: [{ name: "33 Resume Templates + Cover Letter (Free)", price: "Free" }],
      total: "Free",
    },
  },

  // ─── REFERRAL AT BIG4, GOOGLE, MICROSOFT (id:8) ───
  8: {
    id: 8,
    title: "Referral at Big4, Google, Microsoft",
    subtitle: "Professional Referral Service via Robert Walters Network",
    price: "By Request",
    priceINR: "By Request",
    priceGBP: "By Request",
    originalPrice: null,
    tag: "Referral",
    icon: <Building2 size={40} className="text-secondary" />,
    shortDescription:
      "Submit your resume and job ID for consideration at top global companies.",
    formType: "referral",
    fullDescription: `Leverage my professional network to get your resume directly to decision‑makers.

I'll personally refer you through my connections at leading global companies, including Big4 firms, Google, Microsoft, and other top enterprises.

This service is ideal for qualified candidates who want a direct path to interview consideration.`,

    whyItMatters: `Internal referrals are the most effective way to get your resume noticed. Over 70% of roles are filled through networking and referrals.`,

    whatIProvide: [
      "Referral to hiring managers at Big4, Google, Microsoft, and other top firms",
      "Resume review and alignment with company requirements",
      "Tailored recommendations for your application",
      "Priority processing",
    ],

    whyWorkWithMe: `As a Global Talent Partner with Robert Walters, I have direct connections to hiring managers and recruiters at top global companies.`,

    background: {
      years: "9+",
      recruiters: "300+",
      hiringManagers: "900+",
      resumesReviewed: "100,000+",
      professionalsHelped: "7,000+",
      description: "My network spans across US, Europe, Middle East, and APAC – giving you global access.",
    },

    whatYouGet: [
      "Referral to hiring managers at Big4, Google, Microsoft, and other top firms",
      "Resume review and alignment with company requirements",
      "Tailored recommendations for your application",
      "Priority processing",
    ],

    deliveryTimeline: {
      initialDraft: "Within 48 hours of request",
      revisions: "N/A",
    },

    requirements: [
      "Your current resume (tailored to the specific role)",
      "Job ID and company name for the role you're applying for",
      "Brief cover note explaining your fit",
    ],

    testimonials: [
      "“Akash's referral got me an interview at Google within a week.” – Neeshant P.",
      "“I secured a role at Microsoft through this referral service.” – Krishna P.",
    ],

    orderSummary: {
      items: [{ name: "Referral at Big4, Google, Microsoft (By Request)", price: "By Request" }],
      total: "By Request",
    },
  },

  // ─── ASK ME ANYTHING (id:9) ───
  9: {
    id: 9,
    title: "Ask Me Anything",
    subtitle: "Free Career Advice from 9+ Years of Experience",
    price: "Free",
    priceINR: "Free",
    priceGBP: "Free",
    originalPrice: null,
    tag: "Free",
    icon: <HelpCircle size={40} className="text-secondary" />,
    shortDescription:
      "Send me a FREE message! Ask about my learnings, career advice, or recruitment insights.",
    formType: "askme",
    fullDescription: `Oh! Do you want to know about my learnings?

Well, you can ask me anything here and I will try to answer it the best as per my knowledge and expertise.

Whether it's about career transitions, interview strategies, or industry trends – just ask.`,

    whyItMatters: `Sometimes all you need is an expert perspective. A 5-minute answer can save you months of confusion.`,

    whatIProvide: [
      "Personalized response to your career question",
      "Actionable advice and resources",
      "In‑depth insights from my 9+ years of experience",
    ],

    whyWorkWithMe: `I genuinely enjoy helping professionals navigate their careers. Every question is answered with care and detail.`,

    background: {
      years: "9+",
      recruiters: "300+",
      hiringManagers: "900+",
      resumesReviewed: "100,000+",
      professionalsHelped: "7,000+",
      description: "I've answered 470+ questions and counting – from career pivots to LinkedIn strategies.",
    },

    whatYouGet: [
      "Personalized response to your career question",
      "Actionable advice and resources",
      "In‑depth insights from my 9+ years of experience",
    ],

    deliveryTimeline: {
      initialDraft: "Within 24-48 hours",
      revisions: "N/A",
    },

    requirements: [],

    testimonials: [
      "“Akash's answer was incredibly detailed and gave me clarity on my next steps.” – Manisha A.",
      "“He responded within hours with a full plan of action.” – Yogesh M.",
    ],

    orderSummary: {
      items: [{ name: "Ask Me Anything (Free)", price: "Free" }],
      total: "Free",
    },
  },
};

export default function JobStrategy() {
  const { id } = useParams();
  const service = serviceDetails[id];

  // ─── Form Fields based on service type ───
  const getFormFields = (type) => {
    switch (type) {
      case "executive":
        return [
          { name: "name", label: "Name", type: "text", required: true, icon: User },
          { name: "email", label: "Email", type: "email", required: true, icon: Mail },
          { name: "phone", label: "Phone Number", type: "tel", required: true, icon: Phone },
          { name: "question", label: "Your Question / Message", type: "textarea", required: false, icon: MessageCircle },
          { name: "targetTitles", label: "Primary Job Titles/Positions", type: "text", required: false, icon: Target, placeholder: "e.g., Non-Executive Director, CEO, COO, CMO, CTO, CFO, CISO, CIO, Finance Director, etc." },
          { name: "countryFocus", label: "Country/Region Focus", type: "text", required: false, icon: Globe, placeholder: "e.g., US, UK/Ireland, GCC, APAC, Singapore, New Zealand, UAE, India, etc." },
          { name: "secondaryRoles", label: "Secondary/Aspirational Roles", type: "text", required: false, icon: Target, placeholder: "Any secondary or aspirational roles you'd consider if they align with your career goals?" },
          { name: "businessModels", label: "Target Business Models", type: "text", required: false, icon: Building2, placeholder: "B2B, B2C, D2C, B2B2C, Marketplace, Franchise, Platform/SaaS, Other (please specify)" },
          { name: "targetIndustries", label: "Target Industries", type: "text", required: false, icon: Briefcase, placeholder: "e.g., financial services, fintech, martech, healthtech, pharmacy, healthcare, consumer tech, private equity, FMCG, FMCD, BFSI, etc." },
          { name: "linkedinUrl", label: "LinkedIn Profile URL", type: "url", required: false, icon: LinkedInIcon, placeholder: "Please share your LinkedIn profile link. Are there any sections you specifically want to overhaul?" },
          { name: "goals", label: "What are your goals in seeking this service? (Optional)", type: "textarea", required: false, icon: Target, placeholder: "Anything else the resume writer should know?" },
          { name: "roadblocks", label: "Past Job Search Roadblocks", type: "textarea", required: false, icon: AlertCircle, placeholder: "Have you faced any challenges or roadblocks in your job search? (e.g., lack of time, low response rate, market shifts, etc.) Please be specific." },
          { name: "portfolio", label: "Portfolio or Personal Website Link (Optional)", type: "text", required: false, icon: Globe, placeholder: "If you have a professional portfolio, personal website or online work showcase, please share the link here." },
          { name: "additionalDetails", label: "Additional Details or Special Requests", type: "textarea", required: false, icon: FileText, placeholder: "Any other 'must-know' details or special requests you'd like me to consider?" },
        ];

      case "jobguaranteed":
        return [
          { name: "name", label: "Name", type: "text", required: true, icon: User },
          { name: "email", label: "Email", type: "email", required: true, icon: Mail },
          { name: "question", label: "Your Question / Message", type: "textarea", required: false, icon: MessageCircle },
          { name: "countryFocus", label: "Country/Region Focus", type: "text", required: false, icon: Globe, placeholder: "What are your preferred geographies? (e.g., US, UK/Ireland, GCC, APAC, Singapore, New Zealand, UAE, India, etc.)" },
          { name: "targetTitles", label: "Primary Job Titles/Positions", type: "text", required: false, icon: Target, placeholder: "Which job titles or roles are you primarily targeting? (e.g., Non-Executive Director, CXO, CMO, COO, CISO, CIO, CFO, Finance Director, etc.)" },
          { name: "topCompanies", label: "Top-Priority Companies", type: "textarea", required: false, icon: Building2, placeholder: "List 10-15 organizations you'd be most interested in joining." },
          { name: "secondaryRoles", label: "Secondary/Aspirational Roles", type: "text", required: false, icon: Target, placeholder: "Are there any secondary or aspirational roles you'd consider if they align with your career goals?" },
          { name: "targetIndustries", label: "Target Industries", type: "text", required: false, icon: Briefcase, placeholder: "e.g., financial services, fintech, martech, healthtech, pharmacy, healthcare, consumer tech, private equity, FMCG, FMCD, BFSI, etc." },
          { name: "businessModels", label: "Target Business Models", type: "text", required: false, icon: Building2, placeholder: "B2B, B2C, D2C, B2B2C, Marketplace, Franchise, Platform/SaaS, Other (please specify)" },
          { name: "linkedinUrl", label: "LinkedIn Profile URL", type: "url", required: false, icon: LinkedInIcon, placeholder: "Please share your LinkedIn profile link. Are there any sections you specifically want to overhaul?" },
          { name: "noticePeriod", label: "Notice Period or Availability", type: "text", required: false, icon: Clock, placeholder: "How soon can you start a new role? Please specify your current notice period or earliest availability." },
          { name: "currentComp", label: "Current/Last Compensation", type: "text", required: false, icon: DollarSign, placeholder: "What is your current/last annual CTC (in total, including all components)?" },
          { name: "expectedComp", label: "Expected Compensation", type: "text", required: false, icon: DollarSign, placeholder: "What is your target/expected annual CTC (in total, including all components)?" },
          { name: "visaStatus", label: "Visa or Work Permit Status (Optional)", type: "text", required: false, icon: Shield, placeholder: "Are there any visa, work permit or immigration issues we should consider?" },
          { name: "confidentiality", label: "Confidentiality Requirements", type: "textarea", required: false, icon: Shield, placeholder: "Are there any companies, individuals or regions who must not know you're exploring new opportunities?" },
          { name: "orgSize", label: "Preferred Organization Size/Stage", type: "text", required: false, icon: Users, placeholder: "Do you prefer startups, scale-ups, mid-size companies or large/multinational organizations?" },
          { name: "nonNegotiables", label: "Non-Negotiables & Must-Haves", type: "textarea", required: false, icon: CheckCircle, placeholder: "Are there any must-have factors or strict deal-breakers? (e.g., remote only, required travel, D&I focus, family relocation, etc.)" },
          { name: "relocation", label: "Willingness to Relocate", type: "text", required: false, icon: MapPin, placeholder: "Are you open to relocation, domestically or internationally? Any constraints?" },
          { name: "roadblocks", label: "Past Job Search Roadblocks", type: "textarea", required: false, icon: AlertCircle, placeholder: "Have you faced any challenges or roadblocks in your job search? (e.g., lack of time, low response rate, market shifts, etc.) Please be specific." },
          { name: "avoidRegions", label: "Employers, Sectors or Regions to Avoid", type: "textarea", required: false, icon: MapPin, placeholder: "Are there any specific organizations, industries or geographies you do not want to target?" },
          { name: "additionalDetails", label: "Additional Details or Special Requests", type: "textarea", required: false, icon: FileText, placeholder: "Any other 'must-know' details or special requests you'd like me to consider?" },
        ];

      case "interview":
        return [
          { name: "name", label: "Name", type: "text", required: true, icon: User },
          { name: "email", label: "Email", type: "email", required: true, icon: Mail },
          { name: "phone", label: "Phone Number", type: "tel", required: true, icon: Phone },
          { name: "question", label: "Your Question / Message", type: "textarea", required: false, icon: MessageCircle },
          { name: "targetCountry", label: "Target Country/Region", type: "text", required: false, icon: Globe, placeholder: "e.g., US, UK, UAE, India, Singapore, etc." },
          { name: "targetJobProfile", label: "Target Job Profile/Role", type: "text", required: false, icon: Target, placeholder: "e.g., VP of Sales, Director of Engineering, etc." },
          { name: "industriesOfFocus", label: "Industries of Focus", type: "text", required: false, icon: Briefcase, placeholder: "e.g., FinTech, SaaS, Healthcare, etc." },
          { name: "panelNames", label: "Panel Names/Roles", type: "text", required: false, icon: Users, placeholder: "e.g., John Doe (CTO), Sarah Smith (VP)" },
          { name: "companyName", label: "Company Name", type: "text", required: false, icon: Building2, placeholder: "e.g., Google, McKinsey, etc." },
          { name: "goals", label: "What are your goals in seeking professional? Anything else you want to highlight? (Optional)", type: "textarea", required: false, icon: Target, placeholder: "Any extra details that will help me prepare you better." },
        ];

      case "referral":
        return [
          { name: "name", label: "Name", type: "text", required: true, icon: User },
          { name: "email", label: "Email", type: "email", required: true, icon: Mail },
          { name: "question", label: "Your Question / Message", type: "textarea", required: false, icon: MessageCircle },
          { name: "jobId", label: "JOB ID", type: "text", required: true, icon: FileCheck, placeholder: "Please provide the Job ID for the role you're applying for." },
          { name: "coverLetter", label: "Why Should I Refer You? / Cover Letter / Tell Me More About Yourself", type: "textarea", required: true, icon: FileText, placeholder: "Write a brief cover note explaining why you're a great fit for this role." },
        ];

      case "askme":
        return [
          { name: "name", label: "Name", type: "text", required: true, icon: User },
          { name: "email", label: "Email", type: "email", required: true, icon: Mail },
          { name: "question", label: "Your Question", type: "textarea", required: true, icon: MessageCircle, placeholder: "What would you like to know? Ask me anything!" },
          { name: "phone", label: "Phone Number", type: "tel", required: false, icon: Phone },
        ];

      default:
        return [
          { name: "name", label: "Name", type: "text", required: true, icon: User },
          { name: "email", label: "Email", type: "email", required: true, icon: Mail },
          { name: "phone", label: "Phone Number", type: "tel", required: true, icon: Phone },
          { name: "question", label: "Your Question / Message", type: "textarea", required: false, icon: MessageCircle },
          { name: "goals", label: "What are your goals in seeking this service?", type: "textarea", required: false, icon: Target },
          { name: "linkedinUrl", label: "LinkedIn Profile URL", type: "url", required: false, icon: LinkedInIcon },
          { name: "targetIndustries", label: "Target Industries", type: "text", required: false, icon: Briefcase },
          { name: "targetTitles", label: "Primary Job Titles/Positions", type: "text", required: false, icon: Target },
          { name: "countryFocus", label: "Country/Region Focus", type: "text", required: false, icon: Globe },
          { name: "businessModels", label: "Target Business Models", type: "text", required: false, icon: Building2 },
        ];
    }
  };

  const formFields = getFormFields(service?.formType || "default");

  // ─── Form State ───
  const initialFormState = {};
  formFields.forEach((field) => {
    initialFormState[field.name] = "";
  });
  initialFormState.termsAccepted = false;
  initialFormState.whatsappPref = false;

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Redirect if service not found
  if (!service) {
    return (
      <div className="min-h-screen pt-20 bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-primary">Service not found</h2>
          <Link to="/services" className="text-secondary underline mt-4 inline-block">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) return;

    setIsSubmitting(true);

    // Build comprehensive email body with all details
    const subject = `Service Inquiry: ${service.title}`;
    let body = `
      ─── SERVICE INQUIRY ───
      
      Service: ${service.title}
      Service ID: ${service.id}
      Price: ${service.price}
      
      ─── CLIENT RESPONSES ───
    `;

    formFields.forEach((field) => {
      const value = formData[field.name] || "Not specified";
      const label = field.label;
      body += `\n${label}: ${value}`;
    });

    // Add file upload info (since we can't attach files via mailto)
    body += `
      
      ─── FILE UPLOADS ───
      Resume/CV: User will attach separately via email reply
      JD File: User will attach separately via email reply
      Photo: User will attach separately via email reply
      
      ─── COMMUNICATION PREFERENCE ───
      WhatsApp Preference: ${formData.whatsappPref ? "✅ YES (Reply via WhatsApp)" : "❌ NO (Email preferred)"}
      ${formData.whatsappPref ? `WhatsApp Number: ${formData.phone || "Not provided"}` : ""}
      
      ─── SERVICE REQUEST ───
      This inquiry was submitted via the service detail page for ${service.title}.
      
      Please respond to this client at: ${formData.email || "email not provided"}
      Client Name: ${formData.name || "Not provided"}
    `;

    window.location.href = `mailto:akash.ranawat007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset success after 10 seconds
    setTimeout(() => setSubmitSuccess(false), 10000);
  };

  const isFormValid = formData.name && formData.email && formData.termsAccepted;

  // Get the user's first name for the success message
  const firstName = formData.name ? formData.name.split(" ")[0] : "there";

  return (
    <div className="min-h-screen pt-20 bg-cream text-primary overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cream to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6 animate-slide-up">
            {service.tag}
          </div>

          <div className="text-white/80 mb-6 animate-slide-up delay-100">{service.icon}</div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight animate-slide-up delay-200">
            {service.title}
          </h1>
          <p className="text-xl text-white/80 mt-2 animate-slide-up delay-300">{service.subtitle}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 animate-slide-up delay-400">
            <span className="text-4xl font-bold text-accent">{service.price}</span>
            {service.originalPrice && (
              <span className="text-white/60 text-xl line-through">{service.originalPrice}</span>
            )}
            {service.priceINR && service.priceINR !== "Free" && (
              <span className="text-white/60 text-lg">or {service.priceINR}</span>
            )}
          </div>

          <p className="max-w-3xl mx-auto text-base text-white/90 mt-4 leading-relaxed animate-slide-up delay-500 whitespace-pre-line">
            {service.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up delay-600">
            <a
              href="#form"
              className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-xl transition-all flex items-center gap-2"
            >
              Book This Service <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <Link
              to="/services"
              className="border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <ArrowRight size={18} className="rotate-180" /> Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FULL DESCRIPTION ─── */}
      <section className="py-20 bg-white border-t border-secondary/10 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">Service Overview</h2>
            <div className="whitespace-pre-line text-muted leading-relaxed">
              {service.fullDescription}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY IT MATTERS ─── */}
      {service.whyItMatters && (
        <section className="py-16 bg-cream border-t border-secondary/10 animate-fade-in-up delay-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs tracking-widest uppercase mb-4">
                  <Eye size={18} /> Why It Matters
                </div>
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">The Competitive Edge</h2>
                <div className="whitespace-pre-line text-muted leading-relaxed">
                  {service.whyItMatters}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-secondary/10 text-center">
                  <div className="text-4xl font-serif font-bold text-secondary">7s</div>
                  <p className="text-xs text-muted mt-1">Average Resume Review Time</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-secondary/10 text-center">
                  <div className="text-4xl font-serif font-bold text-secondary">3%</div>
                  <p className="text-xs text-muted mt-1">Resumes Result in Interviews</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-secondary/10 text-center">
                  <div className="text-4xl font-serif font-bold text-secondary">10x</div>
                  <p className="text-xs text-muted mt-1">Higher in Recruiter Searches</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-secondary/10 text-center">
                  <div className="text-4xl font-serif font-bold text-secondary">ATS</div>
                  <p className="text-xs text-muted mt-1">Filtering Systems Beat</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── WHAT I PROVIDE ─── */}
      {service.whatIProvide && (
        <section className="py-20 bg-white border-t border-secondary/10 animate-fade-in-up delay-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs tracking-widest uppercase mb-4">
              <BarChart size={18} /> What I Provide
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-10">Service Deliverables</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.whatIProvide.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-cream p-5 rounded-2xl border border-secondary/10">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-1" />
                  <span className="text-primary/80 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── WHY WORK WITH ME ─── */}
      {service.whyWorkWithMe && (
        <section className="py-20 bg-cream border-t border-secondary/10 animate-fade-in-up delay-300">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs tracking-widest uppercase mb-4">
                  <Shield size={18} /> Why Professionals Work With Me
                </div>
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">Insider Intelligence</h2>
                <div className="whitespace-pre-line text-muted leading-relaxed">
                  {service.whyWorkWithMe}
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-secondary/20 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-secondary">{service.background?.years}</div>
                    <p className="text-xs text-muted">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-secondary">{service.background?.recruiters}</div>
                    <p className="text-xs text-muted">Recruiters Spoken With</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-secondary">{service.background?.hiringManagers}</div>
                    <p className="text-xs text-muted">Hiring Managers Met</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-secondary">{service.background?.resumesReviewed}</div>
                    <p className="text-xs text-muted">Resumes Reviewed</p>
                  </div>
                  <div className="text-center col-span-2">
                    <div className="text-3xl font-serif font-bold text-secondary">{service.background?.professionalsHelped}</div>
                    <p className="text-xs text-muted">Professionals Helped</p>
                  </div>
                </div>
                <p className="text-xs text-muted mt-4 text-center">{service.background?.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── WHAT YOU WILL RECEIVE ─── */}
      <section className="py-20 bg-white border-t border-secondary/10 animate-fade-in-up delay-400">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs tracking-widest uppercase mb-4">
                <ThumbsUp size={18} /> What You Will Receive
              </div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Deliverables</h2>
              <ul className="space-y-3">
                {service.whatYouGet.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-primary/80">
                    <FileCheck size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs tracking-widest uppercase mb-4">
                <Clock size={18} /> Delivery Timeline
              </div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">What to Expect</h2>
              <div className="space-y-4">
                <div className="bg-cream p-6 rounded-2xl border border-secondary/10">
                  <h4 className="font-bold text-primary">Initial Draft</h4>
                  <p className="text-muted text-sm">{service.deliveryTimeline?.initialDraft}</p>
                </div>
                <div className="bg-cream p-6 rounded-2xl border border-secondary/10">
                  <h4 className="font-bold text-primary">Revisions</h4>
                  <p className="text-muted text-sm">{service.deliveryTimeline?.revisions}</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs tracking-widest uppercase mb-4">
                  <FileText size={18} /> Requirements
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-4">What to Send</h4>
                {service.requirements.length > 0 ? (
                  <ul className="space-y-3">
                    {service.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-primary/80">
                        <FileText size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted text-sm">No specific requirements – just your question or request.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      {service.testimonials && (
        <section className="py-20 bg-cream border-t border-secondary/10 animate-fade-in-up delay-500">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-serif font-bold text-primary text-center mb-12">What Clients Say</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {service.testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex text-secondary mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-primary/80 italic text-sm leading-relaxed">"{testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── ORDER SUMMARY ─── */}
      <section className="py-12 bg-white border-t border-secondary/10 animate-fade-in-up delay-600">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-cream rounded-3xl border border-secondary/20 p-8">
            <h3 className="text-xl font-bold text-primary mb-6">Order Summary</h3>
            <div className="space-y-3 border-b border-secondary/10 pb-4">
              {service.orderSummary?.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-primary/80">{item.name}</span>
                  <span className="font-bold text-primary">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between pt-4 text-lg font-bold text-primary">
              <span>Total</span>
              <span>{service.orderSummary?.total}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section id="form" className="py-20 bg-cream border-t border-secondary/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl border border-secondary/10 p-8 md:p-12 animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Ready to Begin?</h2>
              <p className="text-muted mt-2">Submit your details and I'll get back to you within 24 hours.</p>
            </div>

            {submitSuccess ? (
              <div className="text-center py-12 animate-fade-in-up">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} className="text-secondary" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-primary">
                  Thank You, {firstName}! 🎉
                </h3>
                <p className="text-muted text-lg mt-3 max-w-md mx-auto">
                  Your inquiry has been received successfully. I'll review your details and get back to you within 24 hours.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 bg-cream px-6 py-3 rounded-full border border-secondary/10">
                  <Sparkles size={18} className="text-secondary" />
                  <span className="text-sm text-primary/80">A confirmation email has been sent to you</span>
                </div>
                <p className="text-xs text-muted mt-4">If you don't hear back, please check your spam folder.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field) => {
                  const Icon = field.icon;
                  const value = formData[field.name] || "";
                  const isRequired = field.required;

                  if (field.type === "textarea") {
                    return (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                          {field.label} {isRequired && <span className="text-secondary">*</span>}
                        </label>
                        <div className="relative">
                          <textarea
                            name={field.name}
                            rows="4"
                            value={value}
                            onChange={handleChange}
                            required={isRequired}
                            className="w-full px-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary resize-none"
                            placeholder={field.placeholder || ""}
                          />
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={field.name}>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        {field.label} {isRequired && <span className="text-secondary">*</span>}
                      </label>
                      <div className="relative">
                        {Icon && (
                          <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                        )}
                        <input
                          type={field.type}
                          name={field.name}
                          value={value}
                          onChange={handleChange}
                          required={isRequired}
                          className="w-full pl-12 pr-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary"
                          placeholder={field.placeholder || ""}
                        />
                      </div>
                    </div>
                  );
                })}

                {/* ─── FILE UPLOADS ─── */}

                {/* Resume Upload – for most forms */}
                {(service.formType === "default" || service.formType === "executive" || service.formType === "jobguaranteed") && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Upload Your Latest Resume/CV <span className="text-secondary">*</span>
                    </label>
                    <div className="relative">
                      <Upload size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-primary"
                      />
                    </div>
                    <p className="text-xs text-muted mt-1">If there are areas you feel need improvement, please specify in the message above.</p>
                  </div>
                )}

                {/* ─── JD FILE UPLOAD – Now added to Interview form ─── */}
                {(service.formType === "interview" || service.formType === "default" || service.formType === "executive") && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Upload Job Description (JD) <span className="text-secondary">*</span>
                    </label>
                    <div className="relative">
                      <Upload size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                      <input
                        type="file"
                        name="jdFile"
                        accept=".pdf,.doc,.docx,.txt"
                        required={service.formType === "interview"}
                        className="w-full pl-12 pr-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-primary"
                      />
                    </div>
                    <p className="text-xs text-muted mt-1">Please upload the job description for the role you're preparing for.</p>
                  </div>
                )}

                {/* Referral form – resume upload */}
                {service.formType === "referral" && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Attach Resume <span className="text-secondary">*</span>
                    </label>
                    <div className="relative">
                      <Upload size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-primary"
                      />
                    </div>
                  </div>
                )}

                {/* Photo Upload – for default form */}
                {service.formType === "default" && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Upload Your Professional Photo <span className="text-muted font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Upload size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        className="w-full pl-12 pr-4 py-3 bg-cream/50 border border-secondary/20 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-primary"
                      />
                    </div>
                    <p className="text-xs text-muted mt-1">If you'd like, you may upload a recent professional photo for your resume or LinkedIn.</p>
                  </div>
                )}

                {/* ─── WHATSAPP PREFERENCE ─── */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="whatsappPref"
                    checked={formData.whatsappPref}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-secondary border-secondary/30 rounded focus:ring-secondary transition-all"
                  />
                  <div>
                    <label className="text-sm text-primary/80 cursor-pointer">
                      I prefer to receive replies via WhatsApp <span className="text-xs text-muted">(using the phone number provided)</span>
                    </label>
                    {/* ─── CONDITIONAL WHATSAPP MESSAGE ─── */}
                    {formData.whatsappPref && (
                      <p className="text-sm text-secondary font-medium mt-2 animate-fade-in-up">
                        💬 I would love to receive my response on WhatsApp.
                      </p>
                    )}
                  </div>
                </div>

                {/* ─── TERMS ─── */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-secondary border-secondary/30 rounded focus:ring-secondary transition-all"
                  />
                  <label className="text-sm text-primary/80">
                    I have read and agree to the{" "}
                    <Link to="/privacy" className="text-secondary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="/terms" className="text-secondary hover:underline">
                      Terms & Conditions
                    </Link>
                    .
                  </label>
                </div>

                {/* ─── SUBMIT BUTTON ─── */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full md:w-auto px-12 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-3 transition-all ${
                    isFormValid
                      ? "bg-secondary text-white hover:bg-primary shadow-lg hover:shadow-xl cursor-pointer"
                      : "bg-muted/30 text-muted cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Submit Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-muted/70 mt-4">
                  By submitting this form, you agree that your data will be used to respond to your inquiry.
                  Your information will not be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 bg-primary relative overflow-hidden text-center animate-fade-in-up">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAxIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Still Have Questions?
          </h2>
          <p className="text-white/80 text-lg mt-4 max-w-lg mx-auto">
            I'm here to help. Feel free to reach out anytime.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-white text-primary hover:bg-accent hover:text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-xl"
          >
            <MessageCircle size={18} /> Contact Me Directly
          </Link>
        </div>
      </section>

      {/* ─── ANIMATIONS ─── */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 850ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>
    </div>
  );
}