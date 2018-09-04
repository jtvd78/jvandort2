import * as React from "react";
import ImageViewer from "../ImageViewer";
import {Switch, Route, Link} from "react-router-dom";

import NextBeat from "./NextBeat";
import Software from "./Software";

const WebGraphFrame = <iframe src="http://webgraph.jvandort.com" style={{flex: "1", height: 600, border:"none"}} />

const WebGraph = (props: any) => (
    <div style={{display: "flex", flexDirection:"column"}}>
        {WebGraphFrame}
        <div style={{justifyContent:"center", alignItems:"center", display:"flex", height: 120, flexDirection: "column"}}>
            <div style={{fontSize:"15pt"}}>
                <a href="http://webgraph.jvandort.com" style={{color: "black"}}>Fullscreen Demo</a>
            </div>
            <br />
            <div style={{fontSize:"15pt"}}>
                <a href="https://github.com/jtvd78/webgraph" style={{color: "black"}}>Github</a>
            </div>
           
        </div>
        
    </div>
);

const scheduleImages = [
    require("../resources/img/schedule/1.png"),
    require("../resources/img/schedule/2.png"),
    require("../resources/img/schedule/3.png")
];

const ScheduleBuilder = (props: any) => (
    <>
        <ImageViewer images={scheduleImages} height={650} />
        <div style={{justifyContent:"center", alignItems:"center", display:"flex", height: 60, flexDirection: "column"}}>
            <div style={{fontSize:"15pt"}}>
                <a href="https://github.com/jtvd78/schedule" style={{color: "black"}}>Github</a>
            </div>
        </div>
    </>
);

type ProjectRowProps = {
    name: string,
    language: string,
    platform: string,
    tech: string,
    date: string,
    href?: string,
    link?: string
};

const ProjectRow = (props: ProjectRowProps) => (
    <tr>
        {
            (props.href) ? 
                <td><a href={props.href}>{props.name}</a></td> :
                    (props.link) ? 
                        <td><Link to={props.link} >{props.name}</Link></td> :
                            <td>{props.name}</td>
        }
        <td>{props.language}</td>
        <td>{props.platform}</td>
        <td>{props.tech}</td>
        <td>{props.date}</td>
    </tr>
);

const ProjectsContent = (props: any) => {
    const rows = [
        ProjectRow({name: "UMD Schedule Builder", language: "Java", platform: "Swing", tech: "2D Graphics, HTML Scraping", date: "October 2015", link: "/proj/schedule"}),
        ProjectRow({name: "Next Beat", language: "Java", platform: "Android", tech: "RxJava, JSON", date: "September 2016", link: "/proj/nextbeat"}),
        ProjectRow({name: "Next Beat", language: "JavaScript", platform: "REST", tech: "Express.js, Oauth2, SQL", date: "October 2016", link: "/proj/nextbeat"}),
        ProjectRow({name: "Next Beat", language: "Swift", platform: "iOS", tech: "RxSwift", date: "February 2017", link: "/proj/nextbeat"}),
        ProjectRow({name: "OpenGL Test Application", language: "C++", platform: "Desktop", tech: "3D Graphics, OpenGL", date: "June 2017", href: "https://github.com/jtvd78/opengl"}),
        ProjectRow({name: "WebGraph", language: "Typescript", platform: "React", tech: "HTML Canvas", date: "January 2018", link:"/proj/webgraph"}),
        ProjectRow({name: "jvandort.com", language: "Typescript", platform: "React", tech: "Webpack", date: "March 2018"}),
        ProjectRow({name: "BitTorrent Client", language: "C++", platform: "Linux", tech: "Linux Sockets", date: "April 2018"})
    ];

    return (
        <>
            <div style={{padding: 30, display: "flex", justifyContent: "center"}}>
                <table style={{tableLayout: "auto", borderCollapse: "collapse"}} className="projects_table">

                    <tr style={{borderBottom: "1px solid black"}}>
                        <th>Project</th>
                        <th>Language</th>
                        <th>Platform</th>
                        <th>Technologies</th>
                        <th>Date Started</th>
                    </tr>

                    {rows}
                </table>
            </div>

            <div style={{width: "100%", display: "flex", justifyContent: "center"}} >
                <div style={{width: "75%", minWidth: 864}} className="software_container">
                    <Software />
                </div>
            </div>
        </>
    );
};


const Projects = (props: any) => (
    <Switch>
        <Route path="/proj/nextbeat" component={NextBeat}/>
        <Route path="/proj/webgraph" component={WebGraph}/>
        <Route path="/proj/schedule" component={ScheduleBuilder}/>
        <Route path="/proj/" component={ProjectsContent}/>
    </Switch>
);

export default Projects