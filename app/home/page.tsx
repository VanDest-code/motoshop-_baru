import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ProductCard from '@/components/product/product-card';
import Link from 'next/link';
import Image from 'next/image';
import { Skull, Wrench, Award, Truck } from 'lucide-react';

// Dummy featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Nightmare Engine Oil',
    price: 24.99,
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Engine',
    featured: true,
  },
  {
    id: '2',
    name: 'Blood Red Brake Pads',
    price: 35.99,
    image: 'https://images.pexels.com/photos/12041461/pexels-photo-12041461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Brakes',
    featured: true,
  },
  {
    id: '3',
    name: 'Phantom Suspension Kit',
    price: 149.99,
    image: 'https://images.pexels.com/photos/14887340/pexels-photo-14887340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Suspension',
    featured: true,
  },
  {
    id: '4',
    name: 'Demonic Chain Set',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Drivetrain',
    featured: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Fog effect */}
      <div className="fog-container">
        <div className="fog"></div>
      </div>
      
      <Navbar />
      
      <main>
        {/* Hero Banner */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dark motorcycle"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-horror-title text-red-600 text-glow mb-4">
              RIDE INTO THE DARKNESS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-horror-body">
              Premium motorcycle parts with a horrifying twist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" className="btn-primary text-lg py-3 px-8">
                Shop Now
              </Link>
              <Link href="/about" className="btn-ghost text-lg py-3 px-8">
                Our Story
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-black/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 border border-red-900/30 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <Wrench className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-horror-title text-white mb-2">Quality Parts</h3>
                <p className="text-gray-400">
                  Our parts are forged in the depths of darkness to ensure maximum performance and durability.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border border-red-900/30 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-horror-title text-white mb-2">Lifetime Warranty</h3>
                <p className="text-gray-400">
                  Our parts are guaranteed to last beyond the grave with our eternal warranty policy.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border border-red-900/30 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <Truck className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-horror-title text-white mb-2">Fast Shipping</h3>
                <p className="text-gray-400">
                  Our ghostly delivery network ensures your parts arrive with supernatural speed.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-16 bg-gradient-to-b from-black/80 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-horror-title text-red-600 text-glow">
                Featured Products
              </h2>
              <p className="mt-4 text-gray-400">
                Explore our most spine-chilling motorcycle parts
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/shop" className="btn-primary">
                View All Products
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-black/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-horror-title text-red-600 text-glow">
                Customer Testimonials
              </h2>
              <p className="mt-4 text-gray-400">
                Hear from the haunted souls who survived using our parts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/70 p-6 rounded-lg border border-gray-800 hover:border-red-900/50 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-900 flex items-center justify-center">
                    <span className="text-white font-bold">JS</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-200 font-medium">Jack Slasher</h4>
                    <p className="text-gray-500 text-sm">Harley Rider</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The blood red brake pads not only look terrifying but stop on a dime. My nighttime rides have never been more thrilling."
                </p>
              </div>
              
              <div className="bg-gray-900/70 p-6 rounded-lg border border-gray-800 hover:border-red-900/50 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-900 flex items-center justify-center">
                    <span className="text-white font-bold">VM</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-200 font-medium">Valerie Morgue</h4>
                    <p className="text-gray-500 text-sm">Sport Bike Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The phantom suspension kit transformed my bike. It now glides through corners like a ghost through walls. Absolutely supernatural performance!"
                </p>
              </div>
              
              <div className="bg-gray-900/70 p-6 rounded-lg border border-gray-800 hover:border-red-900/50 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-red-900 flex items-center justify-center">
                    <span className="text-white font-bold">RB</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-200 font-medium">Raven Black</h4>
                    <p className="text-gray-500 text-sm">Chopper Owner</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "DarkMoto's chainset has been feeding on miles for over a year now without a single issue. The demonic engineering behind these parts is impressive."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-b from-background to-black/90">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Skull className="h-12 w-12 text-red-700 mx-auto mb-4 flicker" />
            <h2 className="text-3xl md:text-4xl font-horror-title text-red-600 text-glow mb-4">
              Join Our Coven
            </h2>
            <p className="text-gray-300 mb-8">
              Sign up for our newsletter to receive terrifying deals, horrifying discounts, and blood-curdling announcements.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="input flex-grow px-4 py-3"
                required
              />
              <button type="submit" className="btn-primary px-6 py-3">
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              We promise not to send too many emails from beyond the grave.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}