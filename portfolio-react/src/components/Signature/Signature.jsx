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
    <main className={styles.mainContainer}> 
    <div className={styles.signatureContainer}>
    <div className={styles.signature}>Brigitta Nagy</div>

    <div className={styles.fullstack}>Full stack developer
      <div className={styles.iconContainer}>
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay: 2 }}

          src={React_logo} alt="" />
        <m.img  
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay:3 }}
          src={Javascript_logo} alt="" />
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 1, delay:3.5 }} src={HTML} alt="" />
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 2, delay:4 }} src={CSS} alt="" />
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 2, delay:4.5 }} src={Sass_logo} alt="" />
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 2, delay:5}} src={Bootstrap_logo} alt="" />
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 2, delay:5.5 }} src={Express_logo} alt="" />
        <m.img 
          initial={{opacity:0}} 
          animate={{opacity:1, rotate: 360}}
          transition={{ ease: "easeOut", duration: 2, delay:6 }} src={NodeJs} alt="" />
        <m.img  className={styles.mongodbLogo}
          initial={{opacity:0}} 
          animate={{opacity:1}}
          transition={{ ease: "easeOut", duration: 2, delay: 6.5 }}src={Mongodb_logo} alt="" />
        <m.img 
        initial={{x:1200}} 
        animate={{x:0, rotate: 360}}
        transition={{ ease: "easeOut", duration: 2, delay:5 }} src={JQuery_logo} alt="" />
      </div>
      </div>
    </div>
    </main>
    </>
  )
}

export default Signature