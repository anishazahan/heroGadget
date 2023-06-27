import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './Cards/ProductCard'
import { addToDb } from '../utils/fakeDb'


const Shop = () => {

    const productData = useLoaderData()
    
    const handleAddToCart = id=>{
        console.log(id);
        addToDb(id)
        
    }
    return (
        <div className='my-container'>
          <div className='product-container'>
            {productData.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      )
}

export default Shop