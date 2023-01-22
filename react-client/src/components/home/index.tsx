import { useCallback, useState } from "react"
// @ts-ignore
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import styled, { createGlobalStyle } from "styled-components";

// Component = styled.ElementTag`
// Write your CSS HE
// `
const GlobalsHome = createGlobalStyle`
    *{
        font-size:15px       
    }
`
const HomeWithStyle = styled.div`
    width: 200px;
    margin: auto auto;
    background-color: green;
    color:white;
    height:600px
`

const MyButton = styled.button.attrs((props: { color?: string }) => ({
    color: props.color || "yellow"
}))`
border: 1px solid black;
color: ${props => props.color}
`


export function Home() {
    const [showImage, setShowImage] = useState(false);
    return <HomeWithStyle>
        <GlobalsHome />
        <h1 data-testid="homePage">Home Page Lists</h1>
        <Button data-testid="showImageButton" onClick={() => {
            setShowImage(!showImage)
        }}> Show the Image </Button>
        <MyButton> Click me </MyButton>
        {showImage ? <div data-testid="image">
            <img height={400} width={400} src="https://www.webopedia.com/wp-content/uploads/2022/02/Webo.Fortinet-1014x1024.png" alt="" />
        </div> : null}
    </HomeWithStyle>
}