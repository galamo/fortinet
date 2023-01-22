import { useCallback, useState } from "react"
// @ts-ignore
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useNavigate } from "react-router-dom"

export function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // missing type

    console.log("Render Login component ")
    const handleEmailCached = useCallback((e: any) => {
        console.log("handleEmailCached=>", email)
        setEmail(e?.target?.value)
    }, [password])

    const handlePasswordCached = useCallback((e: any) => {
        console.log("handlePasswordCached", email, password)
        setPassword(e?.target?.value)
    }, [password])

    return <div>
        <h1> Login </h1>
        <h2> User Lase login time: {new Date().toUTCString()}</h2>
        <div>
            <h3>  Email </h3>
            <InputText value={email} onChange={handleEmailCached} />
        </div>
        <div>
            <h3> Password</h3>
            <InputText value={password} onChange={handlePasswordCached} />
        </div>
        <div style={{ marginTop: "10px" }}>
            <Button label="Login" onClick={() => { }} />
        </div>
        <div style={{ marginTop: "10px" }}>
            <Button label="You dont have an account?" onClick={() => {
                // window.location.href = "http://localhost:3000/login"
                console.log(email, password)
                // navigate("/home")
            }} />
        </div>


    </div>

}