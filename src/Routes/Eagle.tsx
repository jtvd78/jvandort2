import * as React from "react";
import {Link} from "react-router-dom";

import ImageViewer from "../ImageViewer";

const images  = [
    require("../resources/img/eagle/dur1.jpg"),
    require("../resources/img/eagle/dur2.jpg"),
    require("../resources/img/eagle/dur3.jpg"),
    require("../resources/img/eagle/new1.jpg"),
    require("../resources/img/eagle/new2.jpg"),
    require("../resources/img/eagle/old1.jpg"),
    require("../resources/img/eagle/old2.jpg"),
];

const Eagle = (props: any) => {
    return (
        <div className="eagle_container">
            <div className="heading">Eagle Scout Project</div>
            <br />
            <ImageViewer images={images} height={500} />
        </div>
    );
};

export default Eagle;
