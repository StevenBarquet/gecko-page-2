import React from 'react';

const TechIcon = props =>{
    const {src, label} = props
    return(
        <div className="tech-container" >
            <div className="tech-img-container" ><img src={src} alt="react-logo" width="100%"/></div>
            <p>{label}</p>
        </div>
    )
}

export default TechIcon