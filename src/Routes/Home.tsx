import * as React from "react";

import Timeline from "../Timeline";
import Work from "./Work";
import ProgressBar from "../Components/ProgressBar";

const Education = (props: any) => {

    const style = {
        paddingLeft: 20
    };

    return (
        <div className="section">
            <div className="heading"> Education </div>

            <span style={{fontWeight: "bold"}}>The University of Maryland</span> &mdash; College Park
            <div style={style} >
                <ul>
                    <li>GPA: 3.7</li>
                    <li>Major: Computer Engineering</li>
                    <li>Senior - Expected Graduation 2019</li>
                </ul>
            </div>
            <br />
            <span style={{fontWeight: "bold"}}>Notable Coursework:</span>
            <div style={style} >
                <ul>
                    <li>CMSC417: Computer Networks</li>
                    <li>ENEE322: Signal and System Theory</li>
                    <li>ENEE350: Computer Organization</li>
                </ul>
            </div>
        </div>
    );
};

const Bars = (props: any) => {

    return (
        <div className="section">
            <div className="heading"> Skillset </div>
            <br />

            <ProgressBar rating={4} color="#5e81ff" text="Java"/>
            <ProgressBar rating={3.5} color="#5e81ff" text="JavaScript" />
            <ProgressBar rating={3} color="#5e81ff" text="TypeScript" />
            <ProgressBar rating={3} color="#5e81ff" text="C++"/>
            <ProgressBar rating={2.5} color="#5e81ff" text="Swift (iOS)" />
            <ProgressBar rating={2.5} color="#5e81ff" text="Python"/>
            <ProgressBar rating={2.5} color="#5e81ff" text="PHP"/>
            <ProgressBar rating={2} color="#5e81ff" text="C"/>

            <br />
            <br />

            <ProgressBar rating={3.5} color="#D3A13D" text="JavaFX" />
            <ProgressBar rating={3} color="#D3A13D" text="Android"/>
            <ProgressBar rating={3} color="#D3A13D" text="React"/>
            <ProgressBar rating={3} color="#D3A13D" text="Express.js"/>
            <ProgressBar rating={2.5} color="#D3A13D" text="iOS"/>
        </div>
    );
};

const Home = (props: any) => (
    <>
        <div style={{width: "100%", textAlign: "center"}}>
            <div className="home_header section">     

            <div className="heading"> Justin Van Dort </div>
                I am a 4th year computer engineering student at the University of Maryland. I began
                developing software early in high school, and have since taught myself Java,
                C++, Swift, HTML/CSS/JS, and Python. With these languages, I have developed native Android
                and iOS applications (in Java and Swift), learned React, and have
                created several independent GUI-based application in Java/Swing. I have become
                comfortable developing web pages and REST APIs through Node.js/Express.js, and have used
                JQuery, React, and stanard JavaScript to develop front-end web applications. 
            </div>
        </div>

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
    </>
);

export default Home;