import { useCallback, useState } from "react"
// @ts-ignore
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"

export function Users() {
    const [currentUser, setCurrentUser] = useState("")
    const [users, setCurrentUsers] = useState(["chavi", "snir"])
    // missing type

    const addUserHandler = useCallback((e: any) => {
        setCurrentUsers([...users, currentUser])
    }, [users, currentUser])

    const handleSetCurrentUser = useCallback((e: any) => {
        setCurrentUser(e?.target?.value)
    }, [currentUser])



    return <div>
        <h1> Users </h1>
        <div>
            <h3>  Email </h3>
            <InputText value={currentUser} onChange={handleSetCurrentUser} />
        </div>
        <div>
            {users.map((u: any) => {
                return <h2> {u} </h2>
            })}
        </div>
        <div style={{ marginTop: "10px" }}>
            <Button label="Add user" onClick={addUserHandler} />
        </div>

    </div>

}