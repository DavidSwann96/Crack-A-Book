import React from "react";
import Showcase from "../components/Showcase/Showcase";
import ProductListing from "../components/ProductListing/ProductListing";

const HomePage = () => {
    return (
        <section>
            <Showcase />
            <ProductListing />
        </section>
    );
}

export default HomePage;