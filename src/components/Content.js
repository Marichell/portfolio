// Content.js
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    { id: "01", title: "Redex Library", path: "/redexLibrary" },
    // ... más proyectos
];
const Content = () => (
    <content>
        <div className='contentPortfolio'>
            <div className='tlSection'>
                <p>Table <span className='of'>of</span> <span className='content'>Content</span></p>
            </div>
            <div className='tbContent'>
                <div className='column'>
                    {projects.map(project => (
                        <div key={project.id} className='project'>
                        <Link to={project.path}>{project.id} . <span>{project.title}</span></Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    {/* Otros elementos del encabezado */}
    </content>
);

export default Content;