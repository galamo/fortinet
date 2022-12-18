import { useCallback, useState, useRef, useEffect } from "react"
// @ts-ignore
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { addListener } from "process";

export function Login() {
    // const email / password!
    const emailElement = useRef<HTMLInputElement>(null);
    const passwordElement = useRef<HTMLInputElement>(null);
    const [show, setShowPassword] = useState(false)

    useEffect(() => {
        if (passwordElement && passwordElement.current) {
            passwordElement.current.value = "ps-mail-1.."
        }
    }, [show])

    return <div>
        <h1> Login </h1>
        <div>
            <h3>  Email </h3>
            <InputText ref={emailElement} />
        </div>
        {!!show && <div>
            <h3> Password</h3>
            <InputText ref={passwordElement} />
        </div>}
        <div style={{ marginTop: "10px" }}>
            <Button label="Show Password" onClick={() => {
                setShowPassword(!show)
            }} />
            <Button label="Login" onClick={() => {
                if (!emailElement.current?.value || !passwordElement.current?.value) {
                    alert("Something went wrong")
                }
                console.log(emailElement.current?.value, passwordElement.current?.value)
            }} />
        </div>

    </div>

}