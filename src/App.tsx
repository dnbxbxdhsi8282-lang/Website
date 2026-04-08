import { motion } from "motion/react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  ChevronRight, 
  Utensils, 
  Coffee, 
  Heart,
  Menu as MenuIcon,
  X
} from "lucide-react";
import { useState } from "react";

const MENU_CATEGORIES = [
  {
    id: "banh-mi",
    name: "Bánh Mì",
    description: "Freshly baked baguettes with pickled daikon, carrots, jalapeños, cilantro, and house chili sauce.",
    items: [
      { name: "Grilled Pork", price: "$8.50", description: "Tender marinated pork grilled to perfection." },
      { name: "Lemongrass Chicken", price: "$8.50", description: "Fragrant chicken with a hint of citrus and spice." },
      { name: "Tofu", price: "$7.95", description: "Crispy tofu with savory seasonings. A vegetarian favorite." },
      { name: "Pastrami Fusion", price: "$9.50", description: "A unique blend of traditional bánh mì and classic pastrami." },
      { name: "Philly Cheesesteak", price: "$9.50", description: "Vietnamese twist on the East Coast classic." },
    ]
  },
  {
    id: "comfort",
    name: "Comfort Foods",
    description: "Hearty Vietnamese classics made with love.",
    items: [
      { name: "Pho Noodle Soup", price: "$12.95", description: "Aromatic beef broth with rice noodles and fresh herbs." },
      { name: "Vietnamese Beef Stew", price: "$13.50", description: "Slow-cooked beef with carrots and savory spices." },
      { name: "Spring Rolls (2pcs)", price: "$5.95", description: "Fresh rice paper rolls with shrimp, pork, and herbs." },
      { name: "Pot Stickers (6pcs)", price: "$6.50", description: "Pan-fried dumplings served with dipping sauce." },
    ]
  },
  {
    id: "drinks",
    name: "Drinks & Treats",
    description: "The perfect pairing for your meal.",
    items: [
      { name: "Vietnamese Iced Coffee", price: "$4.95", description: "Strong drip coffee with sweet condensed milk." },
      { name: "Bubble Tea", price: "$5.50", description: "Various flavors with chewy tapioca pearls." },
      { name: "Thai Iced Tea", price: "$4.50", description: "Sweet, creamy, and refreshing." },
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsPhoneVisible(false); // Reset phone visibility when toggling menu
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen selection:bg-brand-orange/30">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">
                Y
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-green">
                Yeh Yeh's
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-medium text-stone-600">
              <a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a>
              <a href="#about" className="hover:text-brand-orange transition-colors">Our Story</a>
              <a href="#location" className="hover:text-brand-orange transition-colors">Location</a>
              {isPhoneVisible ? (
                <a 
                  href="tel:4255550123" 
                  className="bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-brand-green/20 animate-in fade-in zoom-in duration-300"
                >
                  <Phone size={18} /> (425) 555-0123
                </a>
              ) : (
                <button 
                  onClick={() => setIsPhoneVisible(true)}
                  className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20"
                >
                  Order Now
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-stone-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-b border-stone-100"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Menu</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Our Story</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Location</a>
              {isPhoneVisible ? (
                <a 
                  href="tel:4255550123" 
                  className="w-full bg-brand-green text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 animate-in fade-in zoom-in duration-300"
                >
                  <Phone size={18} /> (425) 555-0123
                </a>
              ) : (
                <button 
                  onClick={() => setIsPhoneVisible(true)}
                  className="w-full bg-brand-orange text-white py-3 rounded-xl font-bold"
                >
                  Order Now
                </button>
              )}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/banhmi/1920/1080" 
            alt="Delicious Bánh Mì"
            className="w-full h-full object-cover brightness-[0.65]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-orange/20 backdrop-blur-md border border-brand-orange/30 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              Lynnwood's Best Bánh Mì
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-6">
              Authentic <br />
              <span className="text-brand-orange italic">Vietnamese</span> <br />
              Comfort.
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-lg leading-relaxed">
              Family-run and celebrated for our freshly baked baguettes and traditional street food flavors. 
              A hidden gem in the heart of Lynnwood.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#menu"
                className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-all flex items-center gap-2"
              >
                View Menu <ChevronRight size={20} />
              </a>
              <a 
                href="#location"
                className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Find Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
                <Utensils size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Fresh Ingredients</h3>
                <p className="text-stone-500 text-sm">Baked baguettes daily</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Family Run</h3>
                <p className="text-stone-500 text-sm">Authentic recipes</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-600">
                <Star size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Top Rated</h3>
                <p className="text-stone-500 text-sm">8.5/10 by The Infatuation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              From our signature sandwiches to hearty soups, every dish is prepared with 
              the perfect balance of sweet, savory, and spicy flavors.
            </p>
          </motion.div>

          <div className="space-y-20">
            {MENU_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={category.id}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-end gap-4 mb-8">
                  <h3 className="text-3xl font-bold text-brand-green">{category.name}</h3>
                  <p className="text-stone-500 pb-1 hidden sm:block">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="menu-item-card group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg group-hover:text-brand-orange transition-colors">{item.name}</h4>
                        <span className="font-bold text-brand-green">{item.price}</span>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden rotate-3 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/kitchen/800/800" 
                  alt="Our Kitchen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 aspect-square rounded-[40px] overflow-hidden -rotate-6 shadow-2xl border-8 border-white hidden md:block">
                <img 
                  src="https://picsum.photos/seed/family/600/600" 
                  alt="Family Tradition"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                A Family Tradition in Every Bite.
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Yeh Yeh’s Vietnamese Sandwiches is more than just a restaurant; it's a labor of love. 
                As a family-run establishment in Lynnwood, we've dedicated ourselves to bringing 
                the authentic flavors of Vietnamese street food to the Pacific Northwest.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Known as a "hidden gem," we pride ourselves on consistency, friendliness, and 
                the perfect baguette texture that keeps our regulars coming back. Whether it's 
                a quick lunch or a casual dinner, we treat every guest like family.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4 p-4 bg-brand-cream rounded-2xl border border-stone-100">
                  <div className="text-brand-orange">
                    <Star fill="currentColor" size={24} />
                  </div>
                  <p className="font-medium italic text-stone-700">
                    "Standout grilled pork and tofu sandwiches... crave-worthy bread texture."
                    <span className="block text-sm font-bold not-italic mt-1">— The Infatuation (8.5/10)</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold mb-8">Visit Us</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Location</h4>
                    <p className="text-stone-400">
                      Lynnwood, Washington<br />
                      (Located quietly at the back of the strip mall)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Hours</h4>
                    <div className="text-stone-400 grid grid-cols-2 gap-x-8 gap-y-1">
                      <span>Mon - Sat</span>
                      <span>10:00 AM - 8:00 PM</span>
                      <span>Sunday</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Contact</h4>
                    <p className="text-stone-400">Call for takeout orders</p>
                    <a href="tel:4255550123" className="text-2xl font-bold text-brand-orange hover:underline">
                      (425) 555-0123
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="h-[400px] rounded-[40px] overflow-hidden border-8 border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
            >
              {/* Placeholder for Map */}
              <div className="w-full h-full bg-stone-800 flex items-center justify-center relative">
                <img 
                  src="https://picsum.photos/seed/map/800/600?grayscale" 
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-orange p-4 rounded-full shadow-2xl animate-bounce">
                    <MapPin size={32} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 text-stone-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-serif text-sm font-bold">
              Y
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              Yeh Yeh's
            </span>
          </div>
          <p className="mb-8 max-w-md mx-auto">
            Authentic Vietnamese street food brought to everyday Northwest dining. 
            A benchmark for bánh mì in the greater Seattle area.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Yelp</a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Yeh Yeh's Vietnamese Sandwiches. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
