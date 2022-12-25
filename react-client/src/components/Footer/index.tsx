import React, { useContext } from "react"
import AppDate from "../app-date"
import { useAppSelector } from "../../store/hooks"

export default function Footer() {
    const token = useAppSelector((state) => state.settingsReducer.token)
    return <div style={{ position: "fixed", height: "50px", width: "100%", bottom: "0px", textAlign: "center", background: "#6466f1" }}>
        <div style={{ display: "flex", alignSelf: "center", justifySelf: "center", justifyContent: "space-between", alignItems: "center" }} >
            <h2>
                <AppDate currentDateString={new Date().toString()} />
            </h2>
            <h2>
                {token}
            </h2>
        </div>
    </div>
}