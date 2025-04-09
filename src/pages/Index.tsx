
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Shield, CreditCard, Clock, Star, ChevronRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ridex-navy to-ridex-navy/90 text-white py-20">
          <div className="ridex-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Share Rides, <span className="text-ridex-teal">Save Money</span>, Connect with People
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  RideX makes carpooling simple, affordable and social. Book a ride or offer one in just a few taps.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-ridex-teal hover:bg-ridex-teal/90 text-white px-8 py-6 rounded-md"
                    onClick={() => navigate('/book-ride')}
                  >
                    Book a Ride <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 px-8 py-6 rounded-md"
                    onClick={() => navigate('/become-driver')}
                  >
                    Become a Driver
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center space-x-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-300"
                      ></div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">1,000+</div>
                    <div className="text-gray-300">Happy users</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">4.9</div>
                    <div className="text-gray-300">User rating</div>
                  </div>
                </div>
              </div>
              
              <div className="relative hidden lg:block animate-fade-in">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  {/* This would be an image in a real app */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 font-medium">Hero Image</p>
                  </div>
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-8 -left-8 bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-10 w-10 rounded-full bg-ridex-teal text-white flex items-center justify-center font-bold">
                      AM
                    </div>
                    <div>
                      <div className="font-medium">Anil M.</div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    "RideX has made my daily commute to office so much more affordable. I've met great people during my rides!"
                  </p>
                </div>
                
                {/* Floating card */}
                <div className="absolute -top-8 -right-8 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-ridex-teal" />
                    <div className="font-medium">Mumbai → Pune</div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-xs text-gray-500">3 available rides</div>
                    <div className="font-medium text-ridex-orange">₹850</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="ridex-container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-ridex-navy mb-4">How RideX Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're looking for a ride or offering one, our platform makes the process simple and secure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in">
              <div className="text-center">
                <div className="bg-ridex-teal/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <MapPin className="h-10 w-10 text-ridex-teal" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Find Your Route</h3>
                <p className="text-gray-600">
                  Enter your pickup location and destination to find available rides or offer your own.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-orange/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <CreditCard className="h-10 w-10 text-ridex-orange" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Book & Pay</h3>
                <p className="text-gray-600">
                  Select your preferred ride option and complete your booking with secure payment.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ridex-navy/10 p-6 rounded-full inline-flex items-center justify-center mb-6">
                  <Clock className="h-10 w-10 text-ridex-navy" />
                </div>
                <h3 className="text-xl font-bold text-ridex-navy mb-4">Travel & Save</h3>
                <p className="text-gray-600">
                  Meet your driver or passengers, enjoy the journey, and save on transportation costs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-ridex-lightGray">
          <div className="ridex-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-ridex-navy mb-6">Benefits of RideX</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-ridex-teal/10 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-ridex-teal" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                      <p className="text-gray-600">
                        All drivers are verified and rides are tracked in real-time for maximum security and peace of mind.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-ridex-orange/10 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-ridex-orange" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Save Money</h3>
                      <p className="text-gray-600">
                        Share travel costs with others going your way. Riders save on transportation and drivers offset their expenses.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-ridex-navy/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-ridex-navy" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                      <p className="text-gray-600">
                        Find rides that match your schedule or create your own when you plan to travel.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="mt-8 bg-ridex-teal hover:bg-ridex-teal/90 text-white px-8 py-3 rounded-md"
                  onClick={() => navigate('/register')}
                >
                  Join RideX Today
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6 animate-fade-in">
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="aspect-square bg-gray-200 rounded-lg translate-y-12"></div>
                <div className="aspect-square bg-gray-200 rounded-lg translate-y-6"></div>
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Popular Routes */}
        <section className="py-20 bg-white">
          <div className="ridex-container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-ridex-navy mb-4">Popular Routes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our most frequently traveled routes with the most available rides and best prices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {[
                { from: 'Mumbai', to: 'Pune', price: '₹850', availability: 'High' },
                { from: 'Delhi', to: 'Chandigarh', price: '₹1200', availability: 'Medium' },
                { from: 'Bangalore', to: 'Mysore', price: '₹650', availability: 'High' },
                { from: 'Chennai', to: 'Pondicherry', price: '₹750', availability: 'Medium' },
                { from: 'Hyderabad', to: 'Warangal', price: '₹550', availability: 'High' },
                { from: 'Kolkata', to: 'Siliguri', price: '₹1500', availability: 'Medium' },
              ].map((route, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-ridex-navy font-medium">
                      <MapPin className="h-4 w-4 mr-1 text-ridex-teal" />
                      <span>{route.from}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <div className="flex items-center text-ridex-navy font-medium">
                      <MapPin className="h-4 w-4 mr-1 text-ridex-orange" />
                      <span>{route.to}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-ridex-navy">{route.price}</span>
                      <span className="text-gray-500 text-sm ml-1">avg</span>
                    </div>
                    <div className={`text-sm px-2 py-1 rounded-full ${
                      route.availability === 'High' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {route.availability} Availability
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-ridex-navy hover:bg-ridex-navy/90"
                    onClick={() => navigate('/book-ride')}
                  >
                    Find Rides
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10 animate-fade-in">
              <Button 
                variant="outline"
                className="border-ridex-teal text-ridex-teal hover:bg-ridex-teal/10"
                onClick={() => navigate('/book-ride')}
              >
                View All Routes <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Become a Driver */}
        <section className="py-20 bg-gradient-to-br from-ridex-teal to-ridex-teal/90 text-white">
          <div className="ridex-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-medium mb-6">
                  For Drivers
                </div>
                <h2 className="text-3xl font-bold mb-6">Turn Your Empty Seats Into Extra Income</h2>
                <p className="text-lg mb-8 text-white/90">
                  Offer rides on your daily commute or long-distance trips and connect with passengers going your way. Reduce your travel costs and help create a more sustainable future.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-sm mr-3">
                      ✓
                    </div>
                    <span>Set your own schedule and prices</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-sm mr-3">
                      ✓
                    </div>
                    <span>Get paid directly to your account</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-sm mr-3">
                      ✓
                    </div>
                    <span>Build your driver profile with reviews</span>
                  </div>
                </div>
                
                <Button 
                  className="bg-white text-ridex-teal hover:bg-white/90"
                  onClick={() => navigate('/become-driver')}
                >
                  Become a Driver <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="relative hidden lg:block animate-fade-in">
                <div className="aspect-square bg-white/10 rounded-lg overflow-hidden">
                  {/* This would be an image in a real app */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/70 font-medium">Driver Image</p>
                  </div>
                </div>
                
                {/* Floating earnings card */}
                <div className="absolute top-8 -right-8 bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg text-ridex-navy mb-2">Monthly Earnings</h3>
                  <div className="text-3xl font-bold text-ridex-teal mb-2">₹25,000</div>
                  <div className="flex items-center text-sm text-green-600">
                    <span>↑ 12% from last month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="ridex-container">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-ridex-navy mb-4">What Our Users Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Read about the experiences of people who have found convenient and affordable rides through RideX.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              {[
                {
                  name: "Kavita P.",
                  type: "Rider",
                  comment: "RideX has transformed my daily commute to work. I save money and have met some amazing people on the way!",
                  rating: 5
                },
                {
                  name: "Rohit T.",
                  type: "Driver",
                  comment: "As a driver, I've been able to offset my travel costs significantly while helping others get where they need to go.",
                  rating: 5
                },
                {
                  name: "Neha L.",
                  type: "Rider",
                  comment: "The app is so easy to use, and I feel safe with the verification process and real-time tracking.",
                  rating: 4
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-500">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-ridex-navy">{testimonial.name}</h4>
                      <span className="text-sm text-gray-500">{testimonial.type}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star 
                        key={j}
                        className={`h-5 w-5 ${j < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-ridex-navy text-white">
          <div className="ridex-container">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Sharing Rides?</h2>
              <p className="text-lg mb-8 text-white/80">
                Join thousands of users who are already saving money and reducing their carbon footprint with RideX.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-ridex-teal hover:bg-ridex-teal/90 text-white px-8 py-6 text-lg"
                  onClick={() => navigate('/book-ride')}
                >
                  Book a Ride
                </Button>
                <Button 
                  className="bg-ridex-orange hover:bg-ridex-orange/90 text-white px-8 py-6 text-lg"
                  onClick={() => navigate('/become-driver')}
                >
                  Offer a Ride
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
