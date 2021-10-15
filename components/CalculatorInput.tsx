import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { ActionButton, iconSize } from './CalculatorButton';

type ICalculatorInputProps = {
    onKeyPress: (key: string) => void;
};

export type ICalculatorInputState = {
    input: string;
    expression: string;
};

export default class CalculatorInput extends Component<
    ICalculatorInputProps,
    ICalculatorInputState
> {
    constructor(props: ICalculatorInputProps) {
        super(props);
        this.state = { input: '0', expression: '0' };
    }

    render() {
        const {onKeyPress} = this.props;
        const { input, expression } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputMain}
                        value={input}
                        keyboardType="decimal-pad"
                    />
                    <View style={styles.separator} />
                    <Text style={styles.history}>{expression}</Text>
                </View>
                <ActionButton
                    onPress={() => onKeyPress("Backspace")}
                    icon={<Icon name="backspace" size={iconSize} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: 380,
    },
    inputView: {
        flex: 1,
        marginRight: 20,
    },
    inputMain: {
        fontSize: 30,
        textAlign: 'right',
    },
    history: {
        textAlign: 'right',
        fontSize: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
        marginVertical: 5,
    },
});
