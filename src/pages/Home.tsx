import { useEffect, ReactHTMLElement } from 'react';
import { Link } from 'react-router-dom';

import { ButtonNext } from '../components/buttonNext/ButtonNext';
import { CardProjects } from '../components/cardProjects/CardProjects';

import './style.scss';

export function Home() {

  useEffect(() => {
    
    const sections = document.querySelectorAll('section');
    
    sections[0].classList.add('show');

    window.addEventListener('scroll', () => {
      
      sections.forEach(element => {
      
        const windowTop = window.pageYOffset;
        
        if((windowTop + 600) > element.offsetTop) {
          element.classList.add('show');
        }else {
          element.classList.remove('show');
        }

      });
  
    });

    let projectsContainer: any = document.querySelector('#projects > #container-contents');
    let position = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e: any) {
      projectsContainer.style.cursor = 'grabbing';
      projectsContainer.style.userSelect = 'none';

      position = {

        left: projectsContainer.scrollLeft,
        top: projectsContainer.scrollTop,
        x: e.clientX,
        y: e.clientY,

      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e: any) {

      const dx = e.clientX - position.x;
      const dy = e.clientY - position.y;

      projectsContainer.scrollTop = position.top - dy;
      projectsContainer.scrollLeft = position.left - dx;

    };

    const mouseUpHandler = function () {
      projectsContainer.style.cursor = 'grab';
      projectsContainer.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    projectsContainer.addEventListener('mousedown', mouseDownHandler);

  }, []); 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <div id="page-home" className="texto-protegido"> 
      
      <section className="section" id="start">
        
        <div id="column">

          <span> Web Developer </span>
          <h2> Gustavo </h2>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
          <button id="button-contact"> Entrar em contato </button>

        </div>

        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a10e.appspot.com/o/uy87wsyqs7.svg?alt=media&token=b5f3038a-3747-4997-8340-53281bcea676"/>

        <ButtonNext nextSection="#about-me"/>

      </section>

      <section className="section" id="about-me">

        <div id="card">

          <h2> Sobre mim </h2>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  </p>

        </div>

        <ButtonNext nextSection="#projects"/>

      </section>

      <section className="section" id="projects">

        <h2> Projetos </h2>

        <div id="container-contents" >

          <CardProjects title="TITLE PROJECT" tags={['SSSSSS', 'SSSSSS', 'SSSSSS']} description="Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip"/>
          <CardProjects title="TITLE PROJECT" tags={['SSSSSS', 'SSSSSS', 'SSSSSS']} description="Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip"/>
          <CardProjects title="TITLE PROJECT" tags={['SSSSSS', 'SSSSSS', 'SSSSSS']} description="Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip"/>
          
        </div>

        <Link id="button-all-projects" to="#"> Ver mais </Link>

        <ButtonNext nextSection="#skills"/>

      </section>

      <section className="section" id="skills">

        <h2> Skills </h2>

        <div id="container-contents">

          <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a10e.appspot.com/o/8342yr4e23.svg?alt=media&token=5b8de4e0-7591-49b4-982b-af6230f8cbde"/>
            <span> JavaScript </span>
          </div>

          <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a10e.appspot.com/o/a8e2edqwd.svg?alt=media&token=2d691a7a-256e-4e36-ba22-17f0ea3e0c83"/>
            <span> TypeScript </span>
          </div>

          <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a10e.appspot.com/o/ii9qasuq8.svg?alt=media&token=15e4a127-1a93-49ac-9915-d214e8861372"/>
            <span> react js </span>
          </div>

          <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a10e.appspot.com/o/354t2.svg?alt=media&token=05312eb8-a4b8-49b1-a0a9-2ec94cc5b9b2"/>
            <span> git </span>
          </div>

          <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a10e.appspot.com/o/nodejs-icon.svg?alt=media&token=58628b57-eddf-454b-b9c8-963cf56097b7"/>
            <span> nodejs </span>
          </div>

          <div className="card">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-8a10e.appspot.com/o/sass-1.svg?alt=media&token=db0fbf32-ca20-40ca-ab1d-c720431cb5ab"/>
            <span> Sass </span>
          </div>
          
        </div>

        <ButtonNext returnSection="#start"/> 

      </section>

      {/* <footer id="footer">

        <span> WEB DEVELOPER 2021 </span>

      </footer> */}

    </div>  

  )

}