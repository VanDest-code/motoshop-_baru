'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff, Skull, ArrowLeft } from 'lucide-react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // In a real app, this would connect to your backend
    alert('This is just a demo UI. Registration functionality is not implemented.');
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
          <p className="mt-2 text-sm text-gray-300 font-horror-body">JOIN THE DARKNESS</p>
        </div>
        
        {/* Register Form */}
        <div className="card p-8 backdrop-blur-sm border-2 border-gray-800">
          <h2 className="text-xl font-horror-title mb-6 text-center text-red-600">Sign the Blood Pact</h2>
          
          {error && (
            <div className="mb-4 p-2 bg-red-900/50 border border-red-700 text-white text-sm rounded">
              {error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="input mt-1 block w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="input block w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                required
                className="input mt-1 block w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            
            <div>
              <button type="submit" className="btn-primary w-full">
                Register
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-500">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}