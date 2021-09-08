import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

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
            <Text
                style={[styles.button, extraStyle, { width: columns * 100 + (columns - 1) * 10 }]}
            >
                {icon ? icon : text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        fontSize: 30,
        margin: 5,
    },
    actionButton: {
        backgroundColor: '#285FF5',
        color: 'white',
    },
    numberButton: {
        backgroundColor: '#D6E2FC',
    },
});
