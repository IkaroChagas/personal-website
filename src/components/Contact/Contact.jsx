import "./Contact.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import contactVector from "./../../assets/contact_anime.png";
import gitHub from "./../../assets/gh.png";
import instaGram from '../../assets/in.png'
import linkedIn from "./../../assets/li.png";
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("mdobenlw");
  if (state.succeeded){
      setTimeout(() => {
        document.getElementById("contact-form").reset();
      }, 2500)
  }
  return (
    <div className='section-container'>
      <div className='contact-me'>Me contate!</div>
      <Header>
      </Header>
      <div className='contact-form-container'>
        {
            state.succeeded &&
            <div className='alert'>
                Obrigado!
            </div>
        }
        <form className='contact-form' onSubmit={handleSubmit}
        id='contact-form'>
          <input type="email" className='input-box email-input'
            placeholder='Seu melhor e-mail' name='email' required/>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          <textarea type="text" placeholder='Sua mensagem' name='message'
            className='input-box body-input' required></textarea>
          <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
          <button type="submit" className="contact-btn"
          disabled={state.submitting}>
            Enviar e-mail
          </button>
        </form>
      </div>
      <div className='social-icons-container'>
        <a href="https://github.com/IkaroChagas"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={gitHub} alt='github' loading="lazy"/>
        </a>
        <a href="https://www.linkedin.com/in/ikaro-chagas/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={linkedIn} alt='linkedin' loading="lazy"/>
        </a>
        <a href="https://www.instagram.com/ikarochagas/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={instaGram} alt='instagram' loading="lazy"/>
        </a>
      </div>
      <Footer
        phrase="Mais "
        link="sobre mim."
        toAddress="/about">
      </Footer>
      <div className='vector-frame'>
        <img src={contactVector}
          alt="contact"
          loading="lazy"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default Contact