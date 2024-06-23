import './Projects.css'
import Quazar from './assets/Quazar.png';
import plus from './assets/plus.png'
import plus2 from './assets/plus2.png'
import plus3 from './assets/plus3.png'

function Projects() {
  return (
    <section className='projects-Container'>
        <h1>Projects</h1>
        <div project-item>
            <a href="https://666ca9fd30c6601b916b38a4--reliable-taiyaki-7dde39.netlify.app/">
            <img className='project-image' src={Quazar} alt="" />
            </a>
        </div>
        
        <div project-item>
            <img className='project-image' src={plus} alt="" />
        </div>

        <div project-item>
            <img className='project-image' src={plus2} alt="" />
        </div>

        <div project-item>
            <img className='project-image' src={plus3} alt="" />
        </div>

    </section>
  );
}

export default Projects;