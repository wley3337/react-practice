import React, { useState } from 'react';
import ThoughtInput from '../components/ThoughtInput.js'; 
import Thoughts from './Thoughts.js';

function App() {
  //here we use the useState hook to create our array of thoughts. This will be an array of strings. 
    const [ thoughts, modifyThoughts ] = useState([])

  return (
    <div className="App">
        <h1>Write your thoughts down</h1>

            {/* We passing down our callback function to ThoughtInput so that it can write to our array */}
            <ThoughtInput modifyThoughts={modifyThoughts} />

            {/* We pass down our thoughts so that they can be display in our container */}
            <Thoughts ourThoughts={thoughts} />
    </div>
  );
}

export default App;
