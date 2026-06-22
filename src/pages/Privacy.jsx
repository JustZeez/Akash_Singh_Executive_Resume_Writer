import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <span className="text-secondary font-bold text-xs tracking-widest uppercase">Legal</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2">
            Privacy Policy
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
              Akash Singh ("we," "our," or "us") respects your privacy and is committed to protecting
              your personal data. This privacy policy explains how we collect, use, and safeguard your
              information when you visit our website or use our services.
            </p>
            <p>
              We are a Certified Professional Resume Writer (CPRW™) service based in India, operating
              globally. We provide executive career strategy, resume writing, LinkedIn optimization,
              and interview preparation services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">2. Data We Collect</h2>
            <p>We may collect the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li><strong>Identity Data:</strong> Name, professional title, company, and LinkedIn profile.</li>
              <li><strong>Contact Data:</strong> Email address, phone number, and mailing address.</li>
              <li><strong>Career Data:</strong> Resume/CV content, work history, education, certifications, and career goals.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
              <li><strong>Communication Data:</strong> Messages sent through our contact forms or via email/WhatsApp.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">3. How We Use Your Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>To provide and deliver our executive career services.</li>
              <li>To communicate with you about your projects, inquiries, and updates.</li>
              <li>To personalize your experience and improve our services.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To send you relevant career insights, tips, and promotional content (only with your explicit consent).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">4. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or destruction. Your data is
              stored securely and only accessible by authorized personnel.
            </p>
            <p>
              While we take all reasonable precautions, please note that no method of transmission
              over the internet is 100% secure. We continually review our security practices to
              protect your information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">5. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for
              which we collected it, including legal, accounting, or reporting requirements. Typically,
              we keep your information for 3 years after our last interaction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">6. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience,
              analyze website traffic, and understand visitor behavior. You can control cookie
              preferences through your browser settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g., LinkedIn, Topmate). We are
              not responsible for the privacy practices or content of these external sites. We
              encourage you to review their privacy policies before providing any personal data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">8. Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li><strong>Right to Access:</strong> Request a copy of the data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations).</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data.</li>
              <li><strong>Right to Object:</strong> Object to certain data processing activities.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:akash.ranawat007@gmail.com" className="text-secondary hover:underline">
                akash.ranawat007@gmail.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any significant
              changes by posting the new policy on this page with an updated date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif font-bold text-primary">10. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your data, please
              reach out to us:
            </p>
            <div className="bg-white p-6 rounded-2xl border border-secondary/10 mt-2">
              <p className="font-semibold text-primary">Akash Singh</p>
              <p className="text-muted">Email: <a href="mailto:akash.ranawat007@gmail.com" className="text-secondary hover:underline">akash.ranawat007@gmail.com</a></p>
              <p className="text-muted">Phone: <a href="tel:+918824893507" className="text-secondary hover:underline">+91 88248 93507</a></p>
              <p className="text-muted">LinkedIn: <a href="https://www.linkedin.com/in/akashsingh79/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">linkedin.com/in/akashsingh79</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}