import React, { useState } from 'react';
import { Car, Clock, MapPin, Calendar, DollarSign, UserCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RideCard from '@/components/rides/RideCard';
import MapView from '@/components/ui/MapView';
import { Ride, User, UserRole } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const DriverDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isAvailableForRides, setIsAvailableForRides] = useState(true);

  // Mock data for ride requests and past rides
  const [rideRequests, setRideRequests] = useState<Ride[]>([
    {
      id: '1',
      pickup: '123 Main St, Anytown',
      destination: '456 Oak Ave, Somewhere',
      date: '2025-04-10',
      time: '09:30 AM',
      price: 24.50,
      rider: {
        id: 'r1',
        name: 'Alice Rider',
        email: 'alice@example.com',
        role: UserRole.RIDER,
      },
      status: 'pending',
    },
    {
      id: '2',
      pickup: '789 Elm St, Hometown',
      destination: '101 Pine Rd, Otherplace',
      date: '2025-04-12',
      time: '02:15 PM',
      price: 18.75,
      rider: {
        id: 'r2',
        name: 'Bob Passenger',
        email: 'bob@example.com',
        role: UserRole.RIDER,
      },
      status: 'pending',
    },
  ]);

  const [acceptedRides, setAcceptedRides] = useState<Ride[]>([
    {
      id: '3',
      pickup: '202 Maple Dr, Cityville',
      destination: '303 Birch Ln, Townsburg',
      date: '2025-04-09',
      time: '10:00 AM',
      price: 32.20,
      rider: {
        id: 'r3',
        name: 'Charlie User',
        email: 'charlie@example.com',
        role: UserRole.RIDER,
      },
      status: 'accepted',
    },
  ]);

  const [pastRides, setPastRides] = useState<Ride[]>([
    {
      id: '4',
      pickup: '404 Cedar St, Villagetown',
      destination: '505 Spruce Ave, Hamlet',
      date: '2025-04-07',
      time: '11:30 AM',
      price: 29.99,
      rider: {
        id: 'r4',
        name: 'Diana Client',
        email: 'diana@example.com',
        role: UserRole.RIDER,
      },
      status: 'completed',
    },
  ]);

  const handleRideAction = (rideId: string, action: string) => {
    switch (action) {
      case 'accept':
        // In a real app, you would call an API to accept the ride
        const acceptedRide = rideRequests.find(ride => ride.id === rideId);
        if (acceptedRide) {
          const updatedRide: Ride = { 
            ...acceptedRide, 
            status: 'accepted' as const 
          };
          setRideRequests(rideRequests.filter(ride => ride.id !== rideId));
          setAcceptedRides([...acceptedRides, updatedRide]);
          
          toast({
            title: "Ride Accepted",
            description: "You have accepted the ride request.",
          });
        }
        break;
      case 'reject':
        // In a real app, you would call an API to reject the ride
        setRideRequests(rideRequests.filter(ride => ride.id !== rideId));
        
        toast({
          title: "Ride Declined",
          description: "You have declined the ride request.",
        });
        break;
      default:
        break;
    }
  };

  const toggleAvailability = () => {
    setIsAvailableForRides(!isAvailableForRides);
    
    toast({
      title: isAvailableForRides ? "You're now offline" : "You're now online",
      description: isAvailableForRides 
        ? "You won't receive new ride requests" 
        : "You'll now receive ride requests",
    });
  };

  // Calculate stats
  const totalEarnings = [...acceptedRides, ...pastRides].reduce((sum, ride) => sum + ride.price, 0);
  const completedRidesCount = pastRides.length;
  const acceptedRidesCount = acceptedRides.length;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-ridex-lightGray">
        <div className="ridex-container py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-ridex-navy">Driver Dashboard</h1>
            <Button 
              onClick={toggleAvailability}
              className={`${isAvailableForRides ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-500 hover:bg-gray-600'}`}
            >
              {isAvailableForRides ? 'Available for Rides' : 'Not Available'}
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="bg-ridex-teal/20 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-ridex-teal" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Total Earnings</h3>
                  <p className="text-2xl font-bold text-ridex-navy">${totalEarnings.toFixed(2)}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="bg-ridex-orange/20 p-3 rounded-full">
                  <Car className="h-6 w-6 text-ridex-orange" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Completed Rides</h3>
                  <p className="text-2xl font-bold text-ridex-navy">{completedRidesCount}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="bg-ridex-navy/20 p-3 rounded-full">
                  <UserCheck className="h-6 w-6 text-ridex-navy" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Active Trips</h3>
                  <p className="text-2xl font-bold text-ridex-navy">{acceptedRidesCount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map View with current location */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-lg font-semibold mb-4">Your Current Location</h2>
            <MapView className="h-64" />
          </div>
          
          {/* Ride Requests */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-ridex-navy mb-4">Ride Requests</h2>
            {rideRequests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rideRequests.map(ride => (
                  <RideCard 
                    key={ride.id} 
                    ride={ride} 
                    viewType="driver" 
                    onAction={handleRideAction}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-gray-500">No ride requests at the moment.</p>
              </div>
            )}
          </div>
          
          {/* Accepted Rides */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-ridex-navy mb-4">Active Trips</h2>
            {acceptedRides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {acceptedRides.map(ride => (
                  <RideCard 
                    key={ride.id} 
                    ride={ride} 
                    viewType="driver" 
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <p className="text-gray-500">No active trips at the moment.</p>
              </div>
            )}
          </div>
          
          {/* Past Rides */}
          <div>
            <h2 className="text-xl font-semibold text-ridex-navy mb-4">Ride History</h2>
            {pastRides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastRides.map(ride => (
                  <RideCard 
                    key={ride.id} 
                    ride={ride} 
                    viewType="driver" 
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

export default DriverDashboard;
