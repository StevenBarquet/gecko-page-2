import React from 'react';

// Others
// import { Col, Row, Button } from 'antd'

//Componentes

const GrowImg = (props) =>{
    const {src, label, span, title} = props
    return(
        <div className="grow-container">
            <div className="left-title-carousel" >{title}</div>
            <div className="grow-img-container" >
                <img src={src} alt="idea" width="100%"/>
            </div>
            <h6>{label}</h6>
            <div className="grow-bottom-bar" />
        </div>
    )
}

export default GrowImg