import linkedin from '../../social-icons/linkedin.png'
import github from '../../social-icons/github.png'
import twitter from '../../social-icons/twitter.png'
import resume from '../../social-icons/resume.png'
import email from '../../social-icons/email.png'
import "./NavBar.css"

export default function NavBar() {

  return (
    <nav className="navbar">
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
    </nav>
  );
}
