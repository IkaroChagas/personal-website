import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";


const About = () => {
  return (
    <>
    <div className='section-container'>
    <div className='heading'>Sobre mim</div>
      <Header 
        subHeading="Desenvolvedor front-end">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>Íkaro Chagas</h3>
            <p className='about-sub-heading-details'>
              Sou <u>desenvolvedor front-end</u> tenho 29 anos.
              Minha jornada profissional me permitiu mergulhar profundamente no ecossistema React, explorando suas várias bibliotecas e ferramentas relacionadas. Através de projetos desafiadores, aprendi a abraçar os conceitos de componentização, estado e roteamento para criar aplicações web dinâmicas que proporcionam uma experiência fluida aos usuários.
            </p>
        </div>
        <div className='about-main-right'>
            <img 
                src={aboutAnime}
                alt="about-anime"
                className="about-anime"
                loading="lazy"
            />
        </div>
      </div>
      <Footer 
        phrase="Veja meus "
        link="projetos!"
        toAddress="/projects">
      </Footer>
      <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div>
    </div>
    </>
  )
}

export default About