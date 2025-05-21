'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Skull, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to your backend
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-main p-4">
      {/* Fog effect */}
      <div className="fog-container">
        <div className="fog"></div>
      </div>
      
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="flex items-center justify-center">
            <Skull className="h-12 w-12 text-red-700 mr-2 flicker" />
            <h1 className="text-4xl font-horror-title text-red-700 text-glow">DarkMoto</h1>
          </div>
          <p className="mt-2 text-sm text-gray-300 font-horror-body">RECLAIM YOUR SOUL</p>
        </div>
        
        {/* Forgot Password Form */}
        <div className="card p-8 backdrop-blur-sm border-2 border-gray-800">
          <h2 className="text-xl font-horror-title mb-6 text-center text-red-600">Forgot Password</h2>
          
          {success ? (
            <div className="text-center space-y-4">
              <div className="p-3 bg-green-900/50 border border-green-800 text-green-100 rounded">
                Password reset link sent to your email.
              </div>
              <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-500">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Login
              </Link>
            </div>
          ) : (
            <>
              <p className="mb-4 text-sm text-gray-400">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input mt-1 block w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div>
                  <button type="submit" className="btn-primary w-full">
                    Send Reset Link
                  </button>
                </div>
              </form>
              
              <div className="mt-4 text-center">
                <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-500">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}