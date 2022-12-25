
import React, { useContext } from 'react';
import { ToggleButton } from 'primereact/togglebutton';
import { SettingsContext } from '../providers/settings-provider';



export default function Settings() {
    const context = useContext(SettingsContext)

    return <div>
        <h1> Settings </h1>
        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "flex", margin: "auto", width: "500px", justifyContent: "space-between" }}>
            <h3> TimeZone UTC: </h3>
            <ToggleButton checked={context.isUtc} onChange={(e) => {
                context && (context.setIsUtc as Function)(!!e.value)
            }} />
        </div>

    </div>
}