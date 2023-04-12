import React from 'react';
import './App.css';
import { useState } from 'react';
import Table from './table';
import { Users } from './users';

function App() {

  const [query, setQuery] = useState("");

  const keys = ["id", "firstName", "lastName"]

  const search = (data) => {
    return data.filter(
      (item) => keys.some()
    )

  }

  return ( 

    <div className="App">

      <div className="search_container">
          <input 
            type='text' 
            placeholder='Search by name...' 
            className='search' 
            onChange={(event) => setQuery(event.target.value)}
            />
      </div>

      <Table data={Users} />

    </div>
  );
}

export default App;
