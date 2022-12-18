import { useEffect, useState } from "react"

interface IFImage {
    src: string
}
const defImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"

export default function FortinetImage(props: IFImage) {
    const [currentImage] = useImageLoaded(props.src)
    return <img height={180} width={180} src={currentImage} />
}

function useImageLoaded(initImage: string) {
    const [currentImage, setCurrentImage] = useState<string>(initImage)
    useEffect(() => {
        function testLoadImage() {
            const imageDom = new Image();
            imageDom.onerror = () => {
                setCurrentImage(initImage)
            }
            imageDom.src = initImage;
        }
        testLoadImage();
    }, [])
    return [currentImage]
}




