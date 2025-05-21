import Image from 'next/image';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Skull, Award, Wrench, HeartHandshake, Clock } from 'lucide-react';

// Dummy store owners data
const owners = [
  {
    id: '1',
    name: 'Viktor Darkwood',
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    position: 'Founder & CEO',
    description: 'Viktor founded DarkMoto after 15 years as a motorcycle mechanic. His passion for both horror and motorcycles led him to create a unique brand that combines quality parts with a macabre aesthetic.',
  },
  {
    id: '2',
    name: 'Morgana Nightshade',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    position: 'Head of Product Design',
    description: 'With a background in industrial design and a love for gothic art, Morgana brings a unique creative vision to our product line. She ensures each part is not only functional but has that signature dark flair.',
  },
  {
    id: '3',
    name: 'Damien Graves',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    position: 'Technical Director',
    description: 'A motorcycle racing champion turned engineer, Damien oversees the technical aspects of all our products. His expertise ensures that our parts deliver peak performance while maintaining the dark aesthetic.',
  },
  {
    id: '4',
    name: 'Raven Blackwood',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    position: 'Marketing Director',
    description: 'With a background in alternative fashion and motorcycle culture, Raven leads our marketing efforts. She understands our unique customer base and knows how to spread the word about our haunting products.',
  },
];

export default function About() {
  return (
    <>
      <div className="fog-container">
        <div className="fog"></div>
      </div>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/7144976/pexels-photo-7144976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dark motorcycle workshop"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-horror-title text-red-600 text-glow mb-4">
              OUR DARK LEGACY
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-horror-body">
              The story behind the most haunting motorcycle parts store
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-black/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-horror-title text-red-600 text-glow mb-4">
                Our Haunting Tale
              </h2>
              <div className="w-24 h-1 bg-red-900 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-6">
                  DarkMoto was born from the shadows in 2015, when founder Viktor Darkwood combined his two passions: motorcycles and horror aesthetics. What started as a small workshop in an abandoned factory has grown into the leading provider of high-quality, gothic-inspired motorcycle parts.
                </p>
                <p className="text-gray-300 mb-6">
                  Our mission is to provide riders with parts that not only perform exceptionally but also express their darker side. We believe motorcycles should be as unique as their riders, and our parts help enthusiasts create truly one-of-a-kind machines that stand out from the crowd.
                </p>
                <p className="text-gray-300">
                  Today, DarkMoto ships to riders around the world, bringing a touch of darkness to every road. Our team of dedicated horror enthusiasts and motorcycle experts work tirelessly to create products that push the boundaries of design while maintaining the highest standards of quality and performance.
                </p>
              </div>
              
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="DarkMoto workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-gradient-to-b from-black/80 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-horror-title text-red-600 text-glow mb-4">
                Core Values
              </h2>
              <div className="w-24 h-1 bg-red-900 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 border border-red-900/30 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-horror-title text-white mb-2">Quality</h3>
                <p className="text-gray-400">
                  We never compromise on the quality of our parts. Each product is rigorously tested to ensure it meets our nightmarishly high standards.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border border-red-900/30 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <Wrench className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-horror-title text-white mb-2">Innovation</h3>
                <p className="text-gray-400">
                  We're always pushing the boundaries of design and functionality, creating parts that are both beautiful and technically advanced.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border border-red-900/30 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <HeartHandshake className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-horror-title text-white mb-2">Customer Focus</h3>
                <p className="text-gray-400">
                  Our customers are our lifeblood. We're dedicated to providing excellent service and products that exceed expectations.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border border-red-900/30 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300">
                <Clock className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-horror-title text-white mb-2">Reliability</h3>
                <p className="text-gray-400">
                  We believe in building parts that last. Our products are designed to withstand the test of time, much like the undead.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-horror-title text-red-600 text-glow mb-4">
                The Coven
              </h2>
              <div className="w-24 h-1 bg-red-900 mx-auto mb-4"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Meet the dark minds behind DarkMoto. Our team of motorcycle enthusiasts and horror aficionados work tirelessly to create the best parts for your ride.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {owners.map((owner) => (
                <div key={owner.id} className="bg-gray-900/70 border border-gray-800 rounded-lg overflow-hidden hover:border-red-900/50 transition-colors duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={owner.photo}
                      alt={owner.name}
                      fill
                      className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-xl font-horror-title text-red-600 mb-1">{owner.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{owner.position}</p>
                    <p className="text-gray-300 text-sm">{owner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-16 bg-black/70 border-y border-red-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-horror-title text-red-600 text-glow mb-2">8+</span>
                <p className="text-gray-300">Years of Experience</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-horror-title text-red-600 text-glow mb-2">500+</span>
                <p className="text-gray-300">Products Available</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-horror-title text-red-600 text-glow mb-2">10K+</span>
                <p className="text-gray-300">Satisfied Customers</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-horror-title text-red-600 text-glow mb-2">50+</span>
                <p className="text-gray-300">Countries Shipped To</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Skull className="h-12 w-12 text-red-700 mx-auto mb-4 flicker" />
            <h2 className="text-3xl md:text-4xl font-horror-title text-red-600 text-glow mb-4">
              Join The Darkness
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to transform your ride with our horrifyingly good parts? Explore our collection and unleash the beast within your motorcycle.
            </p>
            
            <a href="/shop" className="btn-primary text-lg py-3 px-8">
              Shop Now
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}