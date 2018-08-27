import * as React from "react"
import  {Link} from 'react-router-dom';

import ImageViewer from '../ImageViewer'

const images = [
    require("../resources/img/nextbeat/sc1.png"),
    require("../resources/img/nextbeat/sc2.png"),
    require("../resources/img/nextbeat/sc3.png"),
    require("../resources/img/nextbeat/sc4.png"),
    require("../resources/img/nextbeat/sc5.png"),
    require("../resources/img/nextbeat/sc6.png"),
    require("../resources/img/nextbeat/sc7.png"),
    require("../resources/img/nextbeat/sc8.png")
];

const NextBeat = (props: any) => {
    
    let elements = []

    for (let i = 0; i < images.length; i++) {
        elements[i] = 
        <div style={{paddingLeft: "1.6%", paddingRight:"1.6%", display:"inline-block", paddingBottom:"3.3%", width:"30%"}}>
            <img src={images[i]} width="100%" /> 
        </div>
        
        
    }

    return  (
        <div children={elements} style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}} />
    )
}

const NextBeat2 = (props: any) => {
    return <ImageViewer images={images} height={760} />
}

export default NextBeat2