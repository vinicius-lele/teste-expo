import {View, StyleSheet, Alert} from "react-native";
import { Button } from "@/NanicasComponents/button";
import { Title } from "@/NanicasComponents/title"
import { router } from "expo-router";

function handleX(){
    router.navigate("/sobre")
}

export default function Index(){

    return(
        <View style={styles.container}>
            <Title text="Olá, meu jovem!"/>
            <Button text="Próxima Tela" onPress={handleX} />
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