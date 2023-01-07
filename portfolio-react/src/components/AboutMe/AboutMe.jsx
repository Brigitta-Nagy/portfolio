import React from 'react'
import styles from './AboutMe.module.css'
import {motion as m} from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CV from '../../static/CV.pdf'

function AboutMe() {
  return (
    <m.section className={styles.about} id='about'>
    < div  className={styles.aboutSection} data-aos='slide-up'>
    <div className={styles.aboutCard} >
      <h1 data-aos='flip-left' data-aos-duration='3000'>About Me</h1>
        <p className={styles.aboutP}> Im a career switcher, after years caring people I started coding. Always interested in computing, now its time and i think never late to start learning something that is life-time learning process &#128640;.
        <br></br>
        i like to be a contribution to others as i like to accept contribution from others. &#9775; &#9774;
        <br></br>
        I am Hungarian, although I choose to live in different country more than 10 years ago I still prefer sour cream instead of ketchup on my pasta.  </p>

        <button>
          
          <a className={styles.button_link} href={CV} target='blank' alt='CV'>Download CV</a>
          </button>
        </div>
    </div>
    </m.section>
    
  )
}

export default AboutMe