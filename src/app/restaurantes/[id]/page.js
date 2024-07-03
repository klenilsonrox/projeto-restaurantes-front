// pages/restaurantes/[id].js
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { baseUrl } from '@/app/config/baseUrl';

const RestaurantDetails = ({params}) => {
    const { id } = params.id;
    const [products, setProducts] = useState([]);
    const [restaurant,setRestaurant] = useState([]);

    useEffect(() => {

        const fetchRestaurant = async () => {
            try {
                const res = await fetch(`${baseUrl}/restaurants/${params.id}`); // Assuming the API route is proxied by Next.js
                const data = await res.json();
                setRestaurant(data)
                setProducts(data.products)
            } catch (error) {
                console.error('Error fetching restaurant:', error);
            }
        };
        fetchRestaurant()
       
    }, []);



    if (!restaurant) {
        return <div>Carregando...</div>;
    }


    return (
        <div className='max-w-7xl mx-auto p-4'>
            <h1 className="text-3xl font-semibold py-10 flex items-center gap-4"> <img src={restaurant.urlImage} alt="" className='w-20 h-20 object-cover rounded-full'/> <span>{restaurant.name}</span> </h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products && products.map(product => (
                    <div key={product._id} className="rounded-lg overflow-hidden transition-all shadow-md hover:shadow-lg">
                        <img src={product.urlImage} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-600 text-truncate-2-line">{product.description}</p>
                            <p className="text-gray-800 font-bold">R$ {product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/" className='py-6 block'>Voltar para a lista de restaurantes</Link>
        </div>
    );
};

export default RestaurantDetails;
