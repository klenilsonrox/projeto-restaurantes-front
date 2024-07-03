'use client'


// components/RestaurantList.js
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { baseUrl } from '../config/baseUrl';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const res = await fetch(`${baseUrl}/restaurants`);
                const data = await res.json();
                setRestaurants(data);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };

        fetchRestaurants();
    }, []);

if(restaurants){
   console.log(restaurants)
}

    return (
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {restaurants.map(restaurant => (
                <Link key={restaurant._id} href={`/restaurantes/${restaurant._id}`}>
                    <p className="rounded-lg overflow-hidden shadow-md hover:shadow-lg flex p-4">
                        <div className="flex flex-col">
                        <img src={restaurant.urlImage} alt={restaurant.name} className="w-20 h-20 object-cover rounded-full" />
                        </div>
                        <div className="p-4 flex flex-col">
                            <h2 className="text-lg font-semibold">{restaurant.name}</h2>
                            <div className="flex gap-2 items-center">
                            <FaStar className="text-[#E7A74E]"/>
                            <span className="text-sm">4.5 km</span>
                            </div>
                        </div>
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default RestaurantList;
