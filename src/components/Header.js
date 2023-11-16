// Header.js
import React from 'react';
import headerImage from '../img/portfolio-home.png';
import icon1Image from '../img/icon1.png';
import icon2Image from '../img/icon2.png';
import icon3Image from '../img/icon3.png';
import icon4Image from '../img/icon4.png';
import icon5Image from '../img/icon5.png';

const Header = () => (
    <div className='homePortfolio'>
        <div className='welcome'>
            <img src={headerImage} alt="Portfolio Marichell" />
        </div>
        <div className='shape icon1'>
            <img src={icon1Image} alt="Portfolio Marichell" />
        </div>
        <div className='shape icon2'>
            <img src={icon2Image} alt="Portfolio Marichell" />
        </div>
        <div className='shape icon3'>
            <img src={icon3Image} alt="Portfolio Marichell" />
        </div>
        <div className='shape icon4'>
            <img src={icon4Image} alt="Portfolio Marichell" />
        </div>
        <div className='shape icon5'>
            <img src={icon5Image} alt="Portfolio Marichell" />
        </div>
    </div>
);

export default Header;