import linkedin from '../../social-icons/linkedin.png'
import github from '../../social-icons/github.png'
import twitter from '../../social-icons/twitter.png'
import resume from '../../social-icons/resume.png'
import email from '../../social-icons/email.png'
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <div className="homepage">
        <div className="icons">
          <a href="https://www.linkedin.com/in/cormacpujals/" className="linkedin" target="_blank"><img
            src={linkedin}/></a>
          &nbsp;
          &nbsp;
          <a href="https://github.com/cormacpujals" className="github" target="_blank"><img
            src={github}/></a>
          &nbsp;
          &nbsp;
          <a href="https://twitter.com/CormacPujals" className="twitter" target="_blank"><img
            src={twitter}/></a>
          &nbsp;
          &nbsp;
          <a href="" className="resume" target="_blank"><img
            src={resume}/></a>
          &nbsp;
          &nbsp;
          <a href="" className="email" target="_blank"><img
            src={email}/></a>
        </div>
        <div className="homepage-content-container">
          <div>
            <h1>Hi, I am Cormac, a full stack web developer!</h1>
          </div>
          <img src="https://i.imgur.com/mJKh8i7.jpg"/>
          <div className="textbox">
            <h3>
              I am passionate about using technology to solve complex problems and improve people's lives.
            </h3>
            <p>
              Those passions brought me to the European Central Bank where I worked as a research analyst
              programming in R, Stata and Python. After discovering how much I enjoyed programming
              and building end-user experiences, I transitioned into the world web development and I haven’t
              looked back since!
            </p>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-container"><h3>NationalParksRock</h3></div>
        <div className="project-container"><h3>GetTogether</h3></div>
        <div className="project-container"><h3>Bouldering Paradise</h3></div>
        <div className="project-container"><h3>Spaceman</h3></div>
      </div>
    </>
  )
}
