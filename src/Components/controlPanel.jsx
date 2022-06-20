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
    const [style, setStyle] = useState ("linear")

    // Direction Variable
    const [direction, setDirection] = useState ("to right")

    // Color Variables
    const [color1, setColor1] = useState("rgba(56, 222, 219, 1)")
    const [color2, setColor2] = useState("rgba(212, 153, 250, 1)")

    return (
       <>
        <section className="panelButtons">
            <header className="panelHeader">
                <h2>Gradient Party</h2>
                <h3>CSS Gradient Generator</h3>
            </header>
            <div className="styleButtons">
                <h3 className="panelOption">Style</h3>
                <div className="flexButtons">
                    <button className="generalStyleButton" id="linear" onClick={() => setStyle("linear")}>Linear</button>
                    <button className="generalStyleButton" id="radial" onClick={() => setStyle("radial")}>Radial</button>
                </div>
            </div>
            <div className="directionButtons">
                <h3 className="panelOption">Direction</h3>
                <div className="arrowButtons">
                    <button className="styleArrowButton" onClick={() => setDirection("to top left")}><BsArrowUpLeft/></button>
                    <button className="styleArrowButton" onClick={() => setDirection("to top")}><BsArrowUp/></button>
                    <button className="styleArrowButton" onClick={() => setDirection("to top right")}><BsArrowUpRight/></button>
                    <button className="styleArrowButton" onClick={() => setDirection("to left")}><BsArrowLeft/></button>
                    <button className="styleArrowButton radialButton"><BsCircle/></button>
                    <button className="styleArrowButton" onClick={() => setDirection("to right")}><BsArrowRight/></button>
                    <button className="styleArrowButton" onClick={() => setDirection("to bottom left")}><BsArrowDownLeft/></button>
                    <button className="styleArrowButton" onClick={() => setDirection("to bottom")}><BsArrowDown/></button>
                    <button className="styleArrowButton" onClick={() => setDirection("to bottom right")}><BsArrowDownRight/></button>
                </div>
            </div>
            <div className="colorsButtons">
                <h3 className="panelOption">Colors</h3>
                <div className="flexButtons">
                    <input type="color" className="colorSelector" id="color1" onChange={e => setColor1(e.target.value)}/>
                    <input type="color" className="colorSelector" id="color2" onChange={e => setColor2(e.target.value)}/>
                    <button className="generalStyleButton">Random</button>
                </div>
            </div>
            <div className="outputButtons">
                <h3 className="panelOption">Output</h3>
                <div className="flexButtons">
                    <button className="generalStyleButton">Hex</button>
                    <button className="generalStyleButton">RGBA</button>
                </div>
            </div>
            <div className="getResultButtons">
                <button>Get CSS</button>
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