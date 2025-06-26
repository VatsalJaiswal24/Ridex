
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ridex-navy to-ridex-navy/90 text-white py-20">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Please read these terms carefully before using RideX services.
              </p>
              <p className="text-sm text-gray-300 mt-4">Last updated: January 2025</p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-white">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600">
                    By accessing and using RideX services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all users of the service, including riders and drivers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">2. Service Description</h2>
                  <p className="text-gray-600 mb-4">
                    RideX is a ridesharing platform that connects riders with drivers traveling in the same direction. We facilitate carpooling arrangements but are not a transportation company.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>We provide a platform for users to connect and share rides</li>
                    <li>We do not provide transportation services directly</li>
                    <li>All ride arrangements are between individual users</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">3. User Responsibilities</h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-ridex-navy mb-3">For All Users:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Provide accurate and up-to-date information</li>
                      <li>Maintain respectful and professional behavior</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Respect other users' property and personal space</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-ridex-navy mb-3">For Drivers:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Maintain a valid driver's license and vehicle registration</li>
                      <li>Ensure vehicle is safe and roadworthy</li>
                      <li>Drive safely and follow traffic laws</li>
                      <li>Maintain appropriate insurance coverage</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-ridex-navy mb-3">For Riders:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Be punctual for scheduled rides</li>
                      <li>Contribute to fuel and toll costs as agreed</li>
                      <li>Respect the driver's vehicle and rules</li>
                      <li>Communicate any changes or cancellations promptly</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">4. Payment and Fees</h2>
                  <p className="text-gray-600 mb-4">
                    RideX facilitates payments between users and may charge service fees:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Ride costs are determined by drivers and agreed upon by riders</li>
                    <li>Payment processing fees may apply</li>
                    <li>Refunds are subject to our cancellation policy</li>
                    <li>All payments are processed securely through our platform</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">5. Safety and Liability</h2>
                  <p className="text-gray-600 mb-4">
                    While we implement safety measures, users participate in ridesharing at their own risk:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>We verify user identities but cannot guarantee complete safety</li>
                    <li>Users are responsible for their own safety and security</li>
                    <li>RideX is not liable for accidents, injuries, or property damage</li>
                    <li>Users should maintain appropriate insurance coverage</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">6. Privacy and Data</h2>
                  <p className="text-gray-600">
                    Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">7. Prohibited Activities</h2>
                  <p className="text-gray-600 mb-4">The following activities are strictly prohibited:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Using the platform for commercial transportation services</li>
                    <li>Harassment, discrimination, or inappropriate behavior</li>
                    <li>Providing false or misleading information</li>
                    <li>Attempting to circumvent our payment system</li>
                    <li>Violating any applicable laws or regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">8. Account Termination</h2>
                  <p className="text-gray-600">
                    We reserve the right to suspend or terminate accounts that violate these terms or engage in harmful behavior. Users may also delete their accounts at any time through the platform settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">9. Changes to Terms</h2>
                  <p className="text-gray-600">
                    We may update these terms from time to time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of the updated terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ridex-navy mb-4">10. Contact Information</h2>
                  <p className="text-gray-600">
                    For questions about these terms or our services, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-ridex-lightGray rounded-lg">
                    <p className="text-gray-700">Email: legal@ridex.com</p>
                    <p className="text-gray-700">Phone: +91 98765 43210</p>
                    <p className="text-gray-700">Address: RideX Legal Department, Mumbai, India</p>
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

export default Terms;
