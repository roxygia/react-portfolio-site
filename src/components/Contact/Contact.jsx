import React, { useState, useEffect } from 'react';
import axios from "axios";
import Fade from 'react-reveal';
import video1 from '../../videos/video-1.mp4' 
import './Contact.css';

function Contact () {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/moqklqkv",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section className="contact">
      <video src={video1} autoPlay loop muted />
        <div>
          <h1>
           <Fade left={isDesktop} bottom={isMobile} duration={3000} delay={1000} distance="30px">
            Want to get in touch?
            </Fade>
          </h1>
          <Fade bottom duration={3000} delay={2000} distance="30px">
          <div className="medium-form">
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit" disabled={serverState.submitting}>
            Submit
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
      </Fade>
      </div>
      
    </section>
  );
};

export default Contact;
