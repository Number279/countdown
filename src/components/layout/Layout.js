import React, { useState }from 'react';
// import './App.css'
import '../timer/Timer'
import Timer from '../timer/Timer';

const Layout = () =>  {

  let [customStart, setCustomStart] = useState('');

  const onChange = (e) => {
    setCustomStart(e.target.value)
  };

    return (
        <div>
          <h3>
            Enter start time for timer here (in seconds): 
           <input value={customStart} onChange={onChange} />
           <button type = "submit">Set Timer</button>
          </h3>
          <Timer customStart = {customStart} />
        </div>
      );
    }

export default Layout