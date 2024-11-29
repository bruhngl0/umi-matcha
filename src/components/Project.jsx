import React, { useEffect, useState, useRef } from 'react';
import '../styles/project.scss';

const projects = [
  { id: 1, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: 'new-hero.webp', description1:'we live lit', description2: 'test description two' },
  { id: 2, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: 'newabout.webp', description1:'we live lit', description2: 'test description two' },
  { id: 3, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: 'newcont.webp', description1:'we live lit', description2: 'test description two', email: 'hello@unimatchashop.com' },

];

const Project = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = projectRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          if (index > 0 ) {
            projectRefs.current[index - 1].classList.add('fade-out'); 
          
          }


        } else {
          entry.target.classList.remove('show');
          if (index > 0) {
            projectRefs.current[index - 1].classList.remove('fade-out');
            
          }
        }
      });
    }, options);

    if (projectRefs.current) {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="projects-container" id="project">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className="project-card"
          style={{
            backgroundImage: `url(${project.image})`, // Set background image dynamically
            backgroundSize: 'contain', // Optional: ensures the image covers the entire card
            backgroundPosition: 'center', // Optional: keeps the background centered
          }}
        >  
          {project.id === 1 ? (
           
              <div className="overlay-one" >
                 <div className='box'>
                 <span></span>
                 <span></span>
                 <span></span>
          </div>
              </div>
          
          ) : null}
           

           {project.id === 3 ? (
            <a href={`mailto:${project.email}`} className="project-card-link">
              <div className="overlay" >
                 contact us
              </div>
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Project;