import React, { useEffect, useState} from "react";
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
import { CopyToClipboard } from "react-copy-to-clipboard"



function ControlPanel () {

    // Style Variable
    const [style, setStyle] = useState("linear-gradient")
    const [linearStyle, setLinearStyle] = useState(true)

    // Direction Variable
    const [direction, setDirection] = useState("to right")

    // Color Variables
    const [color1, setColor1] = useState("#38DEDB")
    const [color2, setColor2] = useState("#D499FA")

    // Output Variables
    const [output, setOutput] = useState (`backgroundImage: ${style}( ${direction}, ${color1}, ${color2})`)
    const [hexOutput, setHexOutput] = useState(true)

    // Text on CSS button variables
    const getCSSText = "Get CSS"
    const [buttonText, setButtonText] = useState(getCSSText)


    // useEffect danger zone
    useEffect(() => {
        if(linearStyle === true){
            setStyle("linear-gradient")
            setDirection("to right")
        } else {
            setStyle("radial-gradient")
            setDirection("circle at center")
        }
      },[linearStyle]);

    useEffect(() => {
        if(hexOutput === true){
            setOutput(`backgroundImage: ${style}( ${direction}, ${color1}, ${color2})`)
        } else {
            setOutput(`backgroundImage: ${style}( ${direction}, ${convertColor(color1)}, ${convertColor(color2)})`)
        }
    }, [hexOutput]);
    
    // Random Colors function
    const randomColors = () => {
        const newRandomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
        const newRandomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
        setColor1(newRandomColor1);
        setColor2(newRandomColor2);
    }

    // Converting Hex to RGBA
        const convertColor = (hexCode, opacity = 1) => {  
            let hex = hexCode.replace('#', '');
            
            if (hex.length === 3) {
                hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
            }    
            
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            
            if (opacity > 1 && opacity <= 100) {
                opacity = opacity / 100;   
            }
        
            const rgba = `rgba(${r},${g},${b},${opacity})`

            return rgba
        }

    // Function modifying text on Get Css Button
    function handleClickCSS() {
        setButtonText("Copied to clipboard!")

        setTimeout(() =>{
            setButtonText(getCSSText)
        }, 1000) // Set time before changing text back 
    }

    // Function for conditioning style
    function changeStyle (changeStyle){ // Get a bool indicating if it's linear
        if ( changeStyle !== linearStyle ) {
            // If the new parameter is different than the one already on, changes linearStyle state to the parameter incoming
            setLinearStyle(changeStyle)
        } 
    }

    // Function for conditioning output
    function changeOutput (changeOutput){ // Get a bool indicating if it's on hex output
        if (changeOutput !== hexOutput) {
            // If the new parameter is different than the one already on, changes hexOutput to the parameter incoming
            setHexOutput(changeOutput)
        }
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
                <div className="styleButtons" >
                    <button onClick={(e) => { changeStyle(true)}}  className="generalStyleButton" id="linear" data-style="linear-gradient">Linear</button>
                    <button onClick={(e) => { changeStyle(false) }} className="generalStyleButton" id="radial" data-style="radial-gradient">Radial</button>
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
                    <button className="generalStyleButton" onClick={randomColors}>Random</button>
                </div>
            </div>
            <div className="outputButtons">
                <h3 className="panelOption">Output</h3>
                <div className="styleButtons">
                    <button onClick={() => {changeOutput(true)}} className="generalStyleButton">Hex</button>
                    <button onClick={() => {changeOutput(false)}} className="generalStyleButton">RGBA</button>
                </div>
            </div>
            <div className="getResultButtons">
                <CopyToClipboard text={output}>
                <button onClick={handleClickCSS}>{buttonText}</button>
                </CopyToClipboard>
            </div>
            <footer className="panelFooter">
                <h4>Join the party!
                    <br></br>
                    <a className="githubLink" href="https://github.com/OromeSenryu"><BsGithub/> OromeSenryu</a>
                </h4>
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