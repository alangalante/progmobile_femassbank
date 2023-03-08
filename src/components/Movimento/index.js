import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Movimento({dado}) {

    const [showValue, setShowValue] = useState(false);

    return ( 
        <TouchableOpacity 
            style={styles.container}
            onPress={() => setShowValue(!showValue)}
        >
            <Text style={styles.data}>{dado.date}</Text>
            <View style={styles.content}>
                    <Text style={styles.label}>{dado.label}</Text>
                    {showValue ? 
                        <Text 
                            style={dado.tipo === 1 ? styles.valores : styles.despesas}>
                            {dado.tipo === 1 ? `R$ ${dado.value}`: `-R$ ${dado.value}`}
                        </Text>
                    :
                        <View style={styles.oculto}>
                        </View>
                    }       
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    data: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    valores: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2ECC71'
    },
    despesas: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#E74C3C'
    },
    oculto: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }

})