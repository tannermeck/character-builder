import './App.css'
import React, { useState } from 'react'
import Body from './presentation/Body.jsx'
import Image from './presentation/Image';

function App() {
  const [head, setHead] = useState('bird');
  const [torso, setTorso] = useState('black-blouse');
  const [legs, setLegs] = useState('blue-shorts');
  return (
    <>
    <h1 className="header">Build Your Own Character</h1>
      <div className="container">
        <div className="dropDown">
          <Body 
            head={head} 
            onHeadChange={setHead} 
            torso={torso}
            onTorsoChange={setTorso}
            legs={legs}
            onLegChange={setLegs}
            />
        </div>
        <div className="images">
          <Image head={head} torso={torso} legs={legs} />
        </div>
      </div>
    </>
  )
}

export default App;
