import React, { useState } from "react"

const randomColor = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9"]

export default function ColorPicker(){
    //statefull component
    //function component
    //statefull functional component

    const [color, setColor] = useState('#FFFFFF')
    
    function getRandomNumber(){
        return Math.floor(Math.random() * randomColor.length)
    }

    //function to get random hex code
    function getRandomColor(){
        let hex = "#"
        for(let i = 0; i < 6; i++){
            hex += randomColor[getRandomNumber()]
        }
        return hex
    }

    //function to handle random color changes
    function randomColorChange(){
        setColor(getRandomColor())//setter or mutator for our state => color
    }

    //function handle color changes
    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <>
            <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor : color}}>
                    <p>Selected color : {color}</p>
                </div>
                <label>Select A Color</label>
                <input type="color" value={color} onChange={handleColorChange} />
                <button className="randomize" onClick={randomColorChange}>Randomize</button>
            </div>
        </>
    )
}