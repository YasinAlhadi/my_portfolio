/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './projects.css'
import projects from '../../data/projects'

const Project = ({ project }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({target: ref});
    const y = useTransform(scrollYProgress, [0, 1], [-400, 900]);
    return (
          <section ref={ref}>
            <div className="container">
                <motion.div className="wrapper" style={y}>
                <div className="project-img">
                    <img src={project.image} alt={project.name} width={200} height={200}/>
                </div>
                <div className="project-info">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div className="project-links">
                        <a className='demo' href={project.demo} target="_blank" rel="noreferrer">
                            <i className="fas fa-eye"></i> Demo
                        </a>
                        <a className='code' href={project.github} target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i> Code
                        </a>
                    </div>
                </div>
                </motion.div>
            </div>
          </section>
    )
    }

export const Projects = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({target: ref, offset:["end end", "start start"]})
    const progress = useSpring(scrollYProgress, {damping: 90, stiffness: 900})
  return (
    <div className='projects' id='projects' ref={ref}>
        <div className="progress">
            <h1>Projects</h1>
            <motion.div style={{scaleX:progress}} className="progress-bar"></motion.div>
        </div>
        {projects.map((project) => (
            <Project key={project.id} project={project} />
        ))}
    </div>
  )
}

export default Projects;
