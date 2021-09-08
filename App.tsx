import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CalculatorView } from './components/CalculatorView';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.spacer}></View>
            <CalculatorView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacer: {
        flex: 1,
    },
});
