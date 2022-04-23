import React from 'react'

import AddNumberRoot from '../AddNumberRoot';
import DisplayNumberRoot from '../DisplayNumberRoot';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot />
    </div>
  );
}

export default App;


/* PURE REACT */

/*
    import React, { useState } from 'react'

    import AddNumberRoot from '../AddNumberRoot';
    import DisplayNumberRoot from '../DisplayNumberRoot';

    import './App.css';

    function App() {
      const [numberToDisplay, setNumberToDisplay] = useState(0)
      return (
        <div className="App">
          <h1>Root</h1>
          <AddNumberRoot 
            plusOne={()=>setNumberToDisplay(numberToDisplay+1)} 
            minusOne={()=>setNumberToDisplay(numberToDisplay-1)} 
            plus100={()=>setNumberToDisplay(numberToDisplay+100)}
          />
          <DisplayNumberRoot numberToDisplay={numberToDisplay}/>
        </div>
      );
    }

    export default App;
*/
