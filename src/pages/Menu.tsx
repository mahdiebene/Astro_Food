import React from 'react';
import { Plus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MenuPage = () => {
  const menuCategories = [
    {
      id: 'burgers',
      title: 'Signature Burgers',
      items: [
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
          image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 5,
          name: "BBQ Ranch Master",
          description: "Smoked beef, BBQ sauce, ranch dressing, crispy lettuce",
          price: "$16.99",
          image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 6,
          name: "Spicy Thunder",
          description: "Spiced beef, ghost pepper cheese, jalapeños, chipotle mayo",
          price: "$17.99",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    {
      id: 'sides',
      title: 'Sides & Snacks',
      items: [
        {
          id: 7,
          name: "Crispy Sweet Potato Fries",
          description: "Hand-cut sweet potatoes with sea salt and herbs",
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 8,
          name: "Loaded Cheese Fries",
          description: "Golden fries topped with melted cheese and bacon bits",
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 9,
          name: "Onion Rings",
          description: "Beer-battered onion rings with ranch dipping sauce",
          price: "$5.99",
          image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 10,
          name: "Buffalo Wings",
          description: "Spicy buffalo wings with celery sticks and blue cheese",
          price: "$9.99",
          image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    {
      id: 'beverages',
      title: 'Beverages',
      items: [
        {
          id: 11,
          name: "Fresh Lemonade",
          description: "House-made lemonade with fresh mint",
          price: "$3.99",
          image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 12,
          name: "Craft Cola",
          description: "Artisanal cola made with natural ingredients",
          price: "$4.99",
          image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 13,
          name: "Iced Coffee",
          description: "Cold brew coffee with your choice of milk",
          price: "$4.49",
          image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 14,
          name: "Milkshake",
          description: "Thick vanilla milkshake topped with whipped cream",
          price: "$5.99",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-astro-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-astro-brown to-astro-orange">
        <div className="container mx-auto px-4">
          <div className="text-center text-white animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2 text-astro-cream hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
              Full Menu
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover all our delicious offerings, crafted with love and locally-sourced ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {menuCategories.map((category, categoryIndex) => (
            <section key={category.id} className="mb-16">
              <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <h2 className="text-3xl md:text-4xl font-bold text-astro-brown mb-4 font-playfair">
                  {category.title}
                </h2>
                <div className="w-24 h-1 bg-astro-orange mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.items.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-astro-brown mb-2 font-playfair">
                        {item.name}
                      </h3>
                      <p className="text-astro-brown/70 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-astro-orange">
                          {item.price}
                        </span>
                        <button className="bg-astro-green text-white p-2 rounded-full hover:bg-astro-green/90 transition-colors duration-300 hover:scale-110">
                          <Plus size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="text-center mt-16">
            <Link to="/order" className="btn-secondary inline-block">
              Order Now
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
