import React from 'react';

export default function Body({ head, onHeadChange, torso, onTorsoChange, legs, onLegChange }){
    const headOptions = ['bird', 'cat', 'dog', 'goat', 'pig']
    const torsoOptions = ['black-blouse', 'blue-shirt', 'red-blouse', 'sweater', 'tuxedo']
    const legOptions = ['blue-shorts', 'grey-jeans', 'speedo', 'swimtrunks', 'elf']
    return (
    <>
        <section>
            <h1>Head:</h1>
            <div>
                <select value={head} onChange={(e) => onHeadChange(e.target.value)}>
                    {headOptions.map(option => {
                        return <option key={option}>{option}</option>
                    })}
                </select>
            </div>
        </section>
        <section>
            <h1>Torso:</h1>
            <div>
                <select value={torso} onChange={(e) => onTorsoChange(e.target.value)}>
                    {torsoOptions.map(option => {
                        return <option key={option}>{option}</option>
                    })}
                </select>
            </div>
        </section>
        <section>
            <h1>Legs:</h1>
            <div>
                <select value={legs} onChange={(e) => onLegChange(e.target.value)}>
                    {legOptions.map(option => {
                        return <option key={option}>{option}</option>
                    })}
                </select>
            </div>
        </section>
    </>
    )
}