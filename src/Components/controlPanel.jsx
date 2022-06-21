import React, { useState} from "react";
import "./controlPanel.css";
import { 
    BsArrowUpLeft, 
    BsArrowUp, 
    BsArrowUpRight, 
    BsArrowLeft, 
    BsArrowRight, 
    BsArrowDownLeft,
    BsArrowDown,
    BsArrowDownRight,
    BsCircle,
    BsGithub
 } from 'react-icons/bs';
import PreviewPanel from './PreviewPanel';



function ControlPanel () {

    // Style Variable
    const [style, setStyle] = useState ("linear-gradient")

    // Direction Variable
    const [direction, setDirection] = useState ("to right")

    // Color Variables
    const [color1, setColor1] = useState("#38DEDB")
    const [color2, setColor2] = useState("#D499FA")

    // Random Colors
    const randomColor = () => {
        const newRandomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
        const newRandomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
        setColor1(newRandomColor1);
        setColor2(newRandomColor2);
    }

    return (
       <>
        <section className="panelButtons">
            <header className="panelHeader">
                <h2>Gradient Party</h2>
                <h3>CSS Gradient Generator</h3>
            </header>
            <div className="styleSection">
                <h3 className="panelOption">Style</h3>
                <div className="styleButtons" onClick={(e) => { setStyle(e.target.dataset.style) }}>
                    <button className="generalStyleButton" id="linear" data-style="linear-gradient">Linear</button>
                    <button className="generalStyleButton" id="radial" data-style="radial-gradient">Radial</button>
                </div>
            </div>
            <div className="directionSection">
                <h3 className="panelOption">Direction</h3>
                <div className="directionButtons" onClick={(e) => { style === "radial-gradient" ? setDirection(e.target.dataset.radialdirection) : setDirection(e.target.dataset.lineardirection) }}>
                    <button data-lineardirection="to top left" data-radialdirection="at top left"><BsArrowUpLeft/></button>
                    <button data-lineardirection="to top" data-radialdirection="at top"><BsArrowUp/></button>
                    <button data-lineardirection="to top right" data-radialdirection="at top right"><BsArrowUpRight/></button>
                    <button data-lineardirection="to left" data-radialdirection="at left"><BsArrowLeft/></button>
                    <button data-radialdirection="circle at center" style={{ visibility: style === "radial-gradient" ? "visible" : "hidden" }}><BsCircle/></button>
                    <button data-lineardirection="to right" data-radialdirection="at right"><BsArrowRight/></button>
                    <button data-lineardirection="to bottom left" data-radialdirection="at bottom left"><BsArrowDownLeft/></button>
                    <button data-lineardirection="to bottom" data-radialdirection="at bottom"><BsArrowDown/></button>
                    <button data-lineardirection="to bottom right" data-radialdirection="at bottom right"><BsArrowDownRight/></button>
                </div>
            </div>
            <div className="colorsButtons">
                <h3 className="panelOption">Colors</h3>
                <div className="styleButtons">
                    <input type="color" className="colorSelector" value={color1} onChange={(e) => setColor1(e.target.value)}/>
                    <input type="color" className="colorSelector" value={color2} onChange={(e) => setColor2(e.target.value)}/>
                    <button className="generalStyleButton" onClick={randomColor}>Random</button>
                </div>
            </div>
            <div className="outputButtons">
                <h3 className="panelOption">Output</h3>
                <div className="styleButtons">
                    <button className="generalStyleButton">Hex</button>
                    <button className="generalStyleButton">RGBA</button>
                </div>
            </div>
            <div className="getResultButtons">
                <button>Get CSS</button>
                <button>Get Share Link</button>
                <button>Save template</button>
            </div>
            <footer className="panelFooter">
                <h4>Join the party!</h4>
                <h4><BsGithub/> OromeSenryu</h4>
            </footer>
        </section>
        <PreviewPanel 
            style={style}
            direction={direction}
            color1={color1} 
            color2={color2} 
            
        />
           
       </>
    )
}

export default ControlPanel;