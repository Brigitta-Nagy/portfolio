import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Projects.module.css';

function Projects() {
  return (
    < div className={styles.projects} data-aos='zoom-in'>
    <div className={styles.project_card} id='projects'>
      <div className={styles.project_img}>
      </div>
        <div className={styles.project_content_wrapper}>
            <div>
              <div className={styles.project_title}>
              Weather application
              <div className={styles.project_tech}>JS HTML CSS JQUERY</div>
            </div>
            <div className={styles.project_description}>
              Front-end application allows you to get weather information in real time in your searched city. Temperature is displayed in Celsius or Farenheit as you wish by clicking the button. 
              The background image  changes depends on the weather 
            </div>
          </div>
      </div>
    </div>

    <div className={styles.project_card} data-aos='zoom-in'>
      <div className={`${styles.project_img} ${styles.project_img2}` }>
       
      </div>
        <div className={styles.project_content_wrapper}>
            <div>
              <div className={styles.project_title}>
              Weather application
              <div className={styles.project_tech}>JS HTML CSS JQUERY</div>
            </div>
            <div className={styles.project_description}>
              Front-end application allows you to get weather information in real time in your searched city. Temperature is displayed in Celsius or Farenheit as you wish by clicking the button. 
              The background image  changes depends on the weather 
            </div>
          </div>
      </div>
    </div>
    <div className={styles.project_card} id='projects'>
      <div className={`${styles.project_img} ${styles.project_img3}` }>
       
      </div>
        <div className={styles.project_content_wrapper}>
            <div>
              <div className={styles.project_title}>
              Weather application
              <div className={styles.project_tech}>JS HTML CSS JQUERY</div>
            </div>
            <div className={styles.project_description}>
              Front-end application allows you to get weather information in real time in your searched city. Temperature is displayed in Celsius or Farenheit as you wish by clicking the button. 
              The background image  changes depends on the weather 
            </div>
          </div>
      </div>
    </div>
    <div className={styles.project_card} id='projects'>
      <div className={`${styles.project_img} ${styles.project_img4}` }>
       
      </div>
        <div className={styles.project_content_wrapper}>
            <div>
              <div className={styles.project_title}>
              Weather application
              <div className={styles.project_tech}>JS HTML CSS JQUERY</div>
            </div>
            <div className={styles.project_description}>
              Front-end application allows you to get weather information in real time in your searched city. Temperature is displayed in Celsius or Farenheit as you wish by clicking the button. 
              The background image  changes depends on the weather 
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}


export default Projects

