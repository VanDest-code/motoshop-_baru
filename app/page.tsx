'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff, Skull } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation - in a real app, this would connect to your backend
    if (username === 'admin123' && password === '12345') {
      window.location.href = '/admin/dashboard';
    } else if (username === 'user123' && password === '12345') {
      window.location.href = '/home';
    } else {
      setError('Invalid username or password');
    }
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
          <p className="mt-2 text-sm text-gray-300 font-horror-body">ENTER IF YOU DARE</p>
        </div>
        
        {/* Login Form */}
        <div className="card p-8 backdrop-blur-sm border-2 border-gray-800">
          <h2 className="text-xl font-horror-title mb-6 text-center text-red-600">Login to Your Nightmare</h2>
          
          {error && (
            <div className="mb-4 p-2 bg-red-900/50 border border-red-700 text-white text-sm rounded">
              {error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleLogin}>
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
            
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href="/register" className="text-red-600 hover:text-red-500">
                  Register New Account
                </Link>
              </div>
              <div className="text-sm">
                <Link href="/forgot-password" className="text-red-600 hover:text-red-500">
                  Forgot Password?
                </Link>
              </div>
            </div>
            
            <div>
              <button type="submit" className="btn-primary w-full">
                Sign In
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <Link href="/home" className="btn-ghost text-sm py-1 px-3">
              Continue as Guest
            </Link>
          </div>
        </div>
        
        <div className="text-xs text-center text-gray-500">
          <p>For demo, use:</p>
          <p>Admin: admin123 / 12345</p>
          <p>User: user123 / 12345</p>
        </div>
      </div>
    </div>
  );
}