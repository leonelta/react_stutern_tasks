import React from 'react'
import styles from './table.module.css';

const table = ({data}) => {
  return (
    <div className="container">
      {data.map((item) => (
         <div className='card' key={item.id}>
            <div className='image_card'>
              <img src={item.picture}alt=''/>
            </div>
            <div className='text_card'>
              <h1>{item.id}</h1>
              <div className="text">
                  <p>{item.title}</p>
                  <p>{item.firstName}</p>
                  <p>{item.lastName}</p>
              </div>
            </div>
         </div>
      ))}
    </div>
  );
}

export default table
