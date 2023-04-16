import React from 'react';
import './table.css';
const table = ({data}) => {
  return (
    <div>
      <section>
        <div className='container'>
          <div className='cards'>
            {data.map((item) => (
              
              <div className='text_card' key={item.id}>
                <div className='image_card'>
                   <img src={item.picture} alt=''/>
                </div>
                <div className="text">
                   <h5>{item.id}</h5>
                    <p>{item.title} {item.firstName} {item.lastName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default table
