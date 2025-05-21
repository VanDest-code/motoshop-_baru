import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ProductCard from '@/components/product/product-card';
import ProductDetail from '@/components/product/product-detail';

// Dummy products data
const allProducts = [
  {
    id: '1',
    name: 'Nightmare Engine Oil',
    price: 24.99,
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Engine',
    description: 'Premium synthetic engine oil infused with dark matter. Improves engine performance while extending its life. The nightmarish formula reduces friction and heat, giving your motorcycle that extra boost of power.',
    specifications: {
      type: 'Synthetic',
      viscosity: '10W-40',
      capacity: '1 Liter',
      suitable: 'All engine types',
    },
    stock: 15,
    featured: true,
  },
  {
    id: '2',
    name: 'Blood Red Brake Pads',
    price: 35.99,
    image: 'https://images.pexels.com/photos/12041461/pexels-photo-12041461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Brakes',
    description: 'High-performance brake pads with blood-red ceramic compound that provides superior stopping power. These pads are designed for riders who demand the best braking performance in all conditions.',
    specifications: {
      material: 'Ceramic compound',
      position: 'Front/Rear',
      noise: 'Low',
      durability: 'High',
    },
    stock: 23,
    featured: true,
  },
  {
    id: '3',
    name: 'Phantom Suspension Kit',
    price: 149.99,
    image: 'https://images.pexels.com/photos/14887340/pexels-photo-14887340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Suspension',
    description: 'Complete suspension upgrade kit that makes your ride feel like you\'re floating on air. The phantom technology absorbs bumps and maintains stability during aggressive cornering.',
    specifications: {
      type: 'Progressive',
      travel: '120mm',
      adjustable: 'Yes',
      weight: '1.8kg',
    },
    stock: 7,
    featured: true,
  },
];

// Similar products
const similarProducts = [
  {
    id: '4',
    name: 'Demonic Chain Set',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Drivetrain',
    featured: true,
  },
  {
    id: '5',
    name: 'Haunted Air Filter',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Engine',
    featured: false,
  },
  {
    id: '6',
    name: 'Ghost Rider Exhaust System',
    price: 239.99,
    image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Exhaust',
    featured: false,
  },
];

// Generate static params for all products
export function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // Find the product with the matching ID
  const product = allProducts.find(p => p.id === params.id);
  
  // If product not found, show error
  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-horror-title text-red-600 mb-4">Product Not Found</h1>
            <p className="text-gray-400 mb-6">Sorry, the product you're looking for doesn't exist or has been removed.</p>
            <a href="/shop" className="btn-primary">
              Return to Shop
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <div className="fog-container">
        <div className="fog"></div>
      </div>
      
      <Navbar />
      
      <main className="min-h-screen bg-background py-10">
        <ProductDetail product={product} similarProducts={similarProducts} />
      </main>
      
      <Footer />
    </>
  );
}