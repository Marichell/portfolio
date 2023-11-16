import React from 'react';
import aboutImg from '../img/redex-about.png';

const AboutRL = () => (
    <about>
        <div className='aboutRedex'>
            <div className='header'>
                <div className='title'>
                    About<br></br>
                    The Redex Library
                </div>
                <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non lacinia fusce eu id. Fringilla sit sociis in suspendisse. Ultrices enim odio amet odio in duis fames.
                </div> 
            </div>
            <div className='card'>
                <div className='cardImg'>
                <img src={aboutImg} alt="Redex Library Marichell" />
                </div>
                <div className='cardContent'>
                    <div className='title'>
                        The Redex Library
                    </div>
                    <div className='info'>
                        <div className='detail'>
                            <span> 
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="#70707b" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
                                </svg>
                                Author
                            </span>
                            <br></br>
                            Redex Library
                        </div>
                        <div className='detail'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#70707b" viewBox="0 0 24 24">
                                <path d="M19 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20V4h11v16H8zm2-14h7v2H10V6zm0 4h7v2H10v-2zm0 4h5v2H10v-2z"/>
                            </svg>

                            Total
                        </span>
                        <br></br>
                        368 Books
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </about>
);

export default AboutRL;