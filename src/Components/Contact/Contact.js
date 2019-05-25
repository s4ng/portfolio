import React from 'react';
import './Contact.css';
import Github from '../Project/Row/image/github-logo.svg';

const Contact = () => (
  <div className="Contact" id="c">
  <h1 className="Contact_hedding">CONTACT!</h1>
  <p className="Email"> Email : zalcls951201@gmail.com </p>
 <a href="https://github.com/s4ng"> <img src={Github} alt="github" className="Github"></img></a>
  </div>
);


export default Contact;