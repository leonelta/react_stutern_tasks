import React from 'react';
import './App.css';
import { useState } from 'react';
import Table from './Table';
import { Users } from './users';

function App() {

  const [query, setQuery] = useState("");

  const keys = ["id", "firstName", "lastName"]

  const search = (data) => {
    return data.filter(
      (item) => keys.some((key) => item[key].toLowerCase().includes(query))
    )

  }

  return ( 

    <div className="App">

     <div className="container">
          <div className="search_container">
                <input 
                  type='text' 
                  placeholder='Search by name...' 
                  className='search' 
                  onChange={(event) => setQuery(event.target.value)}
                  />
            </div>

            <Table data={search(Users)} />

     </div>
    </div>
  );
}

export default App;
