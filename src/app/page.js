import React from 'react';
import RestaurantList from './components/Restaurantes';






const page = () => {
  return (
    <div className='max-w-7xl mx-auto p-4'>
    <h1 className="text-3xl font-semibold mb-4">Restaurantes</h1>
   <RestaurantList / >
</div>
  );
};

export default page;