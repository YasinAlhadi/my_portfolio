import { motion } from 'framer-motion'
import './hero.css'

export const Hero = () => {
    const textVaraints = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.3,
            },
        }
    }
    return (
        <motion.div className='hero' initial='initial' animate='animate'>
                <motion.div className='hero__image' variants={textVaraints}>
                <motion.img src='/Yasin.png' alt='Yasin Alhadi' variants={textVaraints}/>
            </motion.div>
            <div className='hero__text'>
                <motion.h2 className='hero__text__name' variants={textVaraints}>Yasin Alhadi</motion.h2>
                <motion.h1 className='hero__text__title' variants={textVaraints}>Full Stack Web Developer</motion.h1>
                <motion.p className='hero__text__description' variants={textVaraints}>I&apos;m a full stack web developer with a passion for learning and teaching others.</motion.p>
                <motion.div className="hero__buttons" variants={textVaraints}>
                    <button className="hero__buttons__resume">Resume</button>
                    <button className="hero__buttons__contact">Contact</button>
                </motion.div>
            </div>
        </motion.div>
    )
}


export default Hero;