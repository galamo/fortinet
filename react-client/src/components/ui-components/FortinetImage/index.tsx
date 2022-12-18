
interface IFImage {
    src: string
}
const defImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"

export default function FortinetImage(props: IFImage) {
    return <img height={180} width={180} src={props.src || defImage} />
}

// customHook - > useImageLoaded ? 