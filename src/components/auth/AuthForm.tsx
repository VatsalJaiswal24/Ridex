
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const { toast } = useToast();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.RIDER);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (type === 'register') {
        if (password !== confirmPassword) {
          toast({
            title: "Passwords don't match",
            description: "Please make sure your passwords match.",
            variant: "destructive",
          });
          return;
        }
        
        await register(name, email, password, role);
        toast({
          title: "Account created!",
          description: "You have successfully registered.",
        });
      } else {
        await login(email, password, role);
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
      }
      
      // Redirect based on user role
      switch (role) {
        case UserRole.RIDER:
          navigate('/dashboard/rider');
          break;
        case UserRole.DRIVER:
          navigate('/dashboard/driver');
          break;
        case UserRole.STAFF:
          navigate('/dashboard/staff');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Unable to authenticate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === 'register' && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ridex-teal focus:border-ridex-teal"
            placeholder="Your name"
          />
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ridex-teal focus:border-ridex-teal"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ridex-teal focus:border-ridex-teal"
          placeholder="••••••••"
        />
      </div>
      
      {type === 'register' && (
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ridex-teal focus:border-ridex-teal"
            placeholder="••••••••"
          />
        </div>
      )}
      
      <div>
        <label htmlFor="role" className="block text-sm font-medium">
          I am a:
        </label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value as UserRole)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ridex-teal focus:border-ridex-teal"
        >
          <option value={UserRole.RIDER}>Rider</option>
          <option value={UserRole.DRIVER}>Driver</option>
          <option value={UserRole.STAFF}>Staff Member</option>
        </select>
      </div>
      
      <div>
        <Button
          type="submit"
          className="w-full py-2 px-4 bg-ridex-teal hover:bg-ridex-teal/90"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : type === 'login' ? 'Sign In' : 'Create Account'}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
