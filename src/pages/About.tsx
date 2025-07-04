
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ridex-navy to-ridex-navy/90 text-white py-20">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About RideX</h1>
              <p className="text-lg md:text-xl text-gray-200">
                We're on a mission to make transportation more sustainable, affordable, and social by connecting people who share similar routes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="ridex-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-ridex-navy mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  RideX was founded with the belief that transportation should be accessible, affordable, and environmentally friendly. We connect riders and drivers to create a community-driven carpooling platform that benefits everyone.
                </p>
                <p className="text-lg text-gray-600">
                  By sharing rides, we're not just saving money - we're reducing traffic congestion, lowering carbon emissions, and building meaningful connections between people in our communities.
                </p>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Indian team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-ridex-lightGray">
          <div className="ridex-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-ridex-navy mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do at RideX
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-ridex-teal/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <Heart className="h-10 w-10 text-ridex-teal" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Community</h3>
                <p className="text-gray-600">
                  Building connections and fostering relationships between riders and drivers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-orange/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <Target className="h-10 w-10 text-ridex-orange" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  Reducing our environmental impact through shared transportation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-navy/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <Award className="h-10 w-10 text-ridex-navy" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Safety</h3>
                <p className="text-gray-600">
                  Ensuring every ride is secure with verification and tracking.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-teal/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <Users className="h-10 w-10 text-ridex-teal" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  Making transportation affordable and available to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="ridex-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-ridex-navy mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600">Numbers that show the difference we're making</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-ridex-teal mb-2">10,000+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ridex-orange mb-2">50,000+</div>
                <div className="text-gray-600">Rides Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ridex-navy mb-2">₹2.5M+</div>
                <div className="text-gray-600">Money Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ridex-teal mb-2">15 Tons</div>
                <div className="text-gray-600">CO₂ Reduced</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
