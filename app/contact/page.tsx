'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <>
      <div className="fog-container">
        <div className="fog"></div>
      </div>
      
      <Navbar />
      
      <main className="min-h-screen bg-background py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-horror-title text-red-600 text-glow mb-2">
              Contact the Underworld
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions or need assistance? Our team of dark spirits is ready to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/70 border border-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-horror-title text-red-600 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-300 font-semibold mb-1">Address</h3>
                      <p className="text-gray-400">
                        666 Shadow Lane<br />
                        Nightmare City, NM 13666<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-300 font-semibold mb-1">Phone</h3>
                      <p className="text-gray-400">
                        (666) 123-4567
                      </p>
                      <p className="text-gray-500 text-sm">
                        Mon-Fri from 9am to 6pm
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-300 font-semibold mb-1">Email</h3>
                      <p className="text-gray-400">
                        haunted@darkmoto.com
                      </p>
                      <p className="text-gray-500 text-sm">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-300 font-semibold mb-1">Hours</h3>
                      <p className="text-gray-400">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 10am - 4pm<br />
                        Sunday: Closed (The Spirits Rest)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t border-gray-800 pt-6">
                  <h3 className="text-gray-300 font-semibold mb-3">Follow the Darkness</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/70 border border-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-horror-title text-red-600 mb-6">
                  Send Us a Message
                </h2>
                
                {submitted ? (
                  <div className="p-6 bg-red-900/20 border border-red-900 rounded-lg text-center">
                    <h3 className="text-xl font-horror-title text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-300 mb-4">
                      Thank you for contacting us. We've received your message and will respond soon.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-ghost"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input w-full"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input w-full"
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Order Status">Order Status</option>
                        <option value="Returns">Returns & Refunds</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="input w-full"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full flex items-center justify-center"
                      >
                        {submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12">
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-horror-title text-red-600 mb-6">
                Find Us If You Dare
              </h2>
              
              <div className="relative h-96 w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-122.0!3d37.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAn!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="mt-12">
            <div className="bg-gray-900/70 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-horror-title text-red-600 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg text-gray-300 font-semibold mb-2">
                    Do you ship internationally?
                  </h3>
                  <p className="text-gray-400">
                    Yes, our ghostly delivery network extends to most countries worldwide. International shipping typically takes 7-14 business days.
                  </p>
                </div>
                
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg text-gray-300 font-semibold mb-2">
                    What is your return policy?
                  </h3>
                  <p className="text-gray-400">
                    We offer a 30-day return policy for most items. Products must be unused and in original packaging. Custom orders cannot be returned unless defective.
                  </p>
                </div>
                
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg text-gray-300 font-semibold mb-2">
                    Do you offer installation services?
                  </h3>
                  <p className="text-gray-400">
                    While we don't offer direct installation, we have a network of trusted shops nationwide that can install our parts. Contact us for a recommendation near you.
                  </p>
                </div>
                
                <div className="border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg text-gray-300 font-semibold mb-2">
                    How can I check my order status?
                  </h3>
                  <p className="text-gray-400">
                    Once your order ships, you'll receive a tracking number via email. You can also log into your account on our website to check your order status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}