import { useContext } from "react"
import AppDate from "../app-date"

export default function Footer() {
    return <div style={{ position: "absolute", height: "50px", width: "100%", bottom: "0px", textAlign: "center", background: "#6466f1" }}>
        <div style={{ display: "flex", alignSelf: "center", justifySelf: "center", justifyContent: "center", alignItems: "center" }} >
            <h2>
                <AppDate currentDateString={new Date().toString()} />
            </h2>
        </div>
    </div>
}