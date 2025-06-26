
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BecomeDriver from "./pages/BecomeDriver";
import RiderDashboard from "./pages/dashboard/RiderDashboard";
import DriverDashboard from "./pages/dashboard/DriverDashboard";
import StaffDashboard from "./pages/dashboard/StaffDashboard";
import BookRide from "./pages/BookRide";
import Payment from "./pages/Payment";
import About from "./pages/About";
import Help from "./pages/Help";
import Safety from "./pages/Safety";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Effect to handle mobile app specific setup
  useEffect(() => {
    // Set the status bar color for mobile devices (if applicable)
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    
    // Update app height on resize
    const handleResize = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/become-driver" element={<BecomeDriver />} />
              <Route path="/dashboard/rider" element={<RiderDashboard />} />
              <Route path="/dashboard/driver" element={<DriverDashboard />} />
              <Route path="/dashboard/staff" element={<StaffDashboard />} />
              <Route path="/book-ride" element={<BookRide />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
