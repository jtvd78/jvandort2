import * as React from "react";
import {Link} from "react-router-dom";

const Item = (title: string, content: any) => {
    return (
        <div className="item">
            <div className="item_header">
                {title}
            </div>
            <div className="item_content" children={content} />
        </div>
    );
};

const Java_Item = Item("Java",
    <ul>
        <li><Link to="/proj/nextbeat">NextBeat Android</Link></li>
        <li><a href="https://github.com/jtvd78/graphing-calculator">Graphing Calculator</a></li>
        <li><Link to="/proj/schedule">UMD Schedule Builder</Link></li>
        <li><a href="https://github.com/jtvd78/Library"> Java Swing Utility Library</a> </li>
    </ul>
);

const C_Item = Item("C/C++",
    <ul>
        <li><Link to="/proj/opengl" >Open GL Test Application</Link></li>
        <li><a href="https://github.com/jtvd78/bt">BitTorrent Client</a></li>
    </ul>
);

const Kotlin_Item = Item("Kotlin", 
    <ul>
        <li>Graphing Calculator Clone</li>
    </ul>
);

const Swift_Item = Item("Swift", 
    <ul>
        <li><Link to="/proj/nextbeat">NextBeat iPhone</Link></li>
    </ul>
);

const Typescript_Item = Item("TypeScript",
    <ul>
        <li><a href="https://github.com/jtvd78/jvandort2">jvandort.com</a></li>
        <li>
            <Link to="/proj/webgraph">WebGraph</Link>
        </li>
    </ul>
);

const Swing_Item = Item("AWT/Swing",
    <ul>
        <li><a href="https://github.com/jtvd78/graphing-calculator">Graphing Calculator</a></li>
        <li><Link to="/proj/schedule">UMD Schedule Builder</Link></li>
        <li><a href="https://github.com/jtvd78/Library"> Java Swing Utility Library</a> </li>
    </ul>
)

const JavaFX_Item = Item("JavaFX",
    <ul>
        <li>Internship at Boeing</li>
        <li>Graphing Calculator Clone</li>
    </ul>
);

const React_Item = Item("React", 
    <ul>
        <li><a href="https://github.com/jtvd78/jvandort2">jvandort.com</a></li>
        <li>NextBeat Homepage</li>
    </ul>
);

const Linux_Item = Item("Linux",
    <ul>
        <li>Internship at Boeing</li>
        <li>General Experience</li>
    </ul>
);

const Software  = (props: any) => (
    <>
       <div className="small_heading"> Languages </div>
        <div className="item_container">
            {Java_Item}
            {C_Item}
            {Kotlin_Item}
            {Swift_Item}
            {Typescript_Item}
        </div>

        <br />
        <hr />
        <br />
        
        <div className="small_heading"> Technologies </div>
        <div className="item_container">
            {Swing_Item}
            {JavaFX_Item}
            {React_Item}
            {Linux_Item}
        </div>
        <br />
    </>
);

export default Software;
