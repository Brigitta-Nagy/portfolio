import React from 'react'
import styles from './Signature.module.css'
import { motion} from 'framer-motion'

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
    <div className={styles.signatureContainer}> 
    <div className={styles.signature}>Brigitta Nagy</div>
    <div className={styles.fullstack}>Full stack developer</div>
    <div className={styles.iconContainer}>

    </div>

    </div>
    </>
  )
}

export default Signature