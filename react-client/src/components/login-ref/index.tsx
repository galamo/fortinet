import { useRef, useEffect, useContext } from "react"
// @ts-ignore
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useNavigate } from "react-router-dom"
import { SettingsContext } from "../providers/settings-provider";
import AppDate from "../app-date";
import { useAppDispatch } from "../../store/hooks";
import { setToken } from "../../store/reducers/settingsReducer";


export function LoginRef() {
    // const email / password!
    const dispatch = useAppDispatch();
    const emailElement = useRef<HTMLInputElement>(null);
    const passwordElement = useRef<HTMLInputElement>(null);
    const clickingRef = useRef<number>(0)
    const navigate = useNavigate()
    const context = useContext(SettingsContext)
    console.log(context)
    useEffect(() => {
        if (passwordElement && passwordElement.current) {
            passwordElement.current.value = "ps-mail-1.."
        }
    }, [])

    return <div>
        <h1> Login </h1>
        <h2> User Last login time:
            <AppDate currentDateString={new Date().toString()} />
        </h2>
        <div>
            <h3>  Email </h3>
            <InputText ref={emailElement} />
        </div>
        <div>
            <h3> Password</h3>
            <InputText ref={passwordElement} />
        </div>
        <div style={{ marginTop: "10px" }}>

            <Button label="Login" onClick={() => {
                clickingRef.current++
                if (clickingRef.current > 3) {
                    alert("You clicked this button too much times")
                }
                if (!emailElement.current?.value || !passwordElement.current?.value) {
                    alert("Something went wrong")
                }
                dispatch(setToken(`Token: ${Date.now()}`))
            }} />
            <div style={{ marginTop: "10px" }}>
                <Button label="You dont have an account?" onClick={() => {
                    // window.location.href = "http://localhost:3000/login"
                    navigate("/register")
                }} />
            </div>
        </div>

    </div>

}