import * as React from "react";
import {Link} from "react-router-dom";

const style = {
    paddingLeft: 20
};

const Work = (props: any) => (
    <div className="work_container">
     <div style={{background: "#daffef", padding: 15, boxShadow: "3px 3px 1px #616161", marginBottom: 35}}>
            <div className="heading"> Work Experience </div>

            <p className="title" style={{display: "inline-block"}}>Boeing</p> <span>Summer 2018 &ndash; Fairfax VA</span>
            <div style={style} >
                <ul>
                    <li>Software Engineering Internship</li>
                    <li>Active participant in a professional AGILE environment</li>
                    <li>Designed and developed interactive UI feature consisting of over 10 user stories </li>
                    <li>Developed multithreaded client-side and server-side code</li>
                    <li>Managed user story implementations using Git &amp; performed code reviews</li>
                    <li>Worked on multiple projects and stories in parallel</li>
                    <li>Ran daily standups of 10 participants</li>
                </ul>
            </div>

            <br />
            <p className="title" style={{display: "inline-block"}}> Somerville High School </p> <span> Summer 2015, 2016</span>
            <div style={style} >
                <ul>
                    <li> Supervised 4 employees (2016) </li>
                    <li> Performed IT work to setup school for upcoming year</li>
                </ul>
            </div>
        </div>
    </div> 
);

export default Work;
