import React from 'react';
import Header from '../../components/Header/Header';
import SearchInputForm from '../../components/SearchInputForm/SearchInputForm';
import './BooksPage.css';
import ProductListingAll from '../../components/ProductListing/ProductListingAll';


const BooksPage = () => {
  return (
    <section>
      <Header Theme={true} />
      <div className="BooksPage-search-container">
        <h2>Browse our wide selection of books</h2>
        <SearchInputForm Theme={true} />
      </div>
      <ProductListingAll />
    </section>
    
  )
}

export default BooksPage
