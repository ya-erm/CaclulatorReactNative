import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type IButtonProps = {
    text?: string;
    icon?: JSX.Element;
    style?: 'action' | 'number';
    columns?: number;
    onPress?: () => any;
};

export const CalculatorButton: React.FC<IButtonProps> = ({
    text,
    icon,
    style = 'number',
    columns = 1,
    onPress = () => {},
}) => {
    const extraStyle = style == 'action' ? styles.actionButton : styles.numberButton;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, extraStyle, { height: 85, width: columns * 85 + (columns - 1) * 10 }]}>
                <Text style={extraStyle}>{icon ? icon : text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        borderRadius: 45,
        margin: 5,
    },
    actionButton: {
        fontSize: 30,
        backgroundColor: '#285FF5',
        color: 'white',
    },
    numberButton: {
        fontSize: 30,
        backgroundColor: '#D6E2FC',
    },
});
