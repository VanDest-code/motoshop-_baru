'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Skull, 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut, 
  ChevronDown,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Percent,
  Clock
} from 'lucide-react';

// Admin navigation items
const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard, current: true },
  { name: 'Products', href: '/admin/products', icon: Package, current: false },
  { name: 'Transactions', href: '/admin/transactions', icon: ShoppingCart, current: false },
  { name: 'Customers', href: '/admin/customers', icon: Users, current: false },
  { name: 'Settings', href: '/admin/settings', icon: Settings, current: false },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Dummy stats data
  const stats = [
    { name: 'Total Sales', value: '$12,645.00', change: '+12.5%', trend: 'up' },
    { name: 'Active Orders', value: '35', change: '+3.2%', trend: 'up' },
    { name: 'Products', value: '126', change: '+8.1%', trend: 'up' },
    { name: 'Customers', value: '582', change: '-2.3%', trend: 'down' },
  ];
  
  // Dummy recent orders
  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doom', date: '2023-05-15', status: 'Completed', total: '$129.99' },
    { id: 'ORD-002', customer: 'Sarah Nightshade', date: '2023-05-14', status: 'Processing', total: '$79.50' },
    { id: 'ORD-003', customer: 'Michael Raven', date: '2023-05-13', status: 'Shipped', total: '$215.75' },
    { id: 'ORD-004', customer: 'Emily Darkheart', date: '2023-05-12', status: 'Completed', total: '$54.99' },
    { id: 'ORD-005', customer: 'Robert Grimm', date: '2023-05-11', status: 'Cancelled', total: '$149.99' },
  ];
  
  // Dummy top selling products
  const topProducts = [
    { id: '1', name: 'Nightmare Engine Oil', sold: 45, revenue: '$1,124.55' },
    { id: '2', name: 'Blood Red Brake Pads', sold: 38, revenue: '$1,367.62' },
    { id: '3', name: 'Phantom Suspension Kit', sold: 27, revenue: '$4,049.73' },
    { id: '4', name: 'Demonic Chain Set', sold: 24, revenue: '$1,919.76' },
    { id: '5', name: 'Cursed Spark Plugs', sold: 20, revenue: '$919.80' },
  ];
  
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className={`bg-gray-900 border-r border-gray-800 fixed inset-y-0 left-0 z-50 w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-gray-800 px-4">
            <Link href="/admin/dashboard" className="flex items-center">
              <Skull className="h-8 w-8 text-red-700 mr-2" />
              <span className="text-xl font-horror-title text-red-700">DarkMoto</span>
            </Link>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon className={`mr-3 h-6 w-6 ${item.current ? 'text-red-600' : 'text-gray-400 group-hover:text-red-600'}`} />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* User Profile */}
          <div className="border-t border-gray-800 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-red-900 flex items-center justify-center">
                  <span className="text-white font-bold">AD</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Admin User</p>
                <Link href="/" className="text-xs font-medium text-gray-400 hover:text-red-600 group flex items-center">
                  <LogOut className="mr-1 h-4 w-4 text-gray-400 group-hover:text-red-600" />
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Top navbar */}
        <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
          <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              {sidebarOpen ? (
                <ChevronDown className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <ChevronDown className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
            
            <div className="flex-1 flex justify-center md:justify-start">
              <h1 className="text-xl font-bold text-white md:hidden">Dashboard</h1>
            </div>
            
            {/* Header right */}
            <div className="flex items-center space-x-4">
              <Link href="/home" className="text-sm text-gray-400 hover:text-red-600 flex items-center">
                View Store
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-black">
          <div className="py-6">
            <div className="px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-horror-title text-red-600 mb-1">Dashboard</h1>
              <p className="text-sm text-gray-400">Overview of your store's performance</p>
            </div>
            
            <div className="mt-6 px-4 sm:px-6 lg:px-8">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.name} className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-400">{stat.name}</h3>
                      {stat.trend === 'up' ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="mt-2 flex items-baseline">
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className={`ml-2 text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Performance cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-lg font-medium text-white">Monthly Revenue</h3>
                  </div>
                  <div className="h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Revenue chart placeholder</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-white">$24,589.00</p>
                      <p className="text-sm text-green-500">+18.2% from last month</p>
                    </div>
                    <Link href="#" className="text-sm text-red-600 hover:text-red-500">View Report</Link>
                  </div>
                </div>
                
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Percent className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-lg font-medium text-white">Conversion Rate</h3>
                  </div>
                  <div className="h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Conversion chart placeholder</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-white">3.8%</p>
                      <p className="text-sm text-red-500">-0.5% from last month</p>
                    </div>
                    <Link href="#" className="text-sm text-red-600 hover:text-red-500">View Report</Link>
                  </div>
                </div>
                
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-lg font-medium text-white">Avg. Fulfillment Time</h3>
                  </div>
                  <div className="h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Fulfillment chart placeholder</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-white">1.2 days</p>
                      <p className="text-sm text-green-500">-0.3 days from last month</p>
                    </div>
                    <Link href="#" className="text-sm text-red-600 hover:text-red-500">View Report</Link>
                  </div>
                </div>
              </div>
              
              {/* Recent orders & top products */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent orders */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-white">Recent Orders</h3>
                    <Link href="/admin/transactions" className="text-sm text-red-600 hover:text-red-500">
                      View All
                    </Link>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-800">
                      <thead className="bg-gray-800">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Customer
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-900 divide-y divide-gray-800">
                        {recentOrders.map((order) => (
                          <tr key={order.id} className="hover:bg-gray-800 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">
                              {order.id}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                              {order.customer}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                              {order.date}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                order.status === 'Completed' ? 'bg-green-900/30 text-green-400' :
                                order.status === 'Processing' ? 'bg-blue-900/30 text-blue-400' :
                                order.status === 'Shipped' ? 'bg-purple-900/30 text-purple-400' :
                                'bg-red-900/30 text-red-400'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                              {order.total}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Top products */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-white">Top Selling Products</h3>
                    <Link href="/admin/products" className="text-sm text-red-600 hover:text-red-500">
                      View All
                    </Link>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-800">
                      <thead className="bg-gray-800">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Product
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Units Sold
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Revenue
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-900 divide-y divide-gray-800">
                        {topProducts.map((product) => (
                          <tr key={product.id} className="hover:bg-gray-800 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">
                              {product.name}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                              {product.sold}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                              {product.revenue}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}