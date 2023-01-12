import linkedin from '../../social-icons/linkedin.png'
import github from '../../social-icons/github.png'
import twitter from '../../social-icons/twitter.png'
import resume from '../../social-icons/resume.png'
import email from '../../social-icons/email.png'
import resumeWebsite from '../../resume/resume-website.pdf'
// import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <div id="first-page" className="homepage">
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
          <a href={resumeWebsite} className="resume" target="_blank"><img
            src={resume}/></a>
          &nbsp;
          &nbsp;
          <a href="mailto:cmpujals@gmail.com" className="email" target="_blank"><img
            src={email}/></a>
        </div>
        <div className="homepage-content-container">
          <div>
            <h1>Hi, I'm Cormac, a full stack web developer!</h1>
          </div>
          <img src="https://i.imgur.com/mJKh8i7.jpg"/>
          <div className="textbox">
            <h3>
              I'm passionate about using technology to solve complex problems and improve people's lives.
            </h3>
            <p>
              I started my career at the European Central Bank as a research analyst
              programming in R, Stata and Python. After discovering how much I enjoyed programming
              and building user experiences, I transitioned into full stack JavaScript and haven’t
              looked back since!
            </p>
          </div>
          <a href="#projects-container"><button>View Projects</button></a>
        </div>
      </div>
      <div className="second-page">
        {/*<a href="#first-page"><button>Scroll up</button></a>*/}
        <div id="projects-container" className="projects-container">
          <div className="project-container">
            <h3>NationalParksRock</h3>
            <ul>
              <li>Application designed to make discovering and tracking
                national parks that you want to visit easy and fun.</li>
              <br/>
              <li>User-centric SPA built with the MERN-stack. Utilizes JWT tokens for user passwords.
                (All technologies: MongoDB/Mongoose, Express, React, Node, JavaScript, CSS, HTML. Git for version control and Trello,
                Canva, and LucidChart for project planning and design)</li>
            </ul>
            <a href="https://nationalparksrock.herokuapp.com/" target="_blank"><button>Demo</button></a>
            <a href="https://github.com/cormacpujals/nationalparksrock" target="_blank"><button>Github</button></a>
          </div>
          <div className="project-container">
            <h3>GetTogether</h3>
            <ul>
              <li>Community-oriented website created by a team of 3 developers
                where folks can find local events to attend or post their own.</li>
              <br/>
              <li>Full-stack with user-centric CRUD app written in Python/Django. Additional technologies: AWS, HTML, CSS, JavaScript,
                and DTL. Git for version control and Trello, Canva, and LucidChart for project planning and design</li>
            </ul>
            <a href="https://gettogether.herokuapp.com/" target="_blank"><button>Demo</button></a>
            <a href="https://github.com/kailahk/project-3" target="_blank"><button>Github</button></a>
          </div>
          <div className="project-container">
            <h3>Bouldering Paradise</h3>
            <ul>
              <li>Fun website designed to offer climbers a way to connect over their
                shared passion for bouldering. Create posts with photos and descriptions of your favorite boulders</li>
              <br/>
              <li>Full stack CRUD app made with MongoDB, Express, Node, JavaScript, HTML, CSS, deployed on Heroku </li>
            </ul>
            <a href="https://boulderingparadise.herokuapp.com/posts" target="_blank"><button>Demo</button></a>
            <a href="https://github.com/cormacpujals/bouldering" target="_blank"><button>Github</button></a>
          </div>
          <div className="project-container">
            <h3>Spaceman</h3>
            <ul>
              <li>Spaceman is fun spin on the classic game of Hangman. In my version
                of Spaceman, the player is an astronaut in-training going through a mission
                simulation</li>
              <br/>
              <li>Single-page browser game made with JavaScript, HTML, and CSS, deployed on Github Pages</li>
            </ul>
            <a href="https://cormacpujals.github.io/spaceman/" target="_blank"><button>Demo</button></a>
            <a href="https://github.com/cormacpujals/spaceman" target="_blank"><button>Github</button></a>
          </div>
        </div>
        <div>
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
          <a href={resumeWebsite} className="resume" target="_blank"><img
            src={resume}/></a>
          &nbsp;
          &nbsp;
          <a href="mailto:cmpujals@gmail.com" className="email" target="_blank"><img
            src={email}/></a>
        </div>
      </div>
    </>
  )
}
