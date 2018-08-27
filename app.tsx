import * as ReactDOM from "react-dom"
import * as React from "react"
import { withRouter } from 'react-router'
import  {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Software from './Routes/Software'
import Achievements from './Routes/Achievements'
import Work from './Routes/Work'
import Eagle from './Routes/Eagle'
import NextBeat from './Routes/NextBeat'
import Timeline from './Timeline'

type BarProps = {
    rating: number,
    text: string,
    color: string
}

function componentToHex(c: number) {
    var hex = Math.round(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const hexToRgb = (hex: string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const shade = (color: string, shade: number) => {
    const rgb = hexToRgb(color);
    if (rgb) {
        const factor = 1.0 - shade;
        return rgbToHex(rgb.r * factor, rgb.g * factor, rgb.b * factor);
    }

}

const ProgressBar = (props: BarProps) => {

    const percent = props.rating / 5.0 * 100;
    const padding = 5;

    const tint = 0.2;

    const color2 = '#889988';
    const color1 = shade(color2, tint);

    
    //#465298

    const color3 = props.color;
    const color4 = shade(color3, tint)

    const fill       = "repeating-linear-gradient( 45deg, " + color3 + ", " + color3 + " 10px, " + color4 + " 10px, " + color4 + " 20px)";
    const background = "repeating-linear-gradient( 45deg, " + color2 + ", " + color2 + " 10px, " + color1 + " 10px, " + color1 + " 20px)";
   
    const border = "3px solid black"


    return (
        <div style={{
            display:"flex", 
            paddingTop: padding, 
            paddingBottom: padding 
        }} >

            <div style={{
                borderRadius:10, 
                height:35, 
                width:400, 
                position:"relative", 
                overflow:"hidden", 
                display:"inline-block",
                border: border,
                boxSizing: "border-box"
            }} >
                <div style={{
                    width:"100%",
                    background: background,
                    height:"100%",
                    position:"absolute"
                }} />
                <div style={{
                    width: percent + "%",
                    background: fill,
                    height:"100%",
                    position:"absolute",
                    borderRight: "3px solid black"
                }} />
            </div>

            <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:90, fontWeight:"bold", fontSize:"15pt"}}>
                {Math.round( percent * 10) / 10 / 100 * 5}/5
            </div>

            <div style={{display:"flex", alignItems:"center", justifyContent:"center", fontWeight:"bold", fontSize:"15pt"}}>
                {props.text}
            </div>   

        </div>
        
    )
}

const Bars = (props: any) => {

    return (
        <div style={{background:'#daffef', padding:15, boxShadow:"3px 3px 1px #616161", marginBottom:35}}>
            <div className="heading"> Skillset </div>
            <br />

            <ProgressBar rating={4} color='#5e81ff' text="Java"/>
            <ProgressBar rating={3.5} color='#5e81ff' text="JavaScript" />
            <ProgressBar rating={3} color='#5e81ff' text="TypeScript" />
            <ProgressBar rating={3} color='#5e81ff' text="C++"/>
            <ProgressBar rating={2.5} color='#5e81ff' text="Swift (iOS)" />
            <ProgressBar rating={2.5} color='#5e81ff' text="Python"/>
            <ProgressBar rating={2.5} color='#5e81ff' text="PHP"/>
            <ProgressBar rating={2} color='#5e81ff' text="C"/>

            <br />
            <br />

            <ProgressBar rating={3.5} color='#D3A13D' text="JavaFX" />
            <ProgressBar rating={3} color='#D3A13D' text="Android"/>
            <ProgressBar rating={3} color='#D3A13D' text="React"/>
            <ProgressBar rating={2.5} color='#D3A13D' text="iOS"/>
            
            
            
        </div>
    )
}



const Education = (props: any) => {

    return (
        <div style={{background:'#daffef', padding:15, boxShadow:"3px 3px 1px #616161", marginBottom:35}}>
            <div className="heading"> Education </div>

            <ul>
                <li>GPA: 3.7</li>
                <li>Major: Computer Engineering</li>
                <li>University: University of Maryland</li>
                <li>Senior - Expected Graduation 2019</li>
            </ul>
        </div>
    )
}



const Home = (props: any) => (   
    <div>
        <div className="heading"> Justin Van Dort </div>

       

        <p>           
           I began developing software early in high school, and have since taught myself Java,
           C++, Swift, HTML/CSS/JS, and Python.   
            
            I am a 3rd year computer engineering student at the University of Maryland. I began
            programming early in high school, and have since taught myself Java, HTML/CSS/JS, PHP,
            C++, SQL, Swift, and some Python. With these languages, I have developed native Android
            and iOS applications (in Java and Swift), learned React/Redux and OpenGL, and have
            created several independent GUI-based application in Java/Swing. I have become
            comfortable developing web pages and REST APIs through Node.js/Express.js, and have used
            JQuery, React, and stanard JavaScript to develop front-end applications. Here, you can
            find my online resume, which includes my education and achievements, as well as my past
            and current projects.
        </p>
        <p>
            I am looking to achieve a position in Engineering, Computer Science, or IT, that would
            enable me to leverage my technical abilities while also allowing me to gain experience
            in a professional work environment.
        </p>


        <br />
        <br />

        <div className="split">
            <div className="half">
                <Work />
            </div>
            <div className="half">
                <Education />
            </div>
        </div>
       

        <div className="split">
            <div className="half">
                <Bars />
            </div>
            <div className="half">
                <Timeline />
            </div>
        </div>
    </div>
)

const ProjectsHeader = (props: any) => {

    let path = props.location.pathname.split("/");
    if (path[1] != "proj") {
        return None
    }

    return (
        <div style={{textAlign:"center"}} className="projects_list">
            <Link to="/proj/nextbeat">
                <div className={"projects_item " + (path[2] == "nextbeat" ? "projects_item_selected" : "")}>
                    <span>Next Beat</span>
                </div>
            </Link>
            <div className="dot"> &middot;</div>
            <Link to="/proj/webgraph">
                <div className={"projects_item " + (path[2] == "webgraph" ? "projects_item_selected" : "")}>
                    <span>Webgraph</span>
                </div>
            </Link>
            <div className="dot"> &middot;</div>
            <Link to="/proj/schedule">
                <div className={"projects_item " + (path[2] == "schedule" ? "projects_item_selected" : "")}>
                    <span>Schedule Builder</span>
                </div>
            </Link>
        </div>
    );
}

const WebGraph = (props: any) => (
    <div style={{display:"flex"}}>
        <div >

        </div>
        <iframe src="webgraph.jvandort.com" style={{flex:"1", height: 400}}/>
    </div>
)

const ScheduleBuilder = (props: any) => (
    <div>
        Schedule
    </div>
)

const ProjectsContent = (props: any) => (
    <div className="item_container project_item_container">
        <Link to="/proj/nextbeat">
            <div className="item project_item">
                <img src={require("./resources/img/proj/nextbeat_logo.png")} width="250"/>
                <div className="project_title" style={{color:"white"}}>
                    NextBeat
                </div>
            </div>
        </Link>
        
        <Link to="/proj/webgraph">
            <div className="item project_item">                
                    <img src={require("./resources/img/proj/nextbeat_logo.png")} width="250"/>
                    <div className="project_title" style={{color:"white; text-decoration:none"}}>
                        WebGraph
                    </div>
            </div>
        </Link>

         <Link to="/proj/schedule">
            <div className="item project_item">                
                    <img src={require("./resources/img/proj/nextbeat_logo.png")} width="250"/>
                    <div className="project_title" style={{color:"white; text-decoration:none"}}>
                        UMD Schedule Builder
                    </div>
            </div>
        </Link>
        
    </div>
)

const Projects = (props: any) => (
    <div>
        <Switch>
            <Route path="/proj/nextbeat" component={NextBeat}/>
            <Route path="/proj/webgraph" component={WebGraph}/>
            <Route path="/proj/schedule" component={ScheduleBuilder}/>
            <Route path="/proj/" component={ProjectsContent}/>
        </Switch>
    </div>
)

const Header = (props: any) => {

    let path = props.location.pathname.split("/",)[1];

    return (
    <div className="header">
        <div className="header_content"> 
            <Link to="/home">
                <div className={"header_item " + ((path === '' || path == 'home')? "header_item_selected" : "")} >
                    Home
                </div>
            </Link>
            <div className="dot"> &middot;</div>
            <Link to="/soft">
                <div className={"header_item " + (path === 'soft' ? "header_item_selected" : "")} >
                    Software
                </div>
            </Link>
            <div className="dot"> &middot;</div>
            <Link to="/proj">
                <div className={"header_item " + (path === 'proj' ? "header_item_selected" : "")} >
                    Projects
                </div>
            </Link>
            <div className="dot"> &middot;</div>
            <Link to="/ach">
                <div className={"header_item " + (path === 'ach' ? "header_item_selected" : "")} >
                        Achievements
                </div>
            </Link>
            
            <div className="dot"> &middot;</div>
            <Link to="/eagle">
                <div className={"header_item " + (path === 'eagle' ? "header_item_selected" : "")} >
                    Eagle
                </div>
            </Link>
            
        </div>
    </div> )
}

const HeaderWithRouter = withRouter(Header);

const None = (props: any) => (
    <div>
    </div>
)

const Container = () => (
    <div className="content_container">
        <div className="content_spacer">
                <Switch>
                    <Route path="/proj" component={ProjectsHeader} />
                    <Route path="/" component={None}/>
                </Switch>
            <div className="content"> 
                <Switch>
                    <Route path="/eagle" component={Eagle} />
                    <Route path="/ach" component={Achievements} />
                    <Route path="/proj" component={Projects} />
                    <Route path="/soft" component={Software} />
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </div>
    </div>
)

const App = () => (
    <div>
        <HeaderWithRouter />
        <Container />
    </div>
)

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'))