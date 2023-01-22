import { useCallback, useState } from "react"
// @ts-ignore
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"

export function Home() {
    const [showImage, setShowImage] = useState(false);
    return <div>
        <h1 data-testid="homePage">Home Page Lists</h1>
        <Button data-testid="showImageButton" onClick={() => {
            setShowImage(!showImage)
        }}> Show the Image </Button>
        {showImage ? <div data-testid="image">
            <img height={400} width={400} src="https://www.webopedia.com/wp-content/uploads/2022/02/Webo.Fortinet-1014x1024.png" alt="" />
        </div> : null}
    </div>
}