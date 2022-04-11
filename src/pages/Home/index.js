import React from "react";
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import {SliderData} from '../../components/Carousel/sliderdata';

const Home = () =>{
    return (
        <>
            <Navbar />
            <Carousel slides={SliderData}/>
        </>
    )
}

export default Home;