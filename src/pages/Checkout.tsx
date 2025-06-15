import React, { useState } from 'react';
import { ArrowLeft, CreditCard, MapPin, Clock, User, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CheckoutPage = () => {
  const { cart, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { toast } = useToast();
  const [orderType, setOrderType] = useState('pickup');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    specialInstructions: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const subtotal = getTotalPrice();
  const deliveryFee = orderType === 'delivery' ? 3.99 : 0;
  const tax = (subtotal + deliveryFee) * 0.08;
  const total = subtotal + deliveryFee + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      address: ''
    };

    // Required field validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    // Address required for delivery
    if (orderType === 'delivery' && !formData.address.trim()) {
      newErrors.address = 'Delivery address is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const sendOrderEmail = async () => {
    const orderDetails = {
      to_email: 'worksformahdi@gmail.com',
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      order_type: orderType,
      delivery_address: orderType === 'delivery' ? formData.address : 'N/A - Pickup',
      payment_method: paymentMethod,
      special_instructions: formData.specialInstructions || 'None',
      items: cart.map(item => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n'),
      subtotal: subtotal.toFixed(2),
      delivery_fee: deliveryFee.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      order_date: new Date().toLocaleString()
    };

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        orderDetails,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailSent = await sendOrderEmail();
      
      if (emailSent) {
        toast({
          title: "Order Placed Successfully!",
          description: "Your order has been sent to the restaurant. You'll receive a confirmation shortly.",
        });
        
        // Clear the cart
        clearCart();
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          specialInstructions: ''
        });
      } else {
        throw new Error('Failed to send order email');
      }
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-astro-cream">
        <Header />
        <section className="pt-24 pb-12 bg-gradient-to-r from-astro-orange to-astro-brown">
          <div className="container mx-auto px-4">
            <div className="text-center text-white animate-fade-in">
              <Link to="/order" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
                <ArrowLeft size={20} />
                Back to Order
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
                Your Cart is Empty
              </h1>
              <p className="text-xl max-w-2xl mx-auto mb-8">
                Add some delicious items to your cart before checking out
              </p>
              <Link to="/menu" className="btn-primary">
                Browse Menu
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-astro-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-astro-orange to-astro-brown">
        <div className="container mx-auto px-4">
          <div className="text-center text-white animate-fade-in">
            <Link to="/order" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} />
              Back to Order
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
              Checkout
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Complete your order and enjoy fresh food from Kewaatkhali, Wapdar Mor
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Order Details & Forms */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Order Type */}
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-astro-brown mb-6 font-playfair">Order Type</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      orderType === 'pickup'
                        ? 'border-astro-green bg-astro-green/10 text-astro-green'
                        : 'border-gray-200 hover:border-astro-green/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin size={24} />
                      <div className="text-left">
                        <h3 className="font-semibold">Pickup</h3>
                        <p className="text-sm text-gray-600">Ready in 15-20 mins</p>
                        <p className="text-sm text-astro-green font-semibold">FREE</p>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      orderType === 'delivery'
                        ? 'border-astro-green bg-astro-green/10 text-astro-green'
                        : 'border-gray-200 hover:border-astro-green/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Clock size={24} />
                      <div className="text-left">
                        <h3 className="font-semibold">Delivery</h3>
                        <p className="text-sm text-gray-600">30-45 mins</p>
                        <p className="text-sm text-astro-orange font-semibold">$3.99</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-astro-brown mb-6 font-playfair flex items-center gap-2">
                  <User size={24} />
                  Contact Information
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-astro-brown font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:outline-none ${
                          errors.name 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-astro-green'
                        }`}
                        required
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-astro-brown font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full p-3 border rounded-lg focus:outline-none ${
                          errors.phone 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-astro-green'
                        }`}
                        required
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-astro-brown font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-astro-green'
                      }`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label className="block text-astro-brown font-semibold mb-2">Delivery Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className={`w-full p-3 border rounded-lg focus:outline-none ${
                          errors.address 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-200 focus:border-astro-green'
                        }`}
                        placeholder="Enter your complete delivery address"
                        required
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                  )}

                  <div>
                    <label className="block text-astro-brown font-semibold mb-2">Special Instructions</label>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-astro-green focus:outline-none"
                      placeholder="Any special requests or dietary restrictions?"
                    />
                  </div>
                </form>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-astro-brown mb-6 font-playfair flex items-center gap-2">
                  <CreditCard size={24} />
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-astro-green transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-astro-green"
                    />
                    <CreditCard size={20} />
                    <span className="font-semibold">Credit/Debit Card</span>
                  </label>
                  
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-astro-green transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-astro-green"
                    />
                    <span className="text-2xl">💵</span>
                    <span className="font-semibold">Cash on {orderType === 'delivery' ? 'Delivery' : 'Pickup'}</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 animate-fade-in">
                <h2 className="text-2xl font-bold text-astro-brown mb-6 font-playfair">Order Summary</h2>

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-astro-brown text-sm">{item.name}</h4>
                        <p className="text-astro-orange font-bold">
                          ${item.price} x {item.quantity}
                        </p>
                      </div>
                      <span className="font-bold text-astro-brown">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing Breakdown */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee:</span>
                      <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8%):</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-astro-brown">Total:</span>
                      <span className="text-2xl font-bold text-astro-orange">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg mt-6 transition-colors duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-astro-green text-white hover:bg-astro-green/90'
                  }`}
                >
                  {isSubmitting ? 'Processing Order...' : `Place Order - $${total.toFixed(2)}`}
                </button>

                {/* Restaurant Info */}
                <div className="mt-6 p-4 bg-astro-cream/50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-astro-orange mt-1" size={16} />
                    <div>
                      <p className="font-semibold text-astro-brown text-sm">AstroFood</p>
                      <p className="text-xs text-gray-600">Kewaatkhali, Wapdar Mor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
