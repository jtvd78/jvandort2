import * as React from "react";
import * as ReactDOM from "react-dom";

import { withRouter } from "react-router";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Achievements from "./Routes/Achievements";
import Projects from "./Routes/Projects";
import Home from "./Routes/Home";

import "./index.scss";

const ProjectsHeader = (props: any) => {

    const path = props.location.pathname.split("/");
    if (path[1] !== "proj") {
        return <None />;
    }

    return (
        <div style={{textAlign: "center"}} className="projects_list">
            <Link to="/proj/nextbeat">
                <div className={"projects_item " + (path[2] === "nextbeat" ? "projects_item_selected" : "")}>
                    <span>Next Beat</span>
                </div>
            </Link>
            <div className="dot"> &middot;</div>
            <Link to="/proj/webgraph">
                <div className={"projects_item " + (path[2] === "webgraph" ? "projects_item_selected" : "")}>
                    <span>Webgraph</span>
                </div>
            </Link>
            <div className="dot"> &middot;</div>
            <Link to="/proj/schedule">
                <div className={"projects_item " + (path[2] === "schedule" ? "projects_item_selected" : "")}>
                    <span>Schedule Builder</span>
                </div>
            </Link>
        </div>
    );
}

const Contact = (props: any) => (
    <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQD_Ug3NQj97Ahh8pHwmdplX8I3Btbcwdd7H0AdnHPWIVCUw/viewform?embedded=true" style={{border:"none", width:"100%", height: 600}}>Loading...</iframe>
    </div>    
);

const Header = (props: any) => {

    const path = props.location.pathname.split("/", )[1];

    return (
        <div>
            <div className="header">
                <div className="header_content">
                    <Link to="/home">
                        <div className={"header_item " + ((path === "" || path === "home") ? "header_item_selected" : "")} >
                            Home
                        </div>
                    </Link>
                    <div className="dot"> &middot;</div>
                    <Link to="/proj">
                        <div className={"header_item " + (path === "proj" ? "header_item_selected" : "")} >
                            Projects
                        </div>
                    </Link>
                    <div className="dot"> &middot;</div>
                    <Link to="/ach">
                        <div className={"header_item " + (path === "ach" ? "header_item_selected" : "")} >
                                Achievements
                        </div>
                    </Link>
                    <div className="dot"> &middot;</div>
                    <Link to="/contact">
                        <div className={"header_item " + (path === "contact" ? "header_item_selected" : "")} >
                            Contact
                        </div>
                    </Link>
                </div>
            </div>

            <Switch>
                <Route path="/proj" component={ProjectsHeader} />
                <Route path="/" component={None}/>
            </Switch>
        </div>
    );
};


const None = (props: any) =>  <div />

const Container = () => {
    
    return (
        <div className="content_container">
            <div className="content_spacer">
                <div style={{paddingLeft: 40, paddingRight: 40}}>
                    <div className="content">
                        <div className="content_bg">
                            <Switch>
                                <Route path="/ach" component={Achievements} />
                                <Route path="/proj" component={Projects} />
                                <Route path="/contact" component={Contact}/>
                                <Route path="/" component={Home}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    
    const HeaderWithRouter = withRouter(Header);

    return (
        <div>
            <HeaderWithRouter />
            <Container />
        </div>
    );
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById("app"));
