
import React from 'react';
import { Plus } from 'lucide-react';

const Menu = () => {
  const burgers = [
    {
      id: 1,
      name: "The Smoky Trail",
      description: "Double beef, house-smoked cheddar, BBQ glaze, crispy onions",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Farm Fresh Classic",
      description: "Grass-fed beef, organic lettuce, vine tomatoes, special sauce",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "The Green Ranger",
      description: "Plant-based patty, avocado, sprouts, tahini dressing",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Bacon Blaze",
      description: "Angus beef, hickory bacon, pepper jack, jalapeño aioli",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-astro-brown mb-4 font-playfair">
            Signature Burgers
          </h2>
          <p className="text-lg text-astro-brown/70 max-w-2xl mx-auto">
            Each burger is a masterpiece, crafted with locally-sourced ingredients and grilled to perfection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {burgers.map((burger, index) => (
            <div 
              key={burger.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={burger.image}
                  alt={burger.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-astro-brown mb-2 font-playfair">
                  {burger.name}
                </h3>
                <p className="text-astro-brown/70 text-sm mb-4 leading-relaxed">
                  {burger.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-astro-orange">
                    {burger.price}
                  </span>
                  <button className="bg-astro-green text-white p-2 rounded-full hover:bg-astro-green/90 transition-colors duration-300 hover:scale-110">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#order" 
            className="btn-primary"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
