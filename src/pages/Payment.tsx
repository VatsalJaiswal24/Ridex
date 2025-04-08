
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Plus, Check, Trash2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { PaymentMethod } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const Payment = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Mock data for payment methods
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'credit_card',
      last4: '4242',
      expiry: '04/25',
      isDefault: true,
    },
    {
      id: '2',
      type: 'credit_card',
      last4: '1234',
      expiry: '12/26',
      isDefault: false,
    },
  ]);
  
  // State for the new payment form
  const [showNewPaymentForm, setShowNewPaymentForm] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  
  const handleSetDefaultMethod = (id: string) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id,
    })));
    
    toast({
      title: "Default payment updated",
      description: "Your default payment method has been updated successfully.",
    });
  };
  
  const handleDeleteMethod = (id: string) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    
    toast({
      title: "Payment method removed",
      description: "The payment method has been removed successfully.",
    });
  };
  
  const handleAddPaymentMethod = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      toast({
        title: "Missing information",
        description: "Please fill in all card details.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would call a secure payment processing API
    // This is just a mock implementation
    const newMethod: PaymentMethod = {
      id: `card-${Math.random().toString(36).substring(2, 9)}`,
      type: 'credit_card',
      last4: cardNumber.slice(-4),
      expiry: expiryDate,
      isDefault: paymentMethods.length === 0, // Make default if it's the first method
    };
    
    setPaymentMethods([...paymentMethods, newMethod]);
    setShowNewPaymentForm(false);
    
    // Reset form
    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
    
    toast({
      title: "Payment method added",
      description: "Your new payment method has been added successfully.",
    });
  };
  
  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Limit to 16 digits
    const truncated = digits.slice(0, 16);
    
    // Add spaces every 4 digits
    const formatted = truncated.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    return formatted;
  };
  
  const formatExpiryDate = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Limit to 4 digits
    const truncated = digits.slice(0, 4);
    
    // Add slash after first 2 digits
    if (truncated.length > 2) {
      return `${truncated.slice(0, 2)}/${truncated.slice(2)}`;
    }
    
    return truncated;
  };
  
  const formatCVV = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Limit to 3-4 digits
    return digits.slice(0, 4);
  };
  
  const getCardTypeIcon = (type: string, last4: string) => {
    // In a real app, you would determine the card type from the BIN (first 6 digits)
    // Here we're just using the last4 for demo purposes
    const digit = parseInt(last4[0]);
    
    if (digit >= 0 && digit <= 3) {
      return (
        <div className="h-8 w-12 bg-blue-800 rounded-md flex items-center justify-center text-white text-xs font-bold">
          VISA
        </div>
      );
    } else if (digit >= 4 && digit <= 6) {
      return (
        <div className="h-8 w-12 bg-red-700 rounded-md flex items-center justify-center text-white text-xs font-bold">
          MC
        </div>
      );
    } else {
      return (
        <div className="h-8 w-12 bg-gray-800 rounded-md flex items-center justify-center text-white text-xs font-bold">
          CARD
        </div>
      );
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-ridex-lightGray">
        <div className="ridex-container py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-ridex-navy">Payment Methods</h1>
            <Button 
              className="bg-ridex-teal hover:bg-ridex-teal/90"
              onClick={() => setShowNewPaymentForm(!showNewPaymentForm)}
            >
              {showNewPaymentForm ? 'Cancel' : 'Add Payment Method'}
            </Button>
          </div>
          
          {/* Payment Methods List */}
          {paymentMethods.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id} 
                  className={`bg-white rounded-lg shadow-md p-6 border-2 ${
                    method.isDefault ? 'border-ridex-teal' : 'border-transparent'
                  }`}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      {getCardTypeIcon(method.type, method.last4)}
                      <div className="ml-4">
                        <p className="font-medium">•••• •••• •••• {method.last4}</p>
                        <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                      </div>
                    </div>
                    
                    {method.isDefault && (
                      <span className="bg-ridex-teal/10 text-ridex-teal px-2 py-1 rounded-md text-xs font-medium flex items-center">
                        <Check className="mr-1 h-3 w-3" /> Default
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-end mt-4 space-x-2">
                    {!method.isDefault && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleSetDefaultMethod(method.id)}
                      >
                        Set as Default
                      </Button>
                    )}
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDeleteMethod(method.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : !showNewPaymentForm ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
              <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Payment Methods</h2>
              <p className="text-gray-500 mb-4">Add a payment method to book rides with RideX</p>
              <Button 
                className="bg-ridex-teal hover:bg-ridex-teal/90"
                onClick={() => setShowNewPaymentForm(true)}
              >
                <Plus className="mr-2 h-4 w-4" /> Add Payment Method
              </Button>
            </div>
          ) : null}
          
          {/* Add New Payment Form */}
          {showNewPaymentForm && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Add New Payment Method</h2>
              
              <form onSubmit={handleAddPaymentMethod} className="space-y-6">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                    maxLength={19} // 16 digits + 3 spaces
                  />
                </div>
                
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    placeholder="John Doe"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Date (MM/YY)
                    </label>
                    <input
                      id="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                      maxLength={5} // MM/YY
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV/CVC
                    </label>
                    <input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(formatCVV(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ridex-teal focus:border-ridex-teal"
                      maxLength={4}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-ridex-teal hover:bg-ridex-teal/90">
                    Save Payment Method
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>Your payment information is securely stored and processed by our payment provider. RideX does not store your full card details.</p>
              </div>
            </div>
          )}
          
          {/* Payment History */}
          <div>
            <h2 className="text-xl font-semibold text-ridex-navy mb-4">Payment History</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ride</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-04-05</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      123 Main St → 456 Oak Ave
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      •••• 4242
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $24.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-04-02</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      789 Elm St → 101 Pine Rd
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      •••• 4242
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $18.75
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-03-28</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      202 Maple Dr → 303 Birch Ln
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      •••• 1234
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $32.20
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payment;
