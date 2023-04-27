import React, { useState } from "react";


function Form() {

    const [data, setData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    }
    
    const [errors, setErrors] = useState({})
  return (
    <div  className='container'>
        <form method='post' onSubmit={handleSubmit}> 
            <h1>Contact Us</h1>
            <div className="form-inputs">
              <label htmlFor="name" className="form-label">Name</label> 
              <input 
                type="text" 
                name="name" 
                id="" 
                onChange={handleChange} 
                value={data.name}
                className="form-input"
                placeholder="Enter your name" />
            </div>
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">Email</label> 
              <input 
                type="email" 
                name="email" 
                id="" 
                onChange={handleChange} 
                value={data.email}
                className="" 
                placeholder="Enter your email"/>
            </div>
            <div className="form-inputs">
              <label htmlFor="subject" className="form-label">Subject</label> 
              <input 
                type="text" 
                name="subject" 
                id="" 
                onChange={handleChange}
                value={data.subject} 
                className="" 
                placeholder="Enter your subject"
              />
            </div>
            <div className="form-inputs">
              <label htmlFor="message" className="form-label">Message</label> 
              <textarea 
                name="message" 
                id="" className="" 
                onChange={handleChange} 
                value={data.message}
                cols={20} 
                rows={10} 
                placeholder="Type here ..." />
            </div>
            <button className="bottom" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form