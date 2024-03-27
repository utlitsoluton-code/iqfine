import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Cripto currency dashboard & financial visualization ",
    },
    {
      id: 2,
      image: IMG2,
      title: "Charts templates & inphographics in figma",
    },
    {
      id: 3,
      image: IMG3,
      title: "Figma dashboard UI kit for data designe web app",
    },
    {
      id: 4,
      image: IMG4,
      title: "Figma dashboard UI kit for data designe web app",
    },
    {
      id: 5,
      image: IMG5,
      title: "Charts templates & inphographics in figma",
 
    },
    {
      id: 6,
      image: IMG6,
      title: "Charts templates & inphographics in figma",  
    },
  ];
  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        {data.map(({ id, image, title,  demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="project-title">{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
