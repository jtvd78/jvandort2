import * as React from "react"
import  {Link} from 'react-router-dom';

import Eagle from "./Eagle";

const Achievements = (props: any) => (
    <>
        <div className="ach_container">
            <Link to="#"><div className="ach">
                <p>Eagle Scout</p>
                <img src={require("../resources/img/eagle_logo.png")} />
            </div></Link>
            <a href="https://financialaid.umd.edu/scholarships/presidents_info.html"><div className="ach">
                <p>Predidential Scholarship at UMD</p>
                <img src={require("../resources/img/umd_logo.png")} />
            </div></a>
            <a href="https://eng.umd.edu/deans-list"><div className="ach">
                <p>Deans List Every Semester</p>
                <img src={require("../resources/img/umd_logo_2.png")} />
            </div></a>
            <a href="https://www.padi.com/courses/rescue-diver"><div className="ach">
                <p>PADI Certificed Rescue Diver</p>
                <img src={require("../resources/img/padi_logo.png")} />
            </div></a>
            
        </div>
        <div style={{padding:10}}>
            <Eagle />
        </div>
        
    </>
)

export default Achievements