import React, { useEffect } from "react";
import './App.css';
import { Navbar } from './components/Navbar/Navbar.js';
import { ContactForm } from './components/ContactForm/ContactForm.js';
import { Footer } from './components/Footer/Footer.js';
import profile from "./assets/images/profile.png";
import betterbc from "./assets/images/betterbc.png";
import meod from "./assets/images/meod.png";
import fmp from "./assets/images/fmp.png";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("start");
        }
        else {
          // entry.target.classList.remove("start");
        }
      })
    });
    document.querySelectorAll(".animated").forEach(el => observer.observe(el));
  }, [])

  return (
    <div className="App">
      <Navbar />
      <section id='home'>
        <div className='header'>
          <h1 className='animated fade-in'> Hi, I'm <span>Minh Duc Hoang</span>.</h1>
          <h2 className='animated fade-in delay '> Welcome to my portfolio. </h2>
        </div>
        <div className='scroll-container animated'>
          <p className='scroll animated'> Scroll </p>
          <div className='line-down animated'></div>
        </div>
      </section>
      <section id='about'>
        <h1 className='animated fade-in'> About </h1>
        <div className="row">
          <div className="left animated fade-in-left delay">
            <img src={profile} alt="profile" className='profile' />
            <div className="description">
              <p>
                Weekend warrior and full time nerd, I like to dive deeply into anything that piques my interest. I have a technical DEC in Computer Science from <a target="_blank" rel="noopener noreferrer" href="https://www.dawsoncollege.qc.ca/">Dawson College</a> and have enjoyed serving in the <a target="_blank" rel="noopener noreferrer" href="https://forces.ca/en/career/infanteer/">Canadian Army Reserves</a> since 2019. 
              </p>
              <p>
                As a software and web developer, I am passionate about efficient and intuitive design. Making use of creativity and employing technical nerdery to bring ideas to life is what motivates me.
              </p>
            </div>
          </div>
          <div className="right animated fade-in-right delay">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><i class="devicon-html5-plain"><p>HTML5</p></i></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><i class="devicon-css3-plain"><p>CSS3</p></i></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><i class="devicon-javascript-plain"><p>JavaScript</p></i></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><i class="devicon-react-original"><p>React</p></i></a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><i class="devicon-nodejs-plain"><p>NodeJS</p></i></a>
            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer"><i class="devicon-express-original"><p>Express</p></i></a>
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><i class="devicon-python-plain"><p>Python</p></i></a>
            <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer"><i class="devicon-java-plain"><p>Java</p></i></a>
            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer"><i class="devicon-csharp-plain"><p>C#</p></i></a>
            <a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer"><i class="devicon-kotlin-plain"><p>Kotlin</p></i></a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><i class="devicon-mongodb-plain"><p>MongoDB</p></i></a>
            <a href="https://azure.microsoft.com/en-us/services/sql-database/" target="_blank" rel="noopener noreferrer"><i class="devicon-azuresqldatabase-plain"><p>SQL</p></i></a>
            <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><i class="devicon-docker-plain"><p>Docker</p></i></a>
            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer"><i class="devicon-git-plain"><p>Git</p></i></a>
            <a href="https://www.bash.org" target="_blank" rel="noopener noreferrer"><i class="devicon-bash-plain"><p>Bash</p></i></a>
          </div>
        </div>

      </section>
      <section id='projects'>
        <h1 className='animated fade-in'> Projects </h1>
        <div className='project left animated fade-in-left '>
          <div className='project-thumbnail'>
            <a href="https://620fmp.azurewebsites.net/" target="_blank" rel="noopener noreferrer" className='image-container' >
              <img src={fmp} alt="project-image" className='project-image' />
            </a>
          </div>
          <div className='project-description'>
            <div className='header'>
              <h2> MatchApp </h2>
              <h3> Online marketplace </h3>
            </div>
            <div className='content'>
              <p> Full-stack MERN stack web application. Api server and storage deployed on Azure. Database deployed on MongoDB Atlas. </p>
              <div className='technologies'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><i class="devicon-html5-plain"></i></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><i class="devicon-css3-plain"></i></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><i class="devicon-javascript-plain"></i></a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><i class="devicon-react-original"></i></a>
                <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><i class="devicon-nodejs-plain"></i></a>
                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer"><i class="devicon-express-original"></i></a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><i class="devicon-mongodb-plain"></i></a>
                <a href="https://www.mongoosejs.com/" target="_blank" rel="noopener noreferrer"><i class="devicon-mongoose-original"></i></a>
                <a href="https://azuredatacentermap.azurewebsites.net/" target="_blank" rel="noopener noreferrer"><i class="devicon-azure-plain"></i></a>
                <a href="https://developers.google.com/identity/protocols/oauth2" target="_blank" rel="noopener noreferrer"><i class="devicon-google-plain"></i></a>
              </div>
            </div>
            <a href="https://620fmp.azurewebsites.net/" target="_blank" rel="noopener noreferrer" className="link"> Live site</a>
            <a href="https://github.com/minhuc-hoang/MatchApp" target="_blank" rel="noopener noreferrer" className="link"> Learn more</a>
          </div>
        </div>
        <div className='project right animated fade-in-right '>
          <div className='project-thumbnail'>
            <a href="https://m-d-hoang.github.io/bike-calculator/" target="_blank" rel="noopener noreferrer" className='image-container'>
              <img src={betterbc} alt="project-image" className='project-image' />
            </a>
          </div>
          <div className='project-description'>
            <div className='header'>
              <h2> Better Bike Calculator </h2>
              <h3> Physics Graphing </h3>
            </div>
            <div className='content'>
              <p> Interactive acceleration and speed graphing calculator for bike nerds. Custom simulation algorithms for efficiency and accuracy.</p>
              <div className='technologies'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><i class="devicon-html5-plain"></i></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><i class="devicon-css3-plain"></i></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><i class="devicon-javascript-plain"></i></a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><i class="devicon-react-original"></i></a>
                <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><i class="devicon-nodejs-plain"></i></a>
              </div>
            </div>
            <a href="https://m-d-hoang.github.io/bike-calculator/" target="_blank" rel="noopener noreferrer" className="link"> Live site</a>
            <a href="https://github.com/M-D-Hoang/bike-calculator" target="_blank" rel="noopener noreferrer" className="link"> Learn more</a>
          </div>
        </div>
        <div className='project left animated fade-in-left '>
          <div className='project-thumbnail'>
            <a href="https://m-d-hoang.github.io/Minesweeper-EOD/" target="_blank" rel="noopener noreferrer" className='image-container'>
              <img src={meod} alt="project-image" className='project-image' />
            </a>
          </div>
          <div className='project-description'>
            <div className='header'>
              <h2> Minesweeper: EOD </h2>
              <h3> Browser Game </h3>
            </div>
            <div className='content'>
              <p> Minesweeper-inspired game with a player-controlled character. <br /> Cross the minefield at your own risk.</p>
              <div className='technologies'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><i class="devicon-html5-plain"></i></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><i class="devicon-css3-plain"></i></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><i class="devicon-javascript-plain"></i></a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><i class="devicon-react-original"></i></a>
                <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><i class="devicon-nodejs-plain"></i></a>
              </div>
            </div>
            <a href="https://m-d-hoang.github.io/Minesweeper-EOD/" target="_blank" rel="noopener noreferrer" className="link"> Live site</a>
            <a href="https://github.com/M-D-Hoang/Minesweeper-EOD" target="_blank" rel="noopener noreferrer" className="link"> Learn more</a>
          </div>
        </div>
      </section>
      <section id='contact'>
        <h1 className='animated fade-in'> Contact </h1>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
