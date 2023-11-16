import React from 'react';
import './index.scss';
import './script.js';
import Header from './components/Header';
// import About from './components/About';
import Content from './components/Content';


const Portfolio = () => {
    return (
        <div className="portfolioML">
            <Header />
            {/* <About /> */}
            <Content />
        </div>
    );
};

export default Portfolio;