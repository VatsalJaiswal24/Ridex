
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Car, FileText, Shield, Upload } from 'lucide-react';

const BecomeDriver = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Documents
    aadharNumber: '',
    panNumber: '',
    drivingLicenseNumber: '',
    drivingLicenseExpiry: '',
    
    // Vehicle Details
    vehicleType: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleNumber: '',
    vehicleColor: '',
    seatingCapacity: '',
    
    // Additional Info
    experience: '',
    availability: '',
    aboutYou: '',
    
    // Agreements
    termsAccepted: false,
    backgroundCheckConsent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      const requiredFields = [
        'fullName', 'email', 'phone', 'dateOfBirth', 'address', 'city', 'state', 'pincode',
        'aadharNumber', 'panNumber', 'drivingLicenseNumber', 'drivingLicenseExpiry',
        'vehicleType', 'vehicleMake', 'vehicleModel', 'vehicleYear', 'vehicleNumber'
      ];

      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

      if (missingFields.length > 0) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      if (!formData.termsAccepted || !formData.backgroundCheckConsent) {
        toast({
          title: "Agreement Required",
          description: "Please accept the terms and conditions and consent to background check.",
          variant: "destructive",
        });
        return;
      }

      // Here we would normally save to Supabase
      console.log('Driver application submitted:', formData);
      
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you within 2-3 business days.",
      });

      // Reset form
      setFormData({
        fullName: '', email: '', phone: '', dateOfBirth: '', address: '', city: '', state: '', pincode: '',
        aadharNumber: '', panNumber: '', drivingLicenseNumber: '', drivingLicenseExpiry: '',
        vehicleType: '', vehicleMake: '', vehicleModel: '', vehicleYear: '', vehicleNumber: '', vehicleColor: '', seatingCapacity: '',
        experience: '', availability: '', aboutYou: '',
        termsAccepted: false, backgroundCheckConsent: false
      });

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-ridex-lightGray">
        {/* Hero Section */}
        <div className="bg-ridex-navy text-white py-16">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a RideX Driver</h1>
              <p className="text-xl mb-8">Join thousands of drivers earning extra income while helping others reach their destinations</p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <Car className="w-12 h-12 mx-auto mb-4 text-ridex-teal" />
                  <h3 className="font-semibold mb-2">Flexible Schedule</h3>
                  <p className="text-gray-300">Drive when you want, as much as you want</p>
                </div>
                <div className="text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-ridex-teal" />
                  <h3 className="font-semibold mb-2">Extra Income</h3>
                  <p className="text-gray-300">Earn money from trips you're already taking</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-ridex-teal" />
                  <h3 className="font-semibold mb-2">Safe & Secure</h3>
                  <p className="text-gray-300">Verified riders and 24/7 support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="py-16">
          <div className="ridex-container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-ridex-navy mb-6">Driver Application Form</h2>
                <p className="text-gray-600 mb-8">Please fill out all sections to complete your driver application.</p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-ridex-navy mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="As per Aadhar Card"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="10-digit mobile number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Complete address"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={(e) => handleInputChange('pincode', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Document Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-ridex-navy mb-4">Document Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="aadharNumber">Aadhar Card Number *</Label>
                        <Input
                          id="aadharNumber"
                          value={formData.aadharNumber}
                          onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
                          placeholder="12-digit Aadhar number"
                          maxLength={12}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="panNumber">PAN Card Number *</Label>
                        <Input
                          id="panNumber"
                          value={formData.panNumber}
                          onChange={(e) => handleInputChange('panNumber', e.target.value)}
                          placeholder="10-character PAN number"
                          maxLength={10}
                          style={{ textTransform: 'uppercase' }}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="drivingLicenseNumber">Driving License Number *</Label>
                        <Input
                          id="drivingLicenseNumber"
                          value={formData.drivingLicenseNumber}
                          onChange={(e) => handleInputChange('drivingLicenseNumber', e.target.value)}
                          placeholder="DL number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="drivingLicenseExpiry">License Expiry Date *</Label>
                        <Input
                          id="drivingLicenseExpiry"
                          type="date"
                          value={formData.drivingLicenseExpiry}
                          onChange={(e) => handleInputChange('drivingLicenseExpiry', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Upload className="w-5 h-5 text-yellow-600" />
                        <p className="font-medium text-yellow-800">Document Upload Required</p>
                      </div>
                      <p className="text-sm text-yellow-700">
                        After Supabase integration, you'll be able to upload clear photos of your Aadhar Card, PAN Card, and Driving License.
                      </p>
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-ridex-navy mb-4">Vehicle Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="vehicleType">Vehicle Type *</Label>
                        <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange('vehicleType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hatchback">Hatchback</SelectItem>
                            <SelectItem value="sedan">Sedan</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="mpv">MPV</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="vehicleMake">Vehicle Make *</Label>
                        <Input
                          id="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={(e) => handleInputChange('vehicleMake', e.target.value)}
                          placeholder="e.g., Maruti, Honda, Hyundai"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleModel">Vehicle Model *</Label>
                        <Input
                          id="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                          placeholder="e.g., Swift, City, Creta"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleYear">Manufacturing Year *</Label>
                        <Input
                          id="vehicleYear"
                          type="number"
                          value={formData.vehicleYear}
                          onChange={(e) => handleInputChange('vehicleYear', e.target.value)}
                          placeholder="e.g., 2020"
                          min="2010"
                          max={new Date().getFullYear()}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleNumber">Vehicle Registration Number *</Label>
                        <Input
                          id="vehicleNumber"
                          value={formData.vehicleNumber}
                          onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
                          placeholder="e.g., MH12AB1234"
                          style={{ textTransform: 'uppercase' }}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleColor">Vehicle Color</Label>
                        <Input
                          id="vehicleColor"
                          value={formData.vehicleColor}
                          onChange={(e) => handleInputChange('vehicleColor', e.target.value)}
                          placeholder="e.g., White, Silver"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Label htmlFor="seatingCapacity">Seating Capacity (excluding driver)</Label>
                      <Select value={formData.seatingCapacity} onValueChange={(value) => handleInputChange('seatingCapacity', value)}>
                        <SelectTrigger className="w-full md:w-48">
                          <SelectValue placeholder="Select capacity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 passengers</SelectItem>
                          <SelectItem value="4">4 passengers</SelectItem>
                          <SelectItem value="6">6 passengers</SelectItem>
                          <SelectItem value="7">7 passengers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-ridex-navy mb-4">Additional Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="experience">Driving Experience</Label>
                        <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Years of driving experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">1-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="availability">Availability</Label>
                        <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="When can you drive?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekdays">Weekdays only</SelectItem>
                            <SelectItem value="weekends">Weekends only</SelectItem>
                            <SelectItem value="flexible">Flexible schedule</SelectItem>
                            <SelectItem value="full-time">Full-time (7 days)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="aboutYou">Tell us about yourself (optional)</Label>
                        <Textarea
                          id="aboutYou"
                          value={formData.aboutYou}
                          onChange={(e) => handleInputChange('aboutYou', e.target.value)}
                          placeholder="Why do you want to become a RideX driver? Any additional information..."
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="termsAccepted"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                      />
                      <Label htmlFor="termsAccepted" className="text-sm">
                        I agree to the{' '}
                        <Link to="/terms" className="text-ridex-teal hover:underline">
                          Terms and Conditions
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-ridex-teal hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="backgroundCheckConsent"
                        checked={formData.backgroundCheckConsent}
                        onCheckedChange={(checked) => handleInputChange('backgroundCheckConsent', checked)}
                      />
                      <Label htmlFor="backgroundCheckConsent" className="text-sm">
                        I consent to a background check and verification of my documents as part of the driver onboarding process
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full py-3 bg-ridex-teal hover:bg-ridex-teal/90 text-white font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Driver Application'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeDriver;
