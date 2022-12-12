import React from 'react'
import styles from './Skills.module.css'
import html_logo from '../../static/html_logo.png'
import css_logo from '../../static/css_logo.png'
import js_logo from '../../static/js_logo.png'
import bootstrap_logo from '../../static/bootstrap_logo.png'
import jquery_logo from '../../static/jquery_logo.png'
import mongodb_logo from '../../static/mongodb_logo.png'
import nodeJs_logo from '../../static/nodeJs_logo.png'
import react_logo from '../../static/react_logo.png'
function Skills() {
  return (
    <>
      <div>
        <h1 id={styles.skills}> Skills</h1>
      
        <div className={styles.logo_container}>
           
              <div className={styles.frontend_logo_container}>
              <p> &lt; Frontend /&gt; </p>
                <div className={styles.frontend_first_row}>
                  <div ><img height={50} src={html_logo} alt="" />
                    <p className={styles.logo_subtitles}>HTML</p>
                  </div>
                  <div ><img height={50} src={css_logo} alt="" />
                    <p className={styles.logo_subtitles}>CSS</p>
                  </div>
                  <div ><img height={50} src={js_logo} alt="" />
                    <p className={styles.logo_subtitles}>JavasCript</p>
                  </div>
              </div>

              </div>
            <p> &lt; Backend  /&gt; </p>
              <div className={styles.backend_logo_container}>

              </div>
            <p> &lt; I'm on it now :) /&gt; </p>
            <div className={styles.current_logo_container}>

            </div>
        </div>

      
        </div>
    </>
  )
}

export default Skills