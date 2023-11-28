import React from 'react';
import './Showcase.css';
import SearchInputForm from '../SearchInputForm/SearchInputForm';
import Header from '../Header/Header';

const Showcase = () => {
  return (
    <section className="showcase-container">
      <Header Theme={false}/>
      <div className="showcase-content">
        <h1>Find quality books here</h1>
        <p>Best deals in all Navezgane</p>
        <SearchInputForm Theme={false} />
      </div>
    </section>
  )
}

export default Showcase
