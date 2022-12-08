import React from 'react'
import NavLinks from './NavLinks'
import styles from './Navbar.module.css'
function Navigation() {
  return (
    <>
      <div className={`${styles.navigation} ${styles.headerContainer}`}>
        <h1 className={styles.logo}>Brigitta Nagy</h1>
        <NavLinks/>
        
      </div>


    </>
    

  )
}

export default Navigation