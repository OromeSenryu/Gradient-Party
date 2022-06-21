import React, { Component } from "react";
import "./previewPanel.css"

const PreviewPanel = ({style, direction, color1, color2}) => {
return(
    <div className="gradientPreview"  
    style={{ 
    backgroundImage: `${style}(${direction}, ${color1}, ${color2})`
    }}>
    
</div>
)
}

export default PreviewPanel;