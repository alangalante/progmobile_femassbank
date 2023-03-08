import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import Movimento from "../Movimento";
import Total from "../Total";

const movimentos = [
    {
        id: 1,
        label: 'Conta de luz',
        value: '300,96',
        date: '25/02/2023',
        tipo: 0 //despesa
    },    
    {
        id: 2,
        label: 'Recebimento em PIX',
        value: '2.500,00',
        date: '27/02/2023',
        tipo: 1 //ganho
    },
    {
        id: 3,
        label: 'Salário no mês',
        value: '7.000,00',
        date: '28/02/2023',
        tipo: 1 //ganho
    },   
    {
        id: 4,
        label: 'Internet',
        value: '150,00',
        date: '15/02/2023',
        tipo: 0 //ganho
    },
]



export default function Home() {
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