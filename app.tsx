import * as ReactDOM from "react-dom"
import * as React from "react"
import { withRouter } from 'react-router'
import  {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Software from './Routes/Software'
import Achievements from './Routes/Achievements'

const Home = (props: any) => (   
    <div>
        <div className="heading"> Justin Van Dort </div>

        Education:
        <ul>
            <li>GPA: 3.9</li>
            <li>Major: Computer Engineering</li>
            <li>University: University of Maryland</li>
            <li>Junior - Expected Graduation 2019</li>
        </ul>

        <p>
            I am a 3rd year computer engineering student at the University of Maryland. I began
            programming early in high school, and have since taught myself Java, HTML/CSS/JS, PHP,
            C++, SQL, Swift, and some Python. With these languages, I have developed native Android
            and iOS applications (in Java and Swift), learned React/Redux and OpenGL, and have
            created several independent GUI-based application in Java/Swing. I have become
            comfortable developing web pages and REST APIs through Node.js/Express.js, and have used
            JQuery, React, and stanard JavaScript to develop front-end applications. Here, you can
            find my online resume, which includes my education and achievements, as well as my past
            and current projects. Click on a menu item to the left to begin.
        </p>
        <p>
            I am looking to achieve a position in Engineering, Computer Science, or IT, that would
            enable me to leverage my technical abilities while also allowing me to gain experience
            in a professional work environment.
        </p>
    </div>
)



const Projects = (props: any) => (
    <p>Cee</p>
)



const Eagle = (props: any) => (
    <p>Eee</p>
)

const Header = (props: any) => {

    let path = props.location.pathname.replace("/", "");

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

const Container = () => (
    <div className="content_container">
        <div className="content_spacer">
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