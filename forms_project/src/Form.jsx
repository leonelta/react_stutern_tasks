import React, { useState } from "react";


function Form() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

  return (
    <div  className='container'>
        <form> 
            <h1>Contact Us</h1>
            <div className="form-inputs">
              <label htmlFor="name" className="form-label">Name</label> 
              <input type="text" name="Name" id="" className="form-input" placeholder="Enter your name" />
            </div>
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">Email</label> 
              <input type="email" name="Email" id="" className="" placeholder="Enter your email"/>
            </div>
            <div className="form-inputs">
              <label htmlFor="subject" className="form-label">Subject</label> 
              <input type="text" name="Subject" id="" className="" placeholder="Enter your subject"/>
            </div>
            <div className="form-inputs">
              <label htmlFor="message" className="form-label">Message</label> 
              <textarea name="Message" id="" className="" cols={20} rows={10} placeholder="Type here ..." />
            </div>
            <button className="bottom" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form