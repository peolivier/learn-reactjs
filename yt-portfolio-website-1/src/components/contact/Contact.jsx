import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>dummyemail@Gmail.com</h5>
                    <a href="mailto:dummyemail@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>messeger_username</h5>
                    <a href="https://m.me/messenger-username-id-here" target='_blank' rel='noreferrer'>Send a message</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>What's App</h4>
                    <h5>+123456789</h5>
                    <a href="https://api.whatsapp.com/send?phone=+123456789" target='_blank' rel='noreferrer'>Send a message</a>
                </article>
            </div>

            <form action="">
                <label htmlFor="form-fullname">Send me a direct email</label>
                <input 
                  id='form-fullname' type="text" name='name' placeholder='Your Full Name' required
                  list='fullname-list'
                />
                <input 
                  type="email"
                  name='email'
                  placeholder='Your Email'
                  required pattern='\b[\w\.-]+@[\w\.-]+\.\w{2,}\b'
                  title='must be a valid email address like "example.email@service.com"'
                  />
                <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send message</button>

                <datalist id='fullname-list'>
                  <option value="John"></option>
                  <option value="Bob"></option>
                  <option value="Lea"></option>
                  <option value="Steve"></option>
                  <option value="Chloe"></option>
                  <option value="Elie"></option>
                </datalist>
            </form>
        </div>
    </section>
  )
}

export default Contact