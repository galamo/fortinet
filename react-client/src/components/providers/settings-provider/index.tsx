import { createContext, useReducer, useState } from "react"


// interface IGlobalState {
//     isUtc: boolean,
//     format: string
// }

const initialState = {
    isUtc: false,
    format: "DD/MMM/YY HH:mm:ss",
    theme: "primary"
}

type GlobalStateType = typeof initialState
type GlobalStateTypeDispatch = GlobalStateType & { dispatch?: Function }


export const ACTIONS = {
    SET_UTC: "SET_UTC",
    SET_FORMAT: "SET_FORMAT",
    SET_THEME: "SET_THEME",
}

function settingsReducer(state: GlobalStateType, action: { type: string, payload: any }): any {
    switch (action.type) {

        case ACTIONS.SET_UTC: {
            return { ...state, isUtc: (action.payload as boolean) }
        }
        case ACTIONS.SET_FORMAT: {
            return { ...state, format: action.payload }
        }
        case ACTIONS.SET_THEME: {
            return { ...state, theme: action.payload }
        }
        default: {
            return state;
        }
    }
}


export const SettingsContext = createContext<GlobalStateTypeDispatch>(initialState);
// export const SettingsContext2 = createContext<[state: GlobalStateTypeDispatch, dispatch: React.Dispatch<any>]>([initialState, () => { }]);

export default function SettingsProvider(props: { children: React.ReactElement }) {
    const [state, dispatch] = useReducer(settingsReducer, initialState)
    // const [isUtc, setIsUtc] = useState(false)
    return (<SettingsContext.Provider value={{ ...state, dispatch }}>
        {props.children}
    </SettingsContext.Provider>)


}
