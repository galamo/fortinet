import { useEffect, useState } from "react";
let index = 0;
export default function () {

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            index++;
            console.log("resize handler executing", index)
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return <div>
        <h2> {height} X {width} </h2>
    </div>


}