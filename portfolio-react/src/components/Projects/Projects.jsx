import React from 'react'
import Weather from '../../static/weather-app.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Projects.module.css';

function Projects() {
  return (
    <>
    <div className={styles.project_card}>
      <div className={styles.project_img}>
        <img src={Weather} alt="pic of weather application" />
        <div className={styles.project_content_wrapper}>
          <div className={styles.project_title}>
            <div className={styles.project_tech}></div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}


export default Projects

