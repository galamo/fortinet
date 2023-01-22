import { useCallback, useState } from "react"
// @ts-ignore
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import styled from "styled-components";


const SignupForm = ({ className }: any) => (
    <form className={className}>
        <input className="input" />
        <button className="button">Button</button>
    </form>
);

const Form = styled(SignupForm)`
    .input {
      background-color: palegreen;
    }
  
    .button {
      background-color: palevioletred;
    }
  `;

const Component = ({ className }: any) => {
    return <div {...{ className }}>Text</div>;
};

const RedText = styled(Component)`
    color: red;
  `;

const Home = () => {
    return (
        <>
            <Form />
            <RedText />
        </>
    );
};

export { Home };