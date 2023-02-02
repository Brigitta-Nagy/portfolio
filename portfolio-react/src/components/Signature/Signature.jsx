import React from 'react'
import styles from './Signature.module.css'
import {motion as m } from 'framer-motion'

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




function Signature() {
  return (
    <>
    <m.main className={styles.mainContainer}> 
      <div className={styles.signatureContainer}>
      <div className={styles.signature}>Brigitta Nagy</div>

    <div className={styles.fullstack}>Full stack developer
      <div className={styles.iconContainer}>
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
          src={React_logo} alt="React" title="React" />

        <m.img  
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay:1.5 }}
          src={Javascript_logo} alt="JavaScript" title="JavaScript"/>

        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay:2 }} src={HTML} alt="HTML" title="HTML"/>
       
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay:2.5 }} src={Sass_logo} alt="Sass" title="Sass"/>

        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay:2.75}} src={Express_logo} alt="EXpress" title="Express"/>

        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay:3}} src={Bootstrap_logo} alt="Bootstrap" title="Bootstrap"/>
      
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1, rotate: 360}}
          transition={{ ease: "easeOut", duration: 1, delay:3.25 }} src={NodeJs} alt="NodeJs" title="NodeJs"/>

        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay:3.5 }} src={CSS} alt="CSS" title="CSS"/>

        <m.img  
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay: 3.75 }}src={Mongodb_logo} alt="MongoDb" title="MongoDb"/>

        <m.img 
        initial={{x:1200}} 
        animate={{x:0, rotate: 360}}
        transition={{ ease: "easeOut", duration: 1, delay:3.75 }} src={JQuery_logo} alt="JQuery" title="JQuery" />
      </div>
      </div>
    </div>
    </m.main>
    </>
  )
}

export default Signature