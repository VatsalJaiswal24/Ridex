
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield, MapPin, Phone, Users, CheckCircle, AlertTriangle } from 'lucide-react';

const Safety = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ridex-navy to-ridex-navy/90 text-white py-20">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Safety Center</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Your safety is our top priority. Learn about our safety features and best practices for secure ridesharing.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20 bg-white">
          <div className="ridex-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-ridex-navy mb-4">Our Safety Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've implemented multiple layers of security to ensure your peace of mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-ridex-teal/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <Shield className="h-10 w-10 text-ridex-teal" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Driver Verification</h3>
                <p className="text-gray-600">
                  All drivers undergo thorough background checks and document verification before joining our platform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-orange/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <MapPin className="h-10 w-10 text-ridex-orange" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Real-time Tracking</h3>
                <p className="text-gray-600">
                  Track your ride in real-time and share your location with trusted contacts for added security.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-navy/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <Phone className="h-10 w-10 text-ridex-navy" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">24/7 Support</h3>
                <p className="text-gray-600">
                  Our support team is available round the clock to assist with any safety concerns or emergencies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-teal/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <Users className="h-10 w-10 text-ridex-teal" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Rating System</h3>
                <p className="text-gray-600">
                  Both riders and drivers can rate each other, helping maintain a trustworthy community.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-orange/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-ridex-orange" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Identity Verification</h3>
                <p className="text-gray-600">
                  All users must verify their identity with valid government-issued documents.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-navy/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <AlertTriangle className="h-10 w-10 text-ridex-navy" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Emergency Button</h3>
                <p className="text-gray-600">
                  Quick access to emergency services and instant alerts to your emergency contacts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-20 bg-ridex-lightGray">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ridex-navy mb-12 text-center">Safety Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-ridex-navy mb-6">For Riders</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-teal mt-1 mr-3 flex-shrink-0" />
                      <span>Verify driver and vehicle details before getting into the car</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-teal mt-1 mr-3 flex-shrink-0" />
                      <span>Share your trip details with friends or family</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-teal mt-1 mr-3 flex-shrink-0" />
                      <span>Sit in the back seat when riding alone</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-teal mt-1 mr-3 flex-shrink-0" />
                      <span>Trust your instincts - if something feels wrong, speak up</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-teal mt-1 mr-3 flex-shrink-0" />
                      <span>Keep your phone charged and easily accessible</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-ridex-navy mb-6">For Drivers</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-orange mt-1 mr-3 flex-shrink-0" />
                      <span>Keep your vehicle clean and well-maintained</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-orange mt-1 mr-3 flex-shrink-0" />
                      <span>Verify passenger identity before starting the trip</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-orange mt-1 mr-3 flex-shrink-0" />
                      <span>Follow traffic rules and drive safely</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-orange mt-1 mr-3 flex-shrink-0" />
                      <span>Maintain professional behavior throughout the ride</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ridex-orange mt-1 mr-3 flex-shrink-0" />
                      <span>Report any concerning behavior to our support team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-ridex-navy text-white">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Emergency Support</h2>
              <p className="text-lg mb-8 text-white/80">
                If you're in an emergency situation, contact local authorities immediately. For non-emergency safety concerns, reach out to our support team.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Emergency Services</h3>
                  <p className="text-white/80 mb-2">Police, Fire, Medical</p>
                  <p className="text-2xl font-bold text-ridex-orange">100</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">RideX Support</h3>
                  <p className="text-white/80 mb-2">24/7 Safety Helpline</p>
                  <p className="text-2xl font-bold text-ridex-teal">+91 98765 43210</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Women's Helpline</h3>
                  <p className="text-white/80 mb-2">National Women's Helpline</p>
                  <p className="text-2xl font-bold text-ridex-orange">1091</p>
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

export default Safety;
