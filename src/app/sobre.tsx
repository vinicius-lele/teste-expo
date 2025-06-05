import {View, StyleSheet} from "react-native";
import { Button } from "@/NanicasComponents/button";
import { Title } from "@/NanicasComponents/title"
import { router } from "expo-router";

function handleX(){
    router.back()
}

export default function Sobre(){

    return(
        <View style={styles.container}>
            <Title text="TELINHA DE ABOUT"/>
            <Button text="VOLTAR" onPress={handleX}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:50,
        alignItems:"center",
        justifyContent:"center"
    }
})