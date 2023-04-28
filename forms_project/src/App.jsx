import React from 'react';
import './App.css';
import axios from 'axios';
import { useForm } from "react-hook-form";


function App() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    trigger
  } = useForm();

  const submitHandler = (data) => {
    axios.post("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries", {
         data,
    })
    .then(response => {
      console.log(response);
      reset()
    })
    .catch(errors => {
      console.log(errors);
    })
  }

  return (
    <div className="container">
        <form method='post' onSubmit={handleSubmit(submitHandler)} className="form"> 
          <h1>Contact Us</h1>
          <div className="form-inputs">
            <label htmlFor="name" className="form-label">Name</label> 
            <input 
              type="text" 
              name="name"  
              className={`form-input ${errors.name && "invalid"}`}
              placeholder="Enter your name" 
              {...register("name",  { required: "Name is required" })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            {errors.name && (<p className='text'>{errors.name.message}</p>)}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">Email</label> 
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Enter your email"
              {...register("email",  { 
                required: "Email is required",  
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
              }})}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (<p className='text'>{errors.email.message}</p>)}

          </div>
          <div className="form-inputs">
            <label htmlFor="subject" className="form-label">Subject</label> 
            <input 
              type="text" 
              name="subject" 
              className="form-input" 
              placeholder="Enter your subject" 
              {...register("subject",  { required: "Subject is required" })}
              onKeyUp={() => {
                trigger("subject");
              }}
            />
            {errors.subject && (<p className='text'>{errors.subject.message}</p>)}

          </div>
          <div className="form-inputs">
            <label htmlFor="message" className="form-label">Message</label> 
            <textarea 
              name="message" 
              className="form-textarea" 
              cols={20} 
              rows={10} 
              placeholder="Type here ..."
              {...register("message",  { required: "Message is required" })}
              onKeyUp={() => {
                trigger("message");
              }}
            />
           {errors.message && (<p className='text'>{errors.message.message}</p>)}

          </div>
          <button className="bottom" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
