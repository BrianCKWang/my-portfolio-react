import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
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
    <>
    <section>
      <h1 data-testid="testId-contact-h1">Contact me</h1>
      <div>
        <address>
          <a href="mailto:brian.ck.wang@gmail.com">brian.ck.wang@gmail.com</a>
            <a href="https://github.com/BrianCKWang/" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/chun-kai-brian-wang-292b6b48/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
                Linkedin
            </a>
        </address>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" data-testid="testId-contact-button">Submit</button>
      </form>
    </section>
    </>
  )
}

export default ContactForm;