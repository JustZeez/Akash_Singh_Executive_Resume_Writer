import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase">Legal</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2">
            Terms & Conditions
          </h1>
          <p className="text-muted mt-4 leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="w-12 h-1 bg-secondary mt-4 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-primary max-w-none space-y-8 text-primary/90 leading-relaxed animate-slide-up">
          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">1. Introduction</h2>
            <p>
              Welcome to the website of <strong>Akash Singh</strong> ("we," "our," or "us"). By
              accessing or using our website and services, you agree to comply with and be bound by
              these Terms & Conditions. Please read them carefully.
            </p>
            <p>
              If you do not agree with any part of these terms, you must not use our website or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">2. Services Provided</h2>
            <p>
              Akash Singh provides executive career strategy, certified resume writing (CPRW™),
              LinkedIn optimization, interview preparation, and job search consulting services.
              All services are delivered with the utmost professionalism and tailored to the
              individual client's career goals.
            </p>
            <p className="text-sm bg-white p-4 rounded-xl border border-secondary/10">
              <strong>Service Disclaimer:</strong> While we strive to achieve the best possible
              outcomes, we do not guarantee job placement, specific interview callbacks, or salary
              offers. Our services are designed to significantly enhance your candidacy and
              market positioning.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software,
              is the property of Akash Singh and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works without our
              explicit written consent.
            </p>
            <p>
              You retain full ownership of the final resume/CV and other deliverables we create for
              you. However, we may use anonymized case studies and testimonials (with your permission)
              for promotional purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">4. User Obligations</h2>
            <p>By using our website and services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>Provide accurate and up-to-date information during consultations and forms.</li>
              <li>Not misuse our website for illegal or unauthorized purposes.</li>
              <li>Respect our intellectual property and not copy or distribute our content without permission.</li>
              <li>Communicate respectfully and professionally during all interactions.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">5. Payments & Refunds</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li><strong>Payment:</strong> Full payment is required before services commence, unless otherwise agreed in writing.</li>
              <li><strong>Refunds:</strong> We are committed to your satisfaction. If you are unhappy with the initial draft, we offer revisions as part of the service. Refund requests are reviewed on a case-by-case basis.</li>
              <li><strong>Cancellation:</strong> If you wish to cancel a service, please notify us within 24 hours of booking for a full refund. After work has commenced, a pro-rated refund may be issued.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Akash Singh shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of or
              related to the use of our services or website. Our total liability in any matter
              shall not exceed the total amount paid by you for the specific service in question.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">7. Confidentiality</h2>
            <p>
              We treat all client information, including resumes, career strategies, and personal
              data, as strictly confidential. We will not disclose your information to any third
              party without your explicit consent, except as required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as Topmate, LinkedIn).
              We are not responsible for the content or practices of these external sites. Your
              use of third-party sites is at your own risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">9. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of
              India. Any disputes arising out of or in connection with these terms shall be subject
              to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">10. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms & Conditions at any time. Any changes will
              be posted on this page with an updated date. Your continued use of our website and
              services constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-white p-6 rounded-2xl border border-secondary/10 mt-2">
              <p className="font-semibold text-primary">Akash Singh</p>
              <p className="text-muted">Email: <a href="mailto:akash.ranawat007@gmail.com" className="text-secondary hover:underline">akash.ranawat007@gmail.com</a></p>
              <p className="text-muted">Phone: <a href="tel:+918824893507" className="text-secondary hover:underline">+91 88248 93507</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}