
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Calendar, User, Car, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MapView from '@/components/ui/MapView';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface RideOption {
  id: string;
  type: string;
  name: string;
  price: number;
  time: string;
  icon: JSX.Element;
}

const BookRide = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  
  const [step, setStep] = useState<number>(1);
  const [pickup, setPickup] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  
  // Mock ride options
  const rideOptions: RideOption[] = [
    {
      id: 'economy',
      type: 'Economy',
      name: 'Standard',
      price: 15.99,
      time: '15-20 min',
      icon: <Car className="h-6 w-6" />,
    },
    {
      id: 'comfort',
      type: 'Comfort',
      name: 'Premium',
      price: 24.99,
      time: '10-15 min',
      icon: <Car className="h-6 w-6" />,
    },
    {
      id: 'luxury',
      type: 'Luxury',
      name: 'Executive',
      price: 39.99,
      time: '8-12 min',
      icon: <Car className="h-6 w-6" />,
    },
  ];
  
  const handleNextStep = () => {
    if (step === 1) {
      if (!pickup || !destination) {
        toast({
          title: "Missing information",
          description: "Please enter both pickup and destination addresses.",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!date || !time) {
        toast({
          title: "Missing information",
          description: "Please select both date and time for your ride.",
          variant: "destructive",
        });
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!selectedOption) {
        toast({
          title: "Missing selection",
          description: "Please select a ride type to continue.",
          variant: "destructive",
        });
        return;
      }
      setStep(4);
    } else if (step === 4) {
      // In a real app, we would process the booking and navigate to a confirmation page
      if (!isAuthenticated) {
        toast({
          title: "Login Required",
          description: "Please log in or create an account to complete your booking.",
        });
        navigate('/login');
      } else {
        // Submit booking
        toast({
          title: "Booking Successful!",
          description: "Your ride has been booked successfully.",
        });
        navigate('/dashboard/rider');
      }
    }
  };
  
  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Where are you going?</h2>
            
            <div>
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="pickup"
                  placeholder="Enter pickup address"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="destination"
                  placeholder="Enter destination address"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">When do you want to travel?</h2>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="pl-10 w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Choose your ride type</h2>
            
            <div className="space-y-4">
              {rideOptions.map(option => (
                <div 
                  key={option.id}
                  className={`border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedOption === option.id ? 'border-ridex-teal bg-ridex-teal/5' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${
                        selectedOption === option.id ? 'bg-ridex-teal text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {option.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">{option.type}</h3>
                        <p className="text-sm text-gray-500">{option.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">${option.price.toFixed(2)}</div>
                      <p className="text-sm text-gray-500">{option.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 4:
        const selectedRide = rideOptions.find(option => option.id === selectedOption);
        
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Review and Confirm</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pickup:</span>
                  <span className="font-medium">{pickup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Destination:</span>
                  <span className="font-medium">{destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{time}</span>
                </div>
                {selectedRide && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ride Type:</span>
                      <span className="font-medium">{selectedRide.type} ({selectedRide.name})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Price:</span>
                      <span className="font-medium">${selectedRide.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Arrival:</span>
                      <span className="font-medium">{selectedRide.time}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Payment Method</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-6 bg-gray-700 rounded mr-3"></div>
                  <span>**** **** **** 4589</span>
                </div>
                <Button variant="ghost" onClick={() => navigate('/payment')}>
                  Change
                </Button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-ridex-lightGray">
        <div className="ridex-container py-8">
          <h1 className="text-2xl font-bold text-ridex-navy mb-6">Book a Ride</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form Panel */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 order-2 lg:order-1">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex justify-between">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex flex-col items-center">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step >= i ? 'bg-ridex-teal text-white' : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {i}
                      </div>
                      <div className="text-xs mt-1 text-gray-500">
                        {i === 1 ? 'Location' : i === 2 ? 'Schedule' : i === 3 ? 'Vehicle' : 'Confirm'}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex mt-2 mx-4">
                  {[1, 2, 3].map(i => (
                    <div 
                      key={i}
                      className={`h-1 flex-1 ${step > i ? 'bg-ridex-teal' : 'bg-gray-200'}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Step Content */}
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button variant="outline" onClick={handlePreviousStep}>
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                <Button 
                  className="bg-ridex-teal hover:bg-ridex-teal/90"
                  onClick={handleNextStep}
                >
                  {step === 4 ? 'Confirm Booking' : 'Next'} <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Map Panel */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <MapView pickup={pickup} destination={destination} className="h-96 lg:h-full min-h-[400px]" />
              
              {/* Ride Details Panel */}
              {(pickup && destination) && (
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="min-w-[24px] mt-1">
                        <div className="w-3 h-3 rounded-full bg-ridex-teal"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Pickup</h3>
                        <p className="text-gray-500">{pickup}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="min-w-[24px] mt-1">
                        <div className="w-3 h-3 rounded-full bg-ridex-orange"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Destination</h3>
                        <p className="text-gray-500">{destination}</p>
                      </div>
                    </div>
                    
                    {date && time && (
                      <div className="flex items-start">
                        <div className="min-w-[24px] mt-1">
                          <Clock className="h-4 w-4 text-ridex-navy" />
                        </div>
                        <div>
                          <h3 className="font-medium">Scheduled For</h3>
                          <p className="text-gray-500">{date} at {time}</p>
                        </div>
                      </div>
                    )}
                    
                    {selectedOption && (
                      <div className="flex items-start">
                        <div className="min-w-[24px] mt-1">
                          <Car className="h-4 w-4 text-ridex-navy" />
                        </div>
                        <div>
                          <h3 className="font-medium">Vehicle Type</h3>
                          <p className="text-gray-500">
                            {rideOptions.find(option => option.id === selectedOption)?.type || 'Selected ride'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookRide;
