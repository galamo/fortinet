import { useContext } from "react"
import moment from "moment"
import { SettingsContext } from "../providers/settings-provider"

export default function AppDate(props: { currentDateString: string }) {
    const context = useContext(SettingsContext)
    const date = context.isUtc ? moment(props.currentDateString).utc() : moment(props.currentDateString)
    return <span> {date.format(context.format).toString()} </span>
} 