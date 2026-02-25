"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: February 25, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              TrairX Technology OÜ ("we," "our," or "us") is committed to protecting the privacy of users of the SAFELY mobile application ("App"). This Privacy Policy explains what personal data we collect, how we use it, how we protect it, and your rights regarding your data.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using SAFELY, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Account Information</strong>: Name, email address (optional), phone number (optional)</li>
              <li><strong>Profile Information</strong>: Profile photo, emergency contact details</li>
              <li><strong>Communications</strong>: Messages you send through the App, support requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Location Data</strong>: GPS coordinates when you choose to share your location with your trust circle. Location tracking is entirely optional and can be disabled at any time in your device settings.</li>
              <li><strong>Device Information</strong>: Device model, operating system version, unique device identifiers, mobile network information</li>
              <li><strong>Usage Data</strong>: App features used, check-in history, timestamps, interaction patterns</li>
              <li><strong>Log Data</strong>: IP address, browser type, pages visited, time spent on pages, diagnostic data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Service Delivery</strong>: To provide core app functionality including check-ins, location sharing, and emergency alerts</li>
              <li><strong>Safety Features</strong>: To enable you to share your location with trusted contacts and receive safety notifications</li>
              <li><strong>Communication</strong>: To send you service-related notifications, updates, and respond to your inquiries</li>
              <li><strong>Improvement</strong>: To analyze usage patterns and improve app performance and user experience</li>
              <li><strong>Security</strong>: To detect, prevent, and address technical issues, fraud, and security threats</li>
              <li><strong>Legal Compliance</strong>: To comply with applicable laws, regulations, and legal processes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
              We do not sell, rent, or share your personal data with third parties for their marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 With Your Consent</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Trust Circle</strong>: Your location and status are shared only with contacts you explicitly add to your trust circle</li>
              <li><strong>Emergency Contacts</strong>: Information shared when you trigger an emergency alert</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-3">We may share your information with third-party service providers who perform services on our behalf:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Cloud Hosting</strong>: AWS (Amazon Web Services) for secure data storage</li>
              <li><strong>Push Notifications</strong>: Apple Push Notification Service (APNs) for iOS notifications</li>
              <li><strong>Analytics</strong>: Anonymous usage analytics to improve app performance</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              These service providers are contractually obligated to protect your data and use it only for the purposes we specify.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We retain your personal data only as long as necessary:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Account Data</strong>: Until you delete your account</li>
              <li><strong>Location History</strong>: 90 days from collection</li>
              <li><strong>Check-in History</strong>: 1 year from creation</li>
              <li><strong>Support Communications</strong>: 2 years from last contact</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              When you delete your account, all personal data is permanently removed from our active systems within 30 days. Backup copies are deleted within 90 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We implement industry-standard security measures to protect your data:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Encryption</strong>: All data is encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
              <li><strong>Secure Infrastructure</strong>: Data stored on secure servers with restricted access</li>
              <li><strong>Access Controls</strong>: Role-based access controls and authentication</li>
              <li><strong>Regular Audits</strong>: Periodic security assessments and vulnerability testing</li>
              <li><strong>Monitoring</strong>: Continuous monitoring for suspicious activities</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Access and Control</h3>
            <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Access</strong>: Request a copy of your personal data</li>
              <li><strong>Rectification</strong>: Correct inaccurate or incomplete data</li>
              <li><strong>Erasure</strong>: Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Portability</strong>: Receive your data in a structured, machine-readable format</li>
              <li><strong>Object</strong>: Object to processing of your data for certain purposes</li>
              <li><strong>Restrict</strong>: Request restriction of processing in certain circumstances</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2 Account Deletion</h3>
            <p className="text-gray-700 leading-relaxed mb-3">To delete your account and all associated data:</p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Go to Settings → Account → Delete Account in the App</li>
              <li>Or email us at <a href="mailto:info@trairx.com" className="text-primary-600 hover:text-primary-700">info@trairx.com</a> with your request</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              SAFELY is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:info@trairx.com" className="text-primary-600 hover:text-primary-700">info@trairx.com</a>. We will take steps to delete such information from our systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence, including Estonia and the European Union. These countries may have different data protection laws.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will notify you of significant changes by in-app notification or email. Your continued use of SAFELY after changes are posted constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Email</strong>: <a href="mailto:info@trairx.com" className="text-primary-600 hover:text-primary-700">info@trairx.com</a></p>
              <p className="text-gray-700 mt-2"><strong>Company</strong>: TrairX Technology OÜ</p>
              <p className="text-gray-700 mt-2"><strong>Address</strong>: Harju maakond, Tallinn, Kesklinna linnaosa, Viru väljak 2, 10111, Estonia</p>
              <p className="text-gray-700 mt-2"><strong>Data Protection Officer</strong>: <a href="mailto:info@trairx.com" className="text-primary-600 hover:text-primary-700">info@trairx.com</a></p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will respond to your inquiry within 30 days.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-600 text-center">
              <strong>Effective Date</strong>: February 25, 2026
            </p>
            <p className="text-sm text-gray-600 text-center mt-2">
              © 2026 TrairX Technology OÜ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
