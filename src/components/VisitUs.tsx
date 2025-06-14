
import React from 'react';
import { Clock, MapPin, Phone, Car } from 'lucide-react';

const VisitUs = () => {
  const hours = [
    { day: 'Monday - Thursday', time: '11:00 AM - 9:00 PM' },
    { day: 'Friday - Saturday', time: '11:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '12:00 PM - 8:00 PM' }
  ];

  return (
    <section id="visit" className="py-20 bg-astro-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-astro-brown mb-4 font-playfair">
            Visit Us
          </h2>
          <p className="text-lg text-astro-brown/70 max-w-2xl mx-auto">
            Find us off Highway 12. Plenty of parking — or ride your horse!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="animate-slide-in">
            <div className="bg-astro-brown/10 rounded-lg p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-astro-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-astro-brown mb-2">Interactive Map</h3>
                <p className="text-astro-brown/70">
                  123 Farm Road, Highway 12<br />
                  Countryside, ST 12345
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-astro-orange/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-astro-green/10 rounded-full"></div>
            </div>
          </div>

          {/* Info */}
          <div className="animate-fade-in space-y-8">
            {/* Hours */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-astro-orange mr-3" />
                <h3 className="text-xl font-bold text-astro-brown font-playfair">Hours of Operation</h3>
              </div>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-astro-brown/10 last:border-b-0">
                    <span className="font-medium text-astro-brown">{schedule.day}</span>
                    <span className="text-astro-brown/70">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-astro-orange mr-3" />
                <h3 className="text-xl font-bold text-astro-brown font-playfair">Contact</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-medium text-astro-brown mr-2">Phone:</span>
                  <span className="text-astro-brown/70">(555) 123-FOOD</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-astro-brown mr-2">Email:</span>
                  <span className="text-astro-brown/70">hello@astrofood.com</span>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Car className="w-6 h-6 text-astro-orange mr-3" />
                <h3 className="text-xl font-bold text-astro-brown font-playfair">Parking & Access</h3>
              </div>
              <p className="text-astro-brown/70">
                Free parking available with over 50 spaces. Wheelchair accessible entrance. 
                Drive-thru available for quick orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
