
import "./Skills.css";
import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";
import skillsVector from "./../../assets/skills_vector.png";
import {skillList} from "./../../assets/skillsData";
import SkillCard from "./SkillCard.jsx";

const Skills = () => {
  return (
    <div className='section-container'>
      <div className='skill-header'>Minhas Stacks</div>
      <Header>
        </Header>
      <div className='skill-card-container'>
      {
        skillList.map(({skillName, skillUrl}, index) =>  <SkillCard key={index} skillName={skillName}
          skillUrl={skillUrl}
          />)
      }
      </div>
      <Footer
        phrase="Entre em "
        link="contato."
        toAddress="/contact"></Footer>
        <div className='skills-vector-frame'>
          <img src={skillsVector} alt="skill-vector"
          className='skills-vector' loading="lazy"
          />
        </div>
    </div>
  )
}

export default Skills