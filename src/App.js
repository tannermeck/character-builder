import './App.css'
import React, { useState } from 'react'
import Body from './presentation/Body/Body.jsx'
import Image from './presentation/Image/Image';
import Catchphrase from './presentation/Catchphrase/Catchphrase';

function App() {
  const [head, setHead] = useState('bird');
  const [torso, setTorso] = useState('black-blouse');
  const [legs, setLegs] = useState('blue-shorts');
  const [catchphrase, setCatchphrase] = useState('');
  const [catchphraseList, setCatchphraseList] = useState([])

  const handleClick = () => {
    setCatchphraseList((prevState) => [ ...prevState, catchphrase])
  }

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
            handleClick={handleClick}
            setCatchphrase={setCatchphrase}
            />
        </div>
        <div className="images">
          <Image head={head} torso={torso} legs={legs} />
        </div>
        <div className="catchphraseContainer">
          <Catchphrase catchphraseList={catchphraseList}/>
        </div>
      </div>
    </>
  )
}

export default App;
