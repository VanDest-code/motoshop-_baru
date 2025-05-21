import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
};

export default function ProductCard({ id, name, price, image, category, featured = false }: ProductCardProps) {
  return (
    <div className={`card group relative ${featured ? 'border-red-900/50' : ''}`}>
      {featured && (
        <div className="absolute top-2 right-2 bg-red-900 text-white text-xs px-2 py-1 rounded z-10">
          Featured
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-4">
        <span className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded mb-2">
          {category}
        </span>
        <h3 className="text-lg font-horror-title text-white mb-2 line-clamp-1">{name}</h3>
        <p className="text-red-600 font-bold">${price.toFixed(2)}</p>
        
        <div className="mt-4 flex space-x-2">
          <Link 
            href={`/shop/${id}`}
            className="flex-1 text-center bg-gray-800 text-gray-100 py-1 px-3 text-sm rounded hover:bg-gray-700 transition-colors duration-200"
          >
            View Details
          </Link>
          <button 
            className="flex-1 bg-red-900 text-white py-1 px-3 text-sm rounded hover:bg-red-800 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}