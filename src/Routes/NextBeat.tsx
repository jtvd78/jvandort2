import * as React from "react";
import {Link} from "react-router-dom";

import ImageViewer from "../ImageViewer";

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
    const elements = [];

    for (let i = 0; i < images.length; i++) {
        elements[i] = (
            <div style={{paddingLeft: "1.6%", paddingRight: "1.6%", display: "inline-block", paddingBottom: "3.3%", width: "30%"}}>
                <img src={images[i]} width="100%" />
            </div>
        );
    }

    return  (
       
            <div children={elements} style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}} />
        
        
    );
};

const NextBeat2 = (props: any) => (
    <>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{margin: 20, minWidth: 860, width: "50%"}}>
                <br />
                <p>
                    Next Beat is a cross-platform mobile application for Android and iOS, and has been
                    my most comprehensive programming project yet. It consists of a Android/iOS app portion, 
                    which is what the user uses, and a Node.js server which hosts a RESTful API for the
                    Android app to use.
                </p>
                <br />
                <p>
                    The point of Next Beat is to be able to play tracks from both Spotify and Soundcloud, 
                    seamlessly, without switching between their respective apps. All playback is controlled 
                    through my app, and users are able to create playlists with tracks from both music sources. 
                    Features include friending other next beat users, sharing playlists, queueing tracks from 
                    both media sources, viewing spotify artists/albums, a fully featured search function, a
                    player notification, and many others.
                </p>
                <br />
                <p>        
                    I began developing this application at the beginning of September 2016 with no 
                    knowledge of Android or iOS programming, other than being able to program in standard
                    Java. During the development, I was able to teach myself how to program Android and 
                    iOS applications, as well as how to use Node.js to host a RESTful server with MySQL 
                    as a database.
                </p>
                <br />
                <p>
                    Due to licensing restrictions, I have learned that this type of application is against 
                    Soundcloud's Terms of service. Even though this application is no longer under active 
                    development, I have gained valuable experience in mobile development. Unlike most of my
                    other software, I'd like to keep this NextBeat closed source.
                </p>
            </div>
        </div>

        <div style={{margin:20}}> 
            <ImageViewer images={images} height={760} />
        </div>
    </>
);

export default NextBeat2;
