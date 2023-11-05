import emailjs from '@emailjs/browser';
import './contact.css';
import { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s9xhp4j', 'template_784ugfo', formRef.current, 'Pz5mvi5_9L9bHTZbi')
          .then((result) => {
                console.log(result.text);
                setSuccess(true);
          }, (error) => {
              console.log(error.text);
                setError(true);
          });
          formRef.current.reset();
      };

  return (
    <div className='contact'>
        <div className="contact__text">
            <h1>Let&apos;s Work Together</h1>
            <p>
                I am currently looking for a new role as a Full Stack or Backend Developer. 
                If you have any questions or would like to work together, please feel free to contact me.</p>
            <div className="info">
                    <h3>Email:</h3>
                    <span>yasin.a.m.elhadi@gmail.com</span>
                    </div>
                    <div className="info">
                    <h3>Phone:</h3>
                    <span>+268 788 93793</span>
                    </div>
                    <div className="info">
                    <h3>Location:</h3>
                    <span>Adu Dhabi, United Arab Emirates</span>
            </div>
        </div>
        <div className="contact__form">
            <form ref={formRef} onSubmit={sendEmail}>
                <input type="text" required placeholder='Name' name='name' />
                <input type="email" required placeholder='Email' name='email'/>
                <textarea placeholder='Message' name='message'/>
                <button type='submit'>Submit</button>
            </form>
            {error && <span className='error'>Something went wrong!</span>}
            {success && <span className='success'>Thanks, I&apos;ll reply ASAP</span>}
            </div>
    </div>
  )
}

export default Contact