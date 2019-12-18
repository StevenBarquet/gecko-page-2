import React from 'react';

// Others
// import { Col, Row, Button } from 'antd'

//Componentes

const GrowImg = (props) =>{
    const {src, label, margin} = props
    const style = {marginLeft: margin}
    return(
        <div style={style}>
            <div className="grow-img-container" >
                <img src={src} alt="idea" width="100%"/>
            </div>
            <h6>{label}</h6>  
        </div>
    )
}

export default GrowImg