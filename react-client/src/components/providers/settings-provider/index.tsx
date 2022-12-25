import { createContext, useState } from "react"


interface IGlobalState {
    isUtc: boolean,
    setIsUtc: Function
}

const initialState: Partial<IGlobalState> = {
    isUtc: false,
}

export const SettingsContext = createContext<Partial<IGlobalState>>(initialState);



export default function SettingsProvider(props: { children: React.ReactElement }) {

    const [isUtc, setIsUtc] = useState(false)

    return (<SettingsContext.Provider value={{ isUtc, setIsUtc }}>
        {props.children}
    </SettingsContext.Provider>)


}
