import { useRef, useEffect } from "react"
// @ts-ignore
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"


export function Login() {
    // const email / password!
    const emailElement = useRef<HTMLInputElement>(null);
    const passwordElement = useRef<HTMLInputElement>(null);
    const clickingRef = useRef<number>(0)

    useEffect(() => {
        if (passwordElement && passwordElement.current) {
            passwordElement.current.value = "ps-mail-1.."
        }
    }, [])

    return <div>
        <h1> Login </h1>
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
                console.log(emailElement.current?.value, passwordElement.current?.value)
            }} />
        </div>

    </div>

}