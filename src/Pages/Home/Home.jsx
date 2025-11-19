import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Brands from './Brands';
import Reviews from './Reviews';

const reviewsPromise = fetch('/reviews.json').then(res=>res.json());


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Banner2></Banner2>
            <Banner3></Banner3>
            <Brands></Brands>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;