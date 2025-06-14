
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-astro-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-in">
            <img
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Our restaurant and farm"
              className="rounded-lg shadow-xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-astro-brown mb-6 font-playfair">
              Our Story
            </h2>
            <p className="text-lg text-astro-brown/80 mb-6 leading-relaxed">
              Born in the heart of our beautiful town, AstroFood represents more than just great burgers. 
              We're a celebration of local farming, sustainable practices, and the time-honored tradition 
              of bringing people together over exceptional food.
            </p>
            <p className="text-lg text-astro-brown/80 mb-8 leading-relaxed">
              Our burgers are crafted from grass-fed beef sourced from local farms, paired with 
              farm-fresh vegetables and artisanal buns baked daily. Every bite tells the story 
              of our commitment to quality, community, and the perfect flame-grilled experience.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-astro-orange">5+</div>
                <div className="text-sm text-astro-brown/70">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-astro-orange">100%</div>
                <div className="text-sm text-astro-brown/70">Local Sourced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-astro-orange">50k+</div>
                <div className="text-sm text-astro-brown/70">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
