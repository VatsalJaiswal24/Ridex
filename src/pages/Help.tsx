
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const Help = () => {
  const faqs = [
    {
      question: "How do I book a ride?",
      answer: "Simply enter your pickup location and destination, browse available rides, and select the one that best fits your schedule and budget."
    },
    {
      question: "How do I become a driver?",
      answer: "Click on 'Become a Driver' and fill out our application form. We'll verify your documents and approve your account within 24-48 hours."
    },
    {
      question: "Is my payment secure?",
      answer: "Yes, we use industry-standard encryption and secure payment gateways to protect all transactions."
    },
    {
      question: "What if I need to cancel my ride?",
      answer: "You can cancel your ride from your dashboard. Cancellation policies vary based on timing and the driver's cancellation policy."
    },
    {
      question: "How are drivers verified?",
      answer: "All drivers must provide valid documents including license, vehicle registration, and identity proof, which we verify before approval."
    },
    {
      question: "What happens if there's an issue during the ride?",
      answer: "Contact our 24/7 support team immediately. We also have real-time tracking and emergency features for your safety."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ridex-navy to-ridex-navy/90 text-white py-20">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Get help with your RideX experience. Find answers to common questions or contact our support team.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ridex-navy mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-ridex-navy mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-ridex-lightGray">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-ridex-navy mb-12 text-center">Contact Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-ridex-teal/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                    <MessageCircle className="h-10 w-10 text-ridex-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-ridex-navy mb-4">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Get instant help through our live chat support.</p>
                  <button className="bg-ridex-teal text-white px-6 py-2 rounded-md hover:bg-ridex-teal/90">
                    Start Chat
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="bg-ridex-orange/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                    <Phone className="h-10 w-10 text-ridex-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-ridex-navy mb-4">Phone Support</h3>
                  <p className="text-gray-600 mb-4">Call our support team for immediate assistance.</p>
                  <p className="font-medium text-ridex-navy">+91 98765 43210</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-ridex-navy/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                    <Mail className="h-10 w-10 text-ridex-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-ridex-navy mb-4">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
                  <p className="font-medium text-ridex-navy">hello@ridex.com</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-ridex-teal/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                    <Clock className="h-10 w-10 text-ridex-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-ridex-navy mb-4">Support Hours</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9AM - 9PM</p>
                  <p className="text-gray-600">Saturday - Sunday: 10AM - 6PM</p>
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

export default Help;
