
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User, UserRole } from '@/lib/types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Mock authentication functions - in a real app, these would connect to a backend
  const login = async (email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Mock successful login
    setUser({
      id: `user-${Math.random().toString(36).substring(2, 9)}`,
      name: email.split('@')[0],
      email,
      role,
    });

    // Store in localStorage for persistence
    localStorage.setItem('ridex-user', JSON.stringify({
      id: `user-${Math.random().toString(36).substring(2, 9)}`,
      name: email.split('@')[0],
      email,
      role,
    }));
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Mock successful registration and login
    setUser({
      id: `user-${Math.random().toString(36).substring(2, 9)}`,
      name,
      email,
      role,
    });

    // Store in localStorage for persistence
    localStorage.setItem('ridex-user', JSON.stringify({
      id: `user-${Math.random().toString(36).substring(2, 9)}`,
      name,
      email,
      role,
    }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ridex-user');
  };

  // Check for user in localStorage on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('ridex-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
