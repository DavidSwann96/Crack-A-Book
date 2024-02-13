import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetailPage from "./pages/bookdetailspage/BookDetailsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='App'>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/book-details/:id" element={<BookDetailPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;