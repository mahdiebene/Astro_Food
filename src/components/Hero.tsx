
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
          Where Farm Meets Flame
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
          Locally-sourced ingredients. Grilled to perfection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#menu" 
            className="btn-primary inline-block"
          >
            View Menu
          </a>
          <a 
            href="#order" 
            className="btn-secondary inline-block"
          >
            Order Now
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
