'use client';

import './Contact.css';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setStatus('Error sending message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="contact-container">
      {isSubmitted ? (
        <div className="thank-you-message">
          <h2>Thank you for contacting me!</h2>
          <p>I'll be in touch shortly.</p>
        </div>
      ) : (
        <>
          <h1 className="contact-title">Get in Touch</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </>
      )}
    </div>
  );
}