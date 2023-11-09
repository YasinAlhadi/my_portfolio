import { motion } from 'framer-motion'
import './skills.css'

const Skills = () => {
    const frontVaraints = {
        initial: {
            opacity: 0,
            x: -100,
            y: 200,
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.3,
            },
        }
    }
    const backVaraints = {
        initial: {
            opacity: 0,
            x: 100,
            y: 200,
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.3,
            },
        }
    }
    const otherVaraints = {
        initial: {
            opacity: 0,
            x: -100,
            y: 200,
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.3,
            },
        }
    }
  return (
    <div className="skills">
        <div className="skills-heading">
        <h1>Skills</h1>
        </div>
        <div className="skills-container">
            <motion.div className="skills-part" variants={frontVaraints} initial="initial" whileInView="animate">
            <h2>Frontend</h2>
            <div className="skill">
                <div className="skill-img">
                    <img src="skills/html5.svg" alt="html" />
                </div>
                <div className="skill-name">
                    <p>HTML5</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-img">
                    <img src="skills/css3.svg" alt="css3" />
                </div>
                <div className="skill-name">
                    <p>CSS3</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-img">
                    <img src="skills/javascript.svg" alt="javascript" />
                </div>
                <div className="skill-name">
                    <p>Javascript</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-img">
                    <img src="skills/react.svg" alt="React" />
                </div>
                <div className="skill-name">
                    <p>React</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-img">
                    <img src="skills/tailwindcss.svg" alt="Tailwind" />
                </div>
                <div className="skill-name">
                    <p>Tailwind CSS</p>
                </div>
            </div>
            <div className="skill">
                <div className="skill-img">
                    <img src="skills/bootstrap.svg" alt="Bootstrap" />
                </div>
                <div className="skill-name">
                    <p>Bootstrap</p>
                </div>
            </div>
            </motion.div>
            <motion.div className="skills-part" variants={backVaraints} initial="initial" whileInView="animate">
                <h2>Backend</h2>
            <div className="skill">
                <div className="skill-img">
                    <img src="/skills/nodejs.svg" alt="nodejs" />
                </div>
                <div className="skill-name">
                    <p>Nodejs</p>
                </div>
                </div>
                <div className="skill">
                <div className="skill-img">
                    <img src="/skills/flask.svg" alt="Flask" />
                </div>
                <div className="skill-name">
                    <p>Python-Flask</p>
                </div>
                </div>
                <div className="skill">
                <div className="skill-img">
                    <img src="/skills/mongodb.svg" alt="MongoDB" />
                </div>
                <div className="skill-name">
                    <p>MongoDB</p>
                </div>
                </div>
                <div className="skill">
                <div className="skill-img">
                    <img src="/skills/mysql.svg" alt="Mysql" />
                </div>
                <div className="skill-name">
                    <p>MySQL</p>
                </div>
                </div>
                <div className="skill">
                <div className="skill-img">
                    <img src="/skills/redis.svg" alt="Redis" />
                </div>
                <div className="skill-name">
                    <p>Redis</p>
                </div>
                </div>
            </motion.div>
            <motion.div className="skills-part" variants={otherVaraints} initial="initial" whileInView="animate">
                <h2>Other</h2>
            <div className="skill">
                <div className="skill-img">
                    <img src="/skills/git.svg" alt="Git" />
                </div>
                <div className="skill-name">
                    <p>Git</p>
                </div>
                </div>
                <div className="skill">
                <div className="skill-img">
                    <img src="/skills/github.svg" alt="GitHub" />
                </div>
                <div className="skill-name">
                    <p>GitHub</p>
                </div>
                </div>
                <div className="skill">
                <div className="skill-img">
                    <img src="/skills/linux.svg" alt="Linux" />
                </div>
                <div className="skill-name">
                    <p>Linux</p>
                </div>
                </div>
                <div className="skill">
                <div className="skill-img">
                    <img src="/skills/bash.svg" alt="Bash" />
                </div>
                <div className="skill-name">
                    <p>Bash</p>
                </div>
                </div>
                <div className="skill">
                <div className="skill-img">
                    <img src="/skills/docker.svg" alt="Docker" />
                </div>
                <div className="skill-name">
                    <p>Docker</p>
                </div>
                </div>
                <div className="skill">
                <div className="skill-img">
                    <img src="/skills/amazonwebservices.svg" alt="AWS" />
                </div>
                <div className="skill-name">
                    <p>AWS</p>
                </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Skills