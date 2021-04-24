import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  

  function handleChange(e) {
    
    switch(e.target.name){
      case 'name':
        if (!(e.target.value).trim()) {
          setErrorMessage('Missing name.');
        } else {
          setErrorMessage('');
        }
      break;
      case 'email':
        const isValid = validateEmail(e.target.value);
        if ((e.target.value).trim() && !isValid) {
          setErrorMessage('Your email is invalid.');
        } 
        else if(!(e.target.value).trim()){
          setErrorMessage('Missing email.');
        }
        else {
          setErrorMessage('');
        }
      break;
      case 'message':
        if (!(e.target.value).trim()) {
          setErrorMessage('Missing message.');
        } else {
          setErrorMessage('');
        }
      break;
      default:
        break;
    }


    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log('errorMessage', errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // JSX
  return (
    <section>
      <br></br>
      <h1 data-testid="testId-contact-h1">Contact me</h1>
      <br></br>
      <form className= "contact-form" id="contact-form" onSubmit={handleSubmit}>
        <div className="contact-flex">
          <label className="contact-flex-left" htmlFor="name">Name:</label>
          <input className="contact-flex-right" type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <br></br>
        <div className="contact-flex">
          <label className="contact-flex-left" htmlFor="email">Email address:</label>
          <input className="contact-flex-right" type="email" defaultValue={email} name="email" onBlur={handleChange} />
        </div>
        <br></br>
        <div className="contact-flex">
          <label className="contact-flex-left" htmlFor="message">Message:</label>
          <textarea className="contact-flex-right" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        <div>
        {errorMessage && (
            <p className="error-text">{errorMessage}</p>
        )}
        </div>
        <br></br>
        <button type="submit" data-testid="testId-contact-button">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;