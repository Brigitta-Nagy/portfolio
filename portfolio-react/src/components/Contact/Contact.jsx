import React from 'react'
import styles from './Contact.module.css'
import place from '../../static/place.png'
import email from '../../static/email.png'
import { useRef } from 'react'

function Contact() {
  const formRef = useRef()
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className={styles.contactContainer} id='contact'>
        <div className={styles.contactBackground}></div>
        <div className={styles.contactWrapper}>
          <div className={styles.contactLeft}>
            <h1 className={styles.contactTitle}>Contact</h1>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <img src={email} alt="email address" /><h4>brigitta.nagy@bgreat.co.uk</h4>
              </div>  
              <div className={styles.infoItem}>
                <img src={place} alt="" /><h4>Bristol, UK</h4>
              </div>
            </div>

          </div>
          <div className={styles.contactRight}>
            <p className={styles.description}>
              <h3>Hello! Do you have project to complete? Let's discuss about it! </h3>
              Always available for freelancing if the right project finds me. </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type='text' placeholder='Name' name='user_name'/>
              <input type='text' placeholder='Email' name='user_email'/>
              <input type='text' placeholder='Subject' name='user_subject'/>
              <textarea rows='5' placeholder='Message' name='user_message'/>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon</a>
    </section>
  )
}

export default Contact