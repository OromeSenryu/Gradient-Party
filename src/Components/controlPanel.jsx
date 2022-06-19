import React from "react";
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
    BsGithub
 } from 'react-icons/bs';



function ControlPanel () {

    return (
        <section className="panelButtons">
            <header className="panelHeader">
                <h2>Gradient Party</h2>
                <h3>CSS Gradient Generator</h3>
            </header>
            <div className="styleButtons">
                <h3 className="panelOption">Style</h3>
                <div className="flexButtons">
                    <button className="generalStyleButton">Linear</button>
                    <button className="generalStyleButton">Radial</button>
                </div>
            </div>
            <div className="directionButtons">
                <h3 className="panelOption">Direction</h3>
                <div className="arrowButtons">
                    <button className="styleArrowButton"><BsArrowUpLeft/></button>
                    <button className="styleArrowButton"><BsArrowUp/></button>
                    <button className="styleArrowButton"><BsArrowUpRight/></button>
                    <button className="styleArrowButton"><BsArrowLeft/></button>
                    <div className="emptybtn"></div>
                    <button className="styleArrowButton"><BsArrowRight/></button>
                    <button className="styleArrowButton"><BsArrowDownLeft/></button>
                    <button className="styleArrowButton"><BsArrowDown/></button>
                    <button className="styleArrowButton"><BsArrowDownRight/></button>
                </div>
            </div>
            <div className="colorsButtons">
                <h3 className="panelOption">Colors</h3>
                <div className="flexButtons">
                    <button className="generalStyleButton">Color 1</button>
                    <button className="generalStyleButton">Color 2</button>
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
                <button>Get Share Link</button>
            </div>
            <footer className="panelFooter">
                <h4>Join the party!</h4>
                <h4><BsGithub/> OromeSenryu</h4>
            </footer>
        </section>
    )
}

export default ControlPanel;