import {useRef, useEffect} from 'react'
import styles from './Skills.module.css'
import { motion as m, useInView} from 'framer-motion'

import Javascript_logo from '../../static/Javascript01.png'
import CSS from '../../static/CSS.png'
import React_logo from '../../static/React_logo.png'
import HTML from '../../static/HTML.png'
import NodeJs from '../../static/NodeJs.png'
import JQuery_logo from '../../static/Jquery01.png'
import Bootstrap_logo from '../../static/Bootstrap01.png'
import Sass_logo from '../../static/Sass01.png'
import Express_logo from '../../static/Express01.png'
import Mongodb_logo from '../../static/Mongodb01.png'






function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  useEffect(()=> {
    console.log("in View", isInView)
  }, [isInView])
  return (
    <>
      <section ref={ref} className={styles.container}>
        <h1 className={styles.skills} id='skills'> Skills</h1>
        <h2> My aim: - every day learning something new to become a better developer</h2>
        <h3>These skills what I already used to one of my projects</h3>
      
      
        <div className={styles.logo_wrapper}>
          
              <m.div className={styles.logo_container}
              initial={{x:-200, opacity: 0}}
              animate={{ x:50, opacity: 1 }}
              transition={{duration: 3}}>
                 <p className={styles.title}> &lt; Frontend /&gt; </p>
                    <div className={styles.frontend_logo_container}>
                      <div className={styles.logo}> <img  src={HTML} alt="" />
                        <p>HTML</p>
                      </div>
                      <div className={styles.logo}> <img src={CSS} alt="" />
                        <p>CSS</p>
                      </div>
                      <div className={styles.logo}> <img src={React_logo} alt="" />
                        <p>React</p>
                      </div>
                      <div className={styles.logo}> <img  src={Javascript_logo} alt="" />
                        <p>JavaScript</p>
                      </div>
                      <div className={styles.logo}> <img  src={JQuery_logo} alt="" />
                        <p>jQuery</p>
                      </div>
                      <div className={styles.logo}>  <img src={Bootstrap_logo} alt="" />
                        <p>Bootstrap</p>
                      </div>
                      <div className={styles.logo}> <img  src={Sass_logo} alt="" />
                        <p>Sass</p>
                      </div>
                    </div>
              </m.div>

              <m.div className={styles.logo_container}
              initial={{x:200, opacity: 0}}
              animate={{ x:50, opacity: 1 }}
              transition={{duration: 3}}>
                <p className={styles.title}> &lt; Backend  /&gt; </p>
                  <div className={styles.backend_logo_container}>
                    <div className={styles.logo}> <img  src={NodeJs} alt="" />
                        <p>Node js</p>
                      </div>
                      <div className={styles.logo}> <img  src={Express_logo} alt="" />
                        <p>Express</p>
                      </div>
                      <div className={styles.logo}> <img src={Mongodb_logo} alt="" />
                        <p>MongoDb</p>
                      </div>
                  </div>
              </m.div>


          
        </div>
        <div>
          <h3>These skills I'm on recent project</h3>
          <div className={styles.logo_container}>
            
            <div className={styles.current_logo_container}>
            </div>
            </div>
      </div>
        </section>
    </>
  )
}

export default Skills