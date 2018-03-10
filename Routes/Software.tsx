import * as React from "react"

const Item = (title: string, content: any) => {
    return (
        <div className="item">
            <div className="item_header">
                {title}
            </div>
            <div className="item_content" children={content} />
        </div>
    )
}

const Java_Item = Item("Java",
    <ul>
        <li>NextBeat Android</li>
        <li>Graphing Calculator</li>
        <li>UMD Schedule Builder</li>
        <li>Custom Graphics Wrapper</li>
    </ul>
)

const C_Item = Item("C/C++",
    <ul>
        <li>3D Application</li>
        <li>Various School Projects</li>
    </ul>
)

const Kotlin_Item = Item("Kotlin", 
    <ul>
        <li>Graphing Calculator Clone</li>
    </ul>
)

const Swift_Item = Item("Swift", 
    <ul>
        <li>NextBeat iPhone</li>
    </ul>
)



const Typescript_Item = Item("TypeScript", 
    <ul>
        <li>This Page! (<a href="https://github.com/jtvd78/jvandort2">Source</a>)</li>
        <li>
            <a href="http://graph.jvandort.com">WebGraph</a> ( 
            <a href="https://github.com/jtvd78/webgraph">Source</a>)
        </li>
    </ul>
)

const PHP_Item = Item("PHP", 
    <ul>
        <li>File Explorer</li>
    </ul>
)

//////////////////////////////////////////////////////////////////////////////////////////////////

const Expresss_Item = Item("Express.js", 
    <ul>
        <li>NextBeat Server</li>
    </ul>
)

const Swing_Item = Item("AWT/Swing",
    <ul>
        <li>Graphing Calculator</li>
        <li>UMD Schedule Builder</li>
        <li>Custom Graphics Wrapper</li>
    </ul>
)

const JavaFX_Item = Item("JavaFX",
    <ul>
        <li>Graphing Calculator Clone</li>
    </ul>
)

const React_Item = Item("React", 
    <ul>
        <li>This Page! (<a href="https://github.com/jtvd78/jvandort2">Source</a>)</li>
        <li>NextBeat Homepage</li>
    </ul>
)

const REST_Item = Item("REST",
    <ul>
        <li>NextBeat Server</li>
    </ul>
)

const UNIX_Item = Item("Unix",
    <ul>
        <li>General Experience</li>
    </ul>
)

/////////////////////////////////////////////////////////////////////////////////////////////

const Desktop_Item = Item("Desktop",
    <ul>
        <li>Graphing Calculaor</li>
        <li>Graphing Calculator Clone</li>
        <li>UMD Schedule Browser</li>
    </ul>
)

const Web_Item = Item("Web",
    <ul>
        <li>File Explorer</li>
        <li>NextBeat Homepage</li>
        <li>This Page!</li>
        <li><a href="http://graph.jvandort.com">WebGraph</a> ( 
            <a href="https://github.com/jtvd78/webgraph">Source</a>)
        </li>
    </ul>
)

const Android_Item = Item("Android", 
    <ul>
        <li>NextBeat Android</li>
    </ul>
)

const IOS_Item = Item("iOS",
    <ul>
        <li>NextBeat iPhone</li>
    </ul>
)

const Software  = (props: any) => (
    <div>
        <div className="small_heading"> Languages </div>
        <div className="item_container">
            {Java_Item}
            {C_Item}
            {Kotlin_Item}
            {Swift_Item}
            {Typescript_Item}
            {PHP_Item}
        </div>

        <hr />
        <br />

        <div className="small_heading"> Technologies </div>
        <div className="item_container">
            {Expresss_Item}
            {Swing_Item}
            {JavaFX_Item}
            {React_Item}
            {REST_Item}
            {UNIX_Item}
        </div>

        <hr />
        <br />

        <div className="small_heading"> Platforms </div>
        <div className="item_container">
            {Desktop_Item}
            {Web_Item}
            {Android_Item}
            {IOS_Item}
        </div>
    </div>
)

export default Software;