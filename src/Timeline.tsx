import * as React from "react"


const color = "black";

const circle_size = 16;

const line_width = 4;

const tick_width = 3;

const Circle = (props: any) => {
    return (
        <div style={{borderRadius: circle_size / 2, width: circle_size, height: circle_size, background: color, position: "absolute"}} />
    )
}

const Tick = (props: any) => {
    return (
        <div style={{display: "flex", alignItems:"center", height: circle_size, position: "absolute"}}>
            <div style={{width: circle_size, height: tick_width, background: color}} />
        </div>
    )
}


const Event = (props: {children: any}) => {
    return (
        <div style={{position: "relative", paddingBottom: 5, paddingTop: 5}}> 
            <Tick />
            <div style={{display:"flex", alignItems:"center", height: circle_size, marginLeft: circle_size + 5, fontSize:"12pt"}} >
                {props.children}
            </div>
        </div>
    )
}

const Date = (props: {text: string}) => {
    const padding = 10;
    return (
        <div style={{position: "relative", paddingTop:padding, paddingBottom:padding}}> 
            <Circle />
            <div style={{display:"flex", alignItems:"center", height: circle_size, marginLeft: circle_size + 5, fontWeight:"bold", fontSize:"15pt"}} >
                {props.text}
            </div>
        </div>
    )
}

const Line = (props: {width: number, offset: number, top: number}) => {
    return (
        <div style={{height:"595px", borderLeft: props.width + "px solid " + color, position:"absolute", marginLeft: props.offset - props.width / 2, boxSizing: "border-box", top: props.top}} />    
    )
}


const Timeline = (props: any) => {

    const offset = circle_size / 2;

    return (
        <div style={{background:'#daffef', padding:15, boxShadow:"3px 3px 1px #616161", marginBottom:35}}>
            <div className="heading"> Timeline </div>
            <br />

            <div style={{position:"relative"}} >
                <Line offset={offset} top={10} width={line_width} />

               


             

                <Date text="2010" />
                <Event>
                    Built First Computer
                </Event>

                <Date text="2011" />
                <Event>
                    <span style={{fontWeight:"bold"}}>July</span> - First Game in Java
                </Event>
                <Event>
                    <span style={{fontWeight:"bold"}}>December</span> - First PHP Project
                </Event>





                <Date  text="2012" />
                <Event>
                    <span style={{fontWeight:"bold"}}>March</span> - Started Java Graphing Calculator
                </Event>
                <Event>
                    <span style={{fontWeight:"bold"}}>December</span> - First Attempt at Using Python
                </Event>

                
                <Date  text="2015" />
                <Event>
                    <span style={{fontWeight:"bold"}}>October</span> - Started Schedule Builder
                </Event>
                <Event>
                    <span style={{fontWeight:"bold"}}>November</span> - First Git Commit
                </Event>


                <Date text="2016" />
                <Event>
                    <span style={{fontWeight:"bold"}}>September</span> - First Android Project
                </Event>
                <Event>
                    <span style={{fontWeight:"bold"}}>October</span> - First Express.js Project
                </Event>


                <Date text="2017" />
                <Event>
                    <span style={{fontWeight:"bold"}}>February</span> - First iOS Project
                </Event>
                <Event>
                    <span style={{fontWeight:"bold"}}>February</span> - First Time Using C
                </Event>
                <Event>
                    <span style={{fontWeight:"bold"}}>May</span> - First First React Project 
                </Event>
                <Event>
                    <span style={{fontWeight:"bold"}}>July</span> - First Time Using C++ (OpenGL)
                </Event>

                <Date text="2018" />
                <Event>
                    <span style={{fontWeight:"bold"}}>May</span> - Began Working at Boeing   
                </Event>
            </div>
        </div>
    )
}

export default Timeline;