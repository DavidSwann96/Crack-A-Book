import React from 'react';
import './ProductListingAll.css';
import ProductListingCard from '../cards/product-listing-card/ProductListingCard';

const ProductListingAll = () => {
  return (
    <section>
        <div className='container'>
            <div className="grid-container">
                <div className='grid-item'>
                    <ProductListingCard productId={0} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={1} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={2} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={3} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={4} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={5} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={6} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={7} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={8} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={9} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={10} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={11} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={12} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={13} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={14} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={15} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={16} />
                </div>
                <div className='grid-item'>
                    <ProductListingCard productId={17} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductListingAll
