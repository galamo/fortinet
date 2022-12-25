import tinycolor from "tinycolor2";
import React, { useState, useDeferredValue } from "react";
import { JsxElement } from "typescript";
import { Profiler } from "react";
const ColorBox = React.memo(function ColorBox(props: any) {
    const { start, spin, onClick, id } = props;
    const color = tinycolor(start).spin(spin).toString();

    return (
        <div
            onClick={onClick}
            data-id={id}
            style={{
                width: "50px",
                height: "50px",
                background: color,

                display: "inline-block",
                margin: "5px"
            }}
        >
            {id}
        </div>
    );
});

function ColorPalette(props: any): any {
    const { start } = props;

    const colors = [];
    for (let i = -360; i < 360; i++) {
        colors.push(<ColorBox key={i} start={start} spin={i} id={i} />);
    }
    return <Profiler id="Navigation" onRender={(id, phase, duration, a, b, c, d) => {
        console.log(`phase: ${c}`)
    }}>
        <div>{colors}</div>
    </Profiler>
}

export default function ColorSelector() {
    const [ticks, setTicks] = useState(0);
    const [color, setColor] = useState("#000000");
    const dcolor = useDeferredValue(color);

    return (

        <div>
            <button onClick={() => setTicks((v) => v + 1)}>
                Click Me ... {ticks}
            </button>
            <div>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>
            <ColorPalette start={dcolor} />
        </div >

    );
}
