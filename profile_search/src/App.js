import React from 'react';
import './App.css';
import {data} from './data.js';

function App() {

  const [User, setUser] = useState("");
  
  return ( 

    <div className="App">

      <div className="search_container">
          <input type='text' placeholder='Search by name...' className='search'/>
      </div>

      <div className="container">

        <ul className="list">
          <li className="listItem"></li>
        </ul>

      </div>

    </div>
  );
}

export default App;
