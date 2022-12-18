import { useCallback, useState } from "react"
// @ts-ignore
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useNavigate } from "react-router-dom"

export function Register() {
    const [formData, setFormData] = useCustomForm({ email: "", password: "", gender: "female" })
    const { email, password, gender } = formData
    const navigate = useNavigate()
    console.log(navigate)
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [gender, setGender] = useState("")
    // missing type

    // const handleEmail = (e: any) => {
    //     setEmail(e?.target?.value)
    // }

    // const handlePassword = (e: any) => {
    //     setPassword(e?.target?.value)
    // }

    // const handleGender = (e: any) => {
    //     setGender(e?.target?.value)
    // }

    return <div>
        <h1> Register </h1>
        <div>
            <h3>  Email </h3>
            <InputText name={"email"} value={email} onChange={setFormData} />
        </div>
        <div>
            <h3> Password</h3>
            <InputText name={"password"} value={password} onChange={setFormData} />
        </div>
        <div>
            <h3> Gender </h3>
            <InputText name={"gender"} value={gender} onChange={setFormData} />
        </div>
        <div style={{ marginTop: "10px" }}>
            <Button label="Login" onClick={() => {
                console.log(email, password, gender)
            }} />
        </div>
    </div>

}

function useCustomForm(initialState: any) {
    const [formData, setFormData] = useState(initialState)

    function onChangeInput(e: any) {
        const { target } = e;
        const { name, value } = target
        setFormData({ ...formData, [name]: value })
    }

    return [formData, onChangeInput]

}