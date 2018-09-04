import * as React from "react";

type BarProps = {
    rating: number,
    text: string,
    color: string
};

function componentToHex(c: number) {
    const hex = Math.round(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

const shade = (color: string, amount: number) => {
    const rgb = hexToRgb(color);
    if (rgb) {
        const factor = 1.0 - amount;
        return rgbToHex(rgb.r * factor, rgb.g * factor, rgb.b * factor);
    }
};

const ProgressBar = (props: BarProps) => {

    const percent = props.rating / 5.0 * 100;
    const padding = 5;

    const tint = 0.2;

    const color2 = "#889988";
    const color1 = shade(color2, tint);

    // #465298

    const color3 = props.color;
    const color4 = shade(color3, tint);

    const fill       = "repeating-linear-gradient( 45deg, " + color3 + ", " + color3 + " 10px, " + color4 + " 10px, " + color4 + " 20px)";
    const background = "repeating-linear-gradient( 45deg, " + color2 + ", " + color2 + " 10px, " + color1 + " 10px, " + color1 + " 20px)";

    const border = "3px solid black";

    return (
        <div style={{
            display: "flex",
            paddingBottom: padding,
            paddingTop: padding
        }} >
            <div style={{
                border: border,
                borderRadius: 10,
                boxSizing: "border-box",
                display: "inline-block",
                height: 35,
                overflow: "hidden",
                position: "relative",
                width: 400,
            }} >
                <div style={{
                    background: background,
                    height: "100%",
                    position: "absolute",
                    width: "100%"
                }} />
                <div style={{
                    background: fill,
                    borderRight: "3px solid black",
                    height: "100%",
                    position: "absolute",
                    width: percent + "%"
                }} />
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: 90, fontWeight: "bold", fontSize: "15pt"}}>
                {Math.round( percent * 10) / 10 / 100 * 5}/5
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "15pt"}}>
                {props.text}
            </div>
        </div>
    );
};

export default ProgressBar;
