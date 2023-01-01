import React from 'react'
import styles from './AboutMe.module.css'
import {motion as m} from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutMe() {
  return (
    <m.div id='about'>
    <section  className={styles.aboutSection} data-aos='slide-up'>
    <div className={styles.aboutCard} >
      <h1>About Me</h1>
        <p className={styles.aboutP}> Im a career switcher, after years caring people I started coding. Always interested in computing, now its time and i think never late to start learning something that is life-time learning process &#128640;.
        <br></br>
        i like to be a contribution to others as i like to accept contribution from others. &#9775; &#9774;
        <br></br>
        I am Hungarian, although I choose to live in different country more than 10 years ago I still prefer soure cream instead of ketchup on my pasta.  </p>

        <button>Download CV</button>
        </div>
    </section>
    </m.div>
    
  )
}

export default AboutMe