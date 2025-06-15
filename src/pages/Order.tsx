import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, ShoppingCart, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [orderType, setOrderType] = useState('pickup');

  const featuredItems = [
    {
      id: 1,
      name: "The Smoky Trail",
      description: "Double beef, house-smoked cheddar, BBQ glaze, crispy onions",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Farm Fresh Classic",
      description: "Grass-fed beef, organic lettuce, vine tomatoes, special sauce",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "The Green Ranger",
      description: "Plant-based patty, avocado, sprouts, tahini dressing",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Bacon Blaze",
      description: "Angus beef, hickory bacon, pepper jack, jalapeño aioli",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-astro-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-astro-green to-astro-orange">
        <div className="container mx-auto px-4">
          <div className="text-center text-white animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
              Order Online
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Fresh food delivered to your door or ready for pickup at Kewaatkhali, Wapdar Mor
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Order Options & Menu */}
            <div className="lg:col-span-2">
              
              {/* Order Type Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
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
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Location Info */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
                <h3 className="text-xl font-bold text-astro-brown mb-4 font-playfair">Our Location</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="text-astro-orange mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-astro-brown">Kewaatkhali, Wapdar Mor</p>
                    <p className="text-gray-600 text-sm">Find us at the heart of the community</p>
                  </div>
                </div>
              </div>

              {/* Featured Items */}
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-astro-brown mb-6 font-playfair">Featured Items</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredItems.map((item, index) => (
                    <div 
                      key={item.id}
                      className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-bold text-astro-brown mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-astro-orange">${item.price}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-astro-green text-white px-4 py-2 rounded-lg hover:bg-astro-green/90 transition-colors duration-300 flex items-center gap-2"
                        >
                          <Plus size={16} />
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Link to="/menu" className="btn-primary">
                    View Full Menu
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Cart */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 animate-fade-in">
                <h2 className="text-2xl font-bold text-astro-brown mb-6 font-playfair flex items-center gap-2">
                  <ShoppingCart size={24} />
                  Your Order ({getTotalItems()})
                </h2>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart size={48} className="text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                    <p className="text-sm text-gray-400">Add some delicious items to get started!</p>
                  </div>
                ) : (
                  <>
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
                            <p className="text-astro-orange font-bold">${item.price}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 bg-astro-green text-white rounded-full flex items-center justify-center hover:bg-astro-green/90 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-astro-brown">Total:</span>
                        <span className="text-2xl font-bold text-astro-orange">${getTotalPrice()}</span>
                      </div>
                      
                      <Link to="/checkout" className="w-full bg-astro-brown text-white py-3 rounded-lg font-semibold hover:bg-astro-brown/90 transition-colors duration-300 block text-center">
                        Proceed to Checkout
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderPage;
