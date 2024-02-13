import React from "react";
import Showcase from "../../components/Showcase/Showcase";
import ProductListing from "../../components/ProductListing/ProductListing";
import Header from "../../components/Header/Header";

const HomePage = () => {
    return (
        <section>
            {/* Header in showcase */}
            <Showcase />
            <ProductListing />
        </section>
    );
}

export default HomePage;