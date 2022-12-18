interface IHeader {
    text: string;
    color: Colors;
}

export enum Colors {
    red = "red",
    yellow = "yellow",
    blue = "blue"
}


export function Header(props: IHeader) {
    const { text } = props;
    return <h1 style={{ color: props.color }}> {text} </h1>
}




