
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ridex-navy to-ridex-navy/90 text-white py-20">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-lg md:text-xl text-gray-200">
                We are committed to protecting your privacy and personal information.
              </p>
              <p className="text-sm text-gray-300 mt-4">Last updated: January 2025</p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-white">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">1. Information We Collect</h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-ridex-navy mb-3">Personal Information:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Name, email address, and phone number</li>
                      <li>Profile photo and user preferences</li>
                      <li>Driver's license and vehicle information (for drivers)</li>
                      <li>Payment information and transaction history</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-ridex-navy mb-3">Usage Information:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Location data during rides for safety and navigation</li>
                      <li>App usage patterns and preferences</li>
                      <li>Device information and IP address</li>
                      <li>Communication between users through our platform</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">We use your information to:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Facilitate ridesharing connections between users</li>
                    <li>Process payments and manage transactions</li>
                    <li>Provide customer support and resolve issues</li>
                    <li>Ensure safety and security of our platform</li>
                    <li>Improve our services and user experience</li>
                    <li>Send important updates and notifications</li>
                    <li>Comply with legal requirements and regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">3. Information Sharing</h2>
                  <p className="text-gray-600 mb-4">We may share your information in the following situations:</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-ridex-navy mb-3">With Other Users:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Basic profile information to facilitate ride matching</li>
                      <li>Contact information to coordinate rides</li>
                      <li>Ratings and reviews to maintain community trust</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-ridex-navy mb-3">With Service Providers:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Payment processors for transaction handling</li>
                      <li>Cloud storage providers for data hosting</li>
                      <li>Analytics services to improve our platform</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-ridex-navy mb-3">Legal Requirements:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>When required by law or legal process</li>
                      <li>To protect the safety of our users</li>
                      <li>To prevent fraud or abuse of our services</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">4. Data Security</h2>
                  <p className="text-gray-600 mb-4">We implement various security measures to protect your information:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication requirements</li>
                    <li>Secure payment processing systems</li>
                    <li>Regular monitoring for suspicious activities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">5. Location Data</h2>
                  <p className="text-gray-600 mb-4">
                    We collect location information to provide our core services:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Matching riders with nearby drivers</li>
                    <li>Providing navigation and route optimization</li>
                    <li>Tracking rides for safety purposes</li>
                    <li>Calculating distances and costs</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    You can control location sharing through your device settings, but this may limit platform functionality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">6. Your Rights and Choices</h2>
                  <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Access and review your personal data</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Delete your account and associated data</li>
                    <li>Control marketing communications</li>
                    <li>Export your data in a portable format</li>
                    <li>Object to certain data processing activities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">7. Data Retention</h2>
                  <p className="text-gray-600">
                    We retain your information for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will remove your personal information within 30 days, except where required by law to retain certain records.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">8. Children's Privacy</h2>
                  <p className="text-gray-600">
                    Our services are not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will delete it immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">9. International Transfers</h2>
                  <p className="text-gray-600">
                    Your information may be processed and stored in countries other than your residence. We ensure appropriate safeguards are in place to protect your data during international transfers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">10. Changes to This Policy</h2>
                  <p className="text-gray-600">
                    We may update this privacy policy from time to time. We will notify users of significant changes through the app or email. Your continued use of our services after changes indicates acceptance of the updated policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">11. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="p-4 bg-ridex-lightGray rounded-lg">
                    <p className="text-gray-700">Email: privacy@ridex.com</p>
                    <p className="text-gray-700">Phone: +91 98765 43210</p>
                    <p className="text-gray-700">Address: RideX Privacy Office, Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
