import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import Movimento from "../Movimento";
import Total from "../Total";



export default function Home() {
    const [movimentos, setMovimentos] = useState([])

    useEffect(() => {
        axios.get('http://192.168.1.101:8080/')
        .then(res => {
            setMovimentos(res.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    })


    return (
        <View >
            <Header nomeUsuario='Aula de 08/03/2023'/>
            <Total saldo="4.348,57" despesa="1.200,45" />

            <Text style={styles.titulo}>Últimas Movimentações</Text>
            <FlatList  style={styles.movimentos}
                data={movimentos}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={ false}
                renderItem={({item}) => <Movimento dado={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14
    },
    movimentos: {
        marginStart: 14,
        marginEnd: 14,
        marginTop: 14
    }
})