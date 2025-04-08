
import React from 'react';

interface MapViewProps {
  pickup?: string;
  destination?: string;
  className?: string;
}

const MapView: React.FC<MapViewProps> = ({ pickup, destination, className }) => {
  // In a real application, we would integrate with a maps API like Google Maps or Mapbox
  // This is a placeholder that simulates a map view
  return (
    <div className={`rounded-lg overflow-hidden bg-gray-200 relative ${className}`}>
      <div className="absolute inset-0 bg-gray-300 opacity-50 flex items-center justify-center">
        <p className="text-lg font-medium text-gray-700">Map View</p>
      </div>
      {pickup && destination && (
        <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-md shadow-md">
          <div className="text-sm mb-1">
            <span className="font-semibold">From:</span> {pickup}
          </div>
          <div className="text-sm">
            <span className="font-semibold">To:</span> {destination}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
