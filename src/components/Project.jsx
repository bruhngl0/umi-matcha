import React, { useEffect, useState, useRef } from "react";
import "../styles/project.scss";

const projects = [
  {
    id: 1,
    title: "UNNECESSARY",
    description:
      "Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to",
    name: "e-comm",
    mobileBgImage: "greenhero.webp",
    desktopBgImage: "lol.webp", // Add desktop background image
    description1: "we live lit",
    description2: "test description two",
  },
  {
    id: 2,
    title: "UNNECESSARY",
    description:
      "Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to",
    name: "e-comm",
    mobileBgImage: "green-about.webp",
    desktopBgImage: "pcfinalaboutgreen.webp", // Add desktop background image
    description1: "we live lit",
    description2: "test description two",
  },
  {
    id: 3,
    title: "UNNECESSARY",
    description:
      "Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to",
    name: "e-comm",
    mobileBgImage: "twopaji.png",
    desktopBgImage: "pcpapa.png", // Add desktop background image
    description1: "we live lit",
    description2: "test description two",
    email: "hello@unimatchashop.com",
  },
];

const Project = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const projectRefs = useRef([]);

  // Handle responsive image switching
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Intersection Observer effect (unchanged from your original code)
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = projectRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (index > 0) {
            projectRefs.current[index - 1].classList.add("fade-out");
          }
        } else {
          entry.target.classList.remove("show");
          if (index > 0) {
            projectRefs.current[index - 1].classList.remove("fade-out");
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
            backgroundImage: `url(${isMobile ? project.mobileBgImage : project.desktopBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {project.id === 1 ? (
            <div className="overlay-one-mascot">
              <img src="kittygif.gif" />
            </div>
          ) : null}

          {project.id === 1 ? (
            <div className="overlay-one">
              <div className="box">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : null}

          {project.id === 3 ? (
            <>
              <a href={`mailto:${project.email}`} className="project-card-link">
                <div className="overlay"></div>
              </a>

              <a
                href={`https://wa.me/+919568480048`}
                className="project-card-link"
              >
                <div className="overlay2"></div>
              </a>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Project;
