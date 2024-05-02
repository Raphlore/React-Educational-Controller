import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msgicon.png'
import mailicon from '../../assets/mailicon.jpg'
import phoneicon from '../../assets/phoneicon.jpg'
import locationicon from '../../assets/locationicon (1).jpg'
import arrow from '../../assets/arrow.jpg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7fdcf3d7-fa6d-442b-9642-b87bab3fb900");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msgicon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src={mailicon} alt=""/>Contact@GreatStack.dev</li>
          <li><img src={phoneicon} alt=""/>+234-809-234-9870</li>
          <li><img src={locationicon} alt=""/>21 Alfred Rewane Road, Ikoyi<br/> Lagos 02139, Nigeria</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your messages here</label>
          <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={arrow} alt=''/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
