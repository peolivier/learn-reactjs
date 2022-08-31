
using Google Font `Poppins`  
https://fonts.google.com/specimen/Poppins?query=poppins  


using `React icons`  
https://react-icons.github.io/react-icons/  
```sh
npm install react-icons --save
```

using `SwipperJS`  
https://swiperjs.com/react  
```sh
npm i swiper
```

Tool proposed `EmailJS`  
https://www.emailjs.com/  
use with React - https://www.emailjs.com/docs/examples/reactjs/  
```js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    //reset the form
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
```

# Deployment our portfolio website

in `package.json`
```json
{
  "name": "yt-portfolio-website-1",
  "homepage": "http://<your.claimed.domain.here>",
  "version": "0.1.0",
  ...
}
```
build the project for production
```sh
npm run build
```