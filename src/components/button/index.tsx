import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props =  TouchableOpacityProps & {
    text:string
}

export function Button({text, ...rest}:Props){
    return(
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
}