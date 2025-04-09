
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Clock, MapPin, Calendar } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RideCard from '@/components/rides/RideCard';
import MapView from '@/components/ui/MapView';
import { Ride, User, UserRole } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const RiderDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock data for rides
  const [rides, setRides] = useState<Ride[]>([
    {
      id: '1',
      pickup: '123 Main St, Anytown',
      destination: '456 Oak Ave, Somewhere',
      date: '2025-04-10',
      time: '09:30 AM',
      price: 24.50,
      driver: {
        id: 'd1',
        name: 'John Driver',
        email: 'john@example.com',
        role: UserRole.DRIVER,
      },
      status: 'completed',
    },
    {
      id: '2',
      pickup: '789 Elm St, Hometown',
      destination: '101 Pine Rd, Otherplace',
      date: '2025-04-12',
      time: '02:15 PM',
      price: 18.75,
      status: 'pending',
    },
    {
      id: '3',
      pickup: '202 Maple Dr, Cityville',
      destination: '303 Birch Ln, Townsburg',
      date: '2025-04-15',
      time: '10:00 AM',
      price: 32.20,
      driver: {
        id: 'd2',
        name: 'Sarah Driver',
        email: 'sarah@example.com',
        role: UserRole.DRIVER,
      },
      status: 'accepted',
    }
  ]);
  
  const handleRideAction = (rideId: string, action: string) => {
    switch (action) {
      case 'cancel':
        // In a real app, you would call an API to cancel the ride
        setRides(rides.map(ride => 
          ride.id === rideId ? { ...ride, status: 'cancelled' } : ride
        ));
        toast({
          title: "Ride Cancelled",
          description: "Your ride has been cancelled successfully.",
        });
        break;
      default:
        break;
    }
  };
  
  const upcomingRides = rides.filter(ride => ['pending', 'accepted'].includes(ride.status));
  const pastRides = rides.filter(ride => ['completed', 'cancelled'].includes(ride.status));
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-ridex-lightGray">
        <div className="ridex-container py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-ridex-navy">Rider Dashboard</h1>
            <Button 
              className="bg-ridex-teal hover:bg-ridex-teal/90"
              onClick={() => navigate('/book-ride')}
            >
              Book a New Ride
            </Button>
          </div>
          
          {/* Quick booking form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-lg font-semibold mb-4">Quick Ride</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">Pickup Location</label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="pickup"
                      placeholder="Enter pickup address"
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="destination"
                      placeholder="Enter destination address"
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                    <div className="relative mt-1">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="date"
                        id="date"
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                    <div className="relative mt-1">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="time"
                        id="time"
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                      />
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-ridex-teal hover:bg-ridex-teal/90">Find Drivers</Button>
              </div>
              
              <MapView className="h-64 md:h-auto" />
            </div>
          </div>
          
          {/* Upcoming rides */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-ridex-navy mb-4">Upcoming Rides</h2>
            {upcomingRides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingRides.map(ride => (
                  <RideCard 
                    key={ride.id} 
                    ride={ride} 
                    viewType="rider" 
                    onAction={handleRideAction}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-gray-500">No upcoming rides. Book a ride to get started!</p>
              </div>
            )}
          </div>
          
          {/* Past rides */}
          <div>
            <h2 className="text-xl font-semibold text-ridex-navy mb-4">Ride History</h2>
            {pastRides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastRides.map(ride => (
                  <RideCard 
                    key={ride.id} 
                    ride={ride} 
                    viewType="rider" 
                    onAction={handleRideAction}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-gray-500">No ride history yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RiderDashboard;
