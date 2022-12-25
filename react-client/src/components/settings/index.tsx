
import React, { useContext } from 'react';
import { ToggleButton } from 'primereact/togglebutton';
import { ACTIONS, SettingsContext } from '../providers/settings-provider';
import { InputText } from 'primereact/inputtext';



export default function Settings() {
    const context = useContext(SettingsContext)
    const dispatchFn = context.dispatch as Function

    return <div>
        <h1> Settings </h1>
        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "flex", margin: "auto", width: "500px", justifyContent: "space-between" }}>
            <h3> TimeZone UTC: </h3>
            <ToggleButton checked={context.isUtc} onChange={(e) => {
                (context.dispatch as Function)
                dispatchFn({ type: ACTIONS.SET_UTC, payload: !context.isUtc })
                // context && (context.dispatch as Function)(!!e.value)
                // Implement state change 
            }} />
        </div>
        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "flex", margin: "auto", width: "500px", justifyContent: "space-between" }}>
            <h3> Date Time Format: </h3>
            <InputText value={context.format} onChange={(e) => {

                dispatchFn({ type: ACTIONS.SET_FORMAT, payload: e.target.value })
                // context && (context.setFormat as Function)(!!e.value)
                // implement state change 
            }} />
        </div>

    </div>
}