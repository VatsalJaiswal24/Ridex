
import React, { useState } from 'react';
import { Users, Car, TrendingUp, Search, Filter } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { User, Ride, UserRole } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const StaffDashboard = () => {
  const { toast } = useToast();
  
  // Mock data for users and rides
  const [users, setUsers] = useState<User[]>([
    { id: 'r1', name: 'Alice Rider', email: 'alice@example.com', role: UserRole.RIDER },
    { id: 'r2', name: 'Bob Passenger', email: 'bob@example.com', role: UserRole.RIDER },
    { id: 'd1', name: 'Charlie Driver', email: 'charlie@example.com', role: UserRole.DRIVER },
    { id: 'd2', name: 'Diana Driver', email: 'diana@example.com', role: UserRole.DRIVER },
  ]);
  
  const [rides, setRides] = useState<Ride[]>([
    {
      id: '1',
      pickup: '123 Main St, Anytown',
      destination: '456 Oak Ave, Somewhere',
      date: '2025-04-10',
      time: '09:30 AM',
      price: 24.50,
      rider: { id: 'r1', name: 'Alice Rider', email: 'alice@example.com', role: UserRole.RIDER },
      driver: { id: 'd1', name: 'Charlie Driver', email: 'charlie@example.com', role: UserRole.DRIVER },
      status: 'completed',
    },
    {
      id: '2',
      pickup: '789 Elm St, Hometown',
      destination: '101 Pine Rd, Otherplace',
      date: '2025-04-12',
      time: '02:15 PM',
      price: 18.75,
      rider: { id: 'r2', name: 'Bob Passenger', email: 'bob@example.com', role: UserRole.RIDER },
      status: 'pending',
    },
    {
      id: '3',
      pickup: '202 Maple Dr, Cityville',
      destination: '303 Birch Ln, Townsburg',
      date: '2025-04-15',
      time: '10:00 AM',
      price: 32.20,
      rider: { id: 'r2', name: 'Bob Passenger', email: 'bob@example.com', role: UserRole.RIDER },
      driver: { id: 'd2', name: 'Diana Driver', email: 'diana@example.com', role: UserRole.DRIVER },
      status: 'accepted',
    },
  ]);
  
  const [activeView, setActiveView] = useState<'users' | 'rides' | 'stats'>('stats');
  const [filterRole, setFilterRole] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filter users based on role and search query
  const filteredUsers = users.filter(user => {
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });
  
  // Filter rides based on search query (by pickup or destination)
  const filteredRides = rides.filter(ride => {
    return ride.pickup.toLowerCase().includes(searchQuery.toLowerCase()) || 
           ride.destination.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  const handleToggleUserStatus = (userId: string) => {
    // In a real app, you would call an API to disable/enable the user
    toast({
      title: "User Status Updated",
      description: "The user status has been updated successfully.",
    });
  };
  
  const handleCancelRide = (rideId: string) => {
    // In a real app, you would call an API to cancel the ride
    setRides(rides.map(ride => 
      ride.id === rideId ? { ...ride, status: 'cancelled' } : ride
    ));
    
    toast({
      title: "Ride Cancelled",
      description: "The ride has been cancelled successfully.",
    });
  };
  
  // Calculate stats
  const totalUsers = users.length;
  const totalRiders = users.filter(user => user.role === UserRole.RIDER).length;
  const totalDrivers = users.filter(user => user.role === UserRole.DRIVER).length;
  const completedRides = rides.filter(ride => ride.status === 'completed').length;
  const pendingRides = rides.filter(ride => ride.status === 'pending').length;
  const totalRevenue = rides
    .filter(ride => ride.status === 'completed')
    .reduce((sum, ride) => sum + ride.price, 0);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-ridex-lightGray">
        <div className="ridex-container py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-ridex-navy">Staff Dashboard</h1>
            
            <div className="flex space-x-2">
              <Button 
                variant={activeView === 'stats' ? 'default' : 'outline'}
                onClick={() => setActiveView('stats')}
                className={activeView === 'stats' ? 'bg-ridex-teal hover:bg-ridex-teal/90' : ''}
              >
                <TrendingUp className="mr-2 h-4 w-4" /> Stats
              </Button>
              <Button 
                variant={activeView === 'users' ? 'default' : 'outline'}
                onClick={() => setActiveView('users')}
                className={activeView === 'users' ? 'bg-ridex-teal hover:bg-ridex-teal/90' : ''}
              >
                <Users className="mr-2 h-4 w-4" /> Users
              </Button>
              <Button 
                variant={activeView === 'rides' ? 'default' : 'outline'}
                onClick={() => setActiveView('rides')}
                className={activeView === 'rides' ? 'bg-ridex-teal hover:bg-ridex-teal/90' : ''}
              >
                <Car className="mr-2 h-4 w-4" /> Rides
              </Button>
            </div>
          </div>
          
          {/* Stats View */}
          {activeView === 'stats' && (
            <div className="space-y-8">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Total Users</h3>
                  <p className="text-2xl font-bold text-ridex-navy">{totalUsers}</p>
                  <div className="flex justify-between mt-4 text-sm">
                    <span className="text-gray-500">Riders: {totalRiders}</span>
                    <span className="text-gray-500">Drivers: {totalDrivers}</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Completed Rides</h3>
                  <p className="text-2xl font-bold text-ridex-navy">{completedRides}</p>
                  <p className="text-sm text-gray-500 mt-4">Pending: {pendingRides}</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Total Revenue</h3>
                  <p className="text-2xl font-bold text-ridex-navy">${totalRevenue.toFixed(2)}</p>
                  <p className="text-sm text-gray-500 mt-4">Average: ${(totalRevenue / (completedRides || 1)).toFixed(2)}/ride</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">System Status</h3>
                  <p className="text-2xl font-bold text-green-600">Online</p>
                  <p className="text-sm text-gray-500 mt-4">All services operational</p>
                </div>
              </div>
              
              {/* Charts would go here in a real application */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Weekly Ride Trends</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                    <p className="text-gray-500">Chart Visualization Placeholder</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
                  <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                    <p className="text-gray-500">Chart Visualization Placeholder</p>
                  </div>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {rides.slice(0, 5).map((ride) => (
                    <div key={ride.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">{ride.rider?.name} → {ride.driver?.name || "Unassigned"}</p>
                          <p className="text-sm text-gray-500">{ride.pickup} to {ride.destination}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${ride.price.toFixed(2)}</p>
                          <p className="text-sm text-gray-500">{ride.date}, {ride.time}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          ride.status === 'completed' ? 'bg-green-100 text-green-800' :
                          ride.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          ride.status === 'accepted' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                        </span>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Users View */}
          {activeView === 'users' && (
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Manage Users</h2>
                <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Filter className="text-gray-400 h-5 w-5" />
                    <select
                      value={filterRole}
                      onChange={(e) => setFilterRole(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                    >
                      <option value="all">All Users</option>
                      <option value={UserRole.RIDER}>Riders</option>
                      <option value={UserRole.DRIVER}>Drivers</option>
                      <option value={UserRole.STAFF}>Staff</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-ridex-teal text-white flex items-center justify-center">
                              {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.role === UserRole.RIDER ? 'bg-blue-100 text-blue-800' :
                            user.role === UserRole.DRIVER ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            className="text-ridex-teal hover:text-ridex-teal/80 mr-4"
                            onClick={() => {/* View user details */}}
                          >
                            View
                          </button>
                          <button 
                            className="text-amber-600 hover:text-amber-900 mr-4"
                            onClick={() => handleToggleUserStatus(user.id)}
                          >
                            Disable
                          </button>
                          <button 
                            className="text-red-600 hover:text-red-900"
                            onClick={() => {/* Delete user - would require confirmation */}}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredUsers.length === 0 && (
                  <div className="p-6 text-center text-gray-500">
                    No users found matching your criteria.
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Showing {filteredUsers.length} of {users.length} users
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm" disabled>Next</Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Rides View */}
          {activeView === 'rides' && (
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Manage Rides</h2>
                <div className="mt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search rides by location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                    />
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ride Details</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rider</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredRides.map((ride) => (
                      <tr key={ride.id}>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{ride.pickup}</div>
                          <div className="text-sm text-gray-500">to {ride.destination}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{ride.date}</div>
                          <div className="text-sm text-gray-500">{ride.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {ride.rider ? (
                            <div className="text-sm font-medium text-gray-900">{ride.rider.name}</div>
                          ) : (
                            <div className="text-sm text-gray-500">-</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {ride.driver ? (
                            <div className="text-sm font-medium text-gray-900">{ride.driver.name}</div>
                          ) : (
                            <div className="text-sm text-gray-500">Unassigned</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            ride.status === 'completed' ? 'bg-green-100 text-green-800' :
                            ride.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            ride.status === 'accepted' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          ${ride.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            className="text-ridex-teal hover:text-ridex-teal/80 mr-4"
                            onClick={() => {/* View ride details */}}
                          >
                            View
                          </button>
                          {(ride.status === 'pending' || ride.status === 'accepted') && (
                            <button 
                              className="text-red-600 hover:text-red-900"
                              onClick={() => handleCancelRide(ride.id)}
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredRides.length === 0 && (
                  <div className="p-6 text-center text-gray-500">
                    No rides found matching your criteria.
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Showing {filteredRides.length} of {rides.length} rides
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm" disabled>Next</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StaffDashboard;
