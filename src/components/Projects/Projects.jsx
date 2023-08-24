import React from 'react'
import "./Projects.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import {projectsData} from "./../../assets/projectsData";
import ProjectCard from "./ProjectCard.jsx";
function Projects() {
  return (
    <div className='section-container'>
      <div className='project-header'>Meus projetos</div>
    <Header 
        subHeading="Acompanhe meus projetos e atualizações por aqui!">
      </Header>
      <div className='project-cards-container'>
      {
        projectsData.map(({
          projectName,
          projectDescription,
          imageUrl,
          projectUrl
        }, index) => {
          return (<ProjectCard key={index}
          projectName={projectName}
          projectDescription={projectDescription}
          imageUrl={imageUrl}
          projectUrl={projectUrl}
        />);
        })
      }
      </div>
      <Footer 
        phrase="Veja agora "
        link="minhas skills!"
        toAddress="/skills">
      </Footer>
    </div>
  )
}

export default Projects