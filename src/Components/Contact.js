import React from 'react'
import Footer from './Footer'
import './Contact.css'

const Contact = () => {

  return (
    <div className='contact'>
      <div className='content'>
          <h2>Contact Me</h2>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>

          <form>
            <div className='name'>
              <label>First name</label>
              <input type='text' id="first_name" placeholder="Enter your first name"/>

              <label>Last name</label>
              <input type='text' id="last_name" placeholder="Enter your last name"/>
            </div>
            

            <label>Email</label>
            <input type='email' id="email" placeholder="yourname@email.com"/>

          <span>
                <label>Message</label>
                <textarea type="textarea" id='message' placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
          </span>

            <span>
                <input id='checkbox' type='checkbox'/>
                <p>You agree to providing your data to {} who may contact you.</p>
            </span>
            

            <input type='submit' id='btn__submit' value='Send Message'/>
          </form>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact