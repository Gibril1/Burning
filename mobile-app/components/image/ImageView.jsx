import { Image } from "react-native";
import styles from "./image.styles";


const ImageViewer = ({ placeholder }) => {
    return <Image source={ placeholder } style={ styles.image } />
}

export default ImageViewer