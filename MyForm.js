import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const MyForm = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_89gdvbs', 'template_3glegwi', form.current, 'MSGCYoSROtzhu9N_D')
      .then((result) => {
        console.log(result.text);
        setIsMessageSent(true);
        form.current.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send Message" />

      {isMessageSent && (
        <p>Message sent successfully! </p>
      )}
    </form>
  );
};

export default MyForm;
