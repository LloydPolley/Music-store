import React from 'react';
import LargeWidget from '../../components/widget/largeWidget/LargeWidget';

import './home.scss';


const Home = () => {
    return (
        <div className="homePageContainer">
            <div className="hero">
                <LargeWidget section={'Tracks'} /> 
                <LargeWidget section={'Mixes'} />
                <LargeWidget section={'Artists'} />
            </div>

        </div>
    )
}

export default Home;