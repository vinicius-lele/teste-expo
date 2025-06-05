import { Text, TextProps } from "react-native";

import { styles } from "./styles";

type Props = TextProps & {
    text:string
}

export function Title({text}:Props){
    return(
            <Text style={styles.text}>{text}</Text>
    )
}