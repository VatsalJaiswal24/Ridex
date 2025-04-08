
import React from 'react';
import { MapPin, Clock, Calendar, DollarSign, User } from 'lucide-react';
import { Ride } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface RideCardProps {
  ride: Ride;
  viewType: 'rider' | 'driver';
  onAction?: (rideId: string, action: string) => void;
}

const RideCard: React.FC<RideCardProps> = ({ ride, viewType, onAction }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'accepted':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold">{ride.pickup} → {ride.destination}</h3>
            <div className="text-sm text-gray-500 flex items-center mt-1">
              <Calendar className="h-4 w-4 mr-1" /> {ride.date}
              <Clock className="h-4 w-4 ml-3 mr-1" /> {ride.time}
            </div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(ride.status)}`}>
            {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 text-ridex-teal mr-1" />
            <span>{ride.pickup}</span>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 text-ridex-orange mr-1" />
            <span className="font-medium">${ride.price.toFixed(2)}</span>
          </div>
        </div>
        
        {viewType === 'rider' && ride.driver && (
          <div className="flex items-center space-x-2 mt-4 p-3 bg-gray-50 rounded-md">
            <div className="h-10 w-10 rounded-full bg-ridex-navy text-white flex items-center justify-center">
              {ride.driver.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-medium">{ride.driver.name}</p>
              <p className="text-sm text-gray-500">Driver</p>
            </div>
          </div>
        )}
        
        {viewType === 'driver' && ride.rider && (
          <div className="flex items-center space-x-2 mt-4 p-3 bg-gray-50 rounded-md">
            <div className="h-10 w-10 rounded-full bg-ridex-teal text-white flex items-center justify-center">
              {ride.rider.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-medium">{ride.rider.name}</p>
              <p className="text-sm text-gray-500">Rider</p>
            </div>
          </div>
        )}
        
        <div className="mt-4 flex space-x-2">
          {viewType === 'rider' && ride.status === 'pending' && (
            <Button variant="outline" className="w-full" onClick={() => onAction?.(ride.id, 'cancel')}>
              Cancel Ride
            </Button>
          )}
          
          {viewType === 'driver' && ride.status === 'pending' && (
            <>
              <Button variant="outline" className="flex-1" onClick={() => onAction?.(ride.id, 'reject')}>
                Decline
              </Button>
              <Button className="flex-1 bg-ridex-teal hover:bg-ridex-teal/90" onClick={() => onAction?.(ride.id, 'accept')}>
                Accept
              </Button>
            </>
          )}
          
          {ride.status === 'accepted' && (
            <>
              <Button variant="outline" className="flex-1">
                Contact
              </Button>
              <Button className="flex-1 bg-ridex-teal hover:bg-ridex-teal/90">
                {viewType === 'rider' ? 'Track Ride' : 'Start Ride'}
              </Button>
            </>
          )}
          
          {ride.status === 'completed' && (
            <Button variant="outline" className="w-full">
              Leave Review
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default RideCard;
