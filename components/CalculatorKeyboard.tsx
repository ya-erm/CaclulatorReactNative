import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { ActionButton, CalculatorButton, IButtonProps, iconSize } from './CalculatorButton';

type ICalculatorKeyboardProps = {
    onKeyPress: (key: string) => void;
};

const Row: React.FC = ({ children }) => {
    return <View style={styles.row}>{children}</View>;
};

export default function CalculatorKeyboard({ onKeyPress }: ICalculatorKeyboardProps) {
    const NumberButton: React.FC<IButtonProps> = ({ text, style = 'number', ...other }) => (
        <CalculatorButton text={text} style={style} onPress={() => onKeyPress(text)} {...other} />
    );

    const FunctionButton: React.FC<IButtonProps> = ({ text, style = 'action', ...other }) => (
        <CalculatorButton text={text} style={style} onPress={() => onKeyPress(text)} {...other} />
    );

    return (
        <View style={styles.container}>
            <Row>
                <ActionButton
                    onPress={() => onKeyPress('Clear')}
                    icon={<Icon name="trash" size={iconSize} />}
                />
                <NumberButton text="(" style="action" />
                <NumberButton text=")" style="action" />
                <FunctionButton text="/" icon={<Icon name="divide" size={iconSize} />} />
            </Row>
            <Row>
                <NumberButton text="7" />
                <NumberButton text="8" />
                <NumberButton text="9" />
                <FunctionButton text="*" icon={<Icon name="times" size={iconSize} />} />
            </Row>
            <Row>
                <NumberButton text="4" />
                <NumberButton text="5" />
                <NumberButton text="6" />
                <FunctionButton text="-" icon={<Icon name="minus" size={iconSize} />} />
            </Row>
            <Row>
                <NumberButton text="1" />
                <NumberButton text="2" />
                <NumberButton text="3" />
                <FunctionButton text="+" icon={<Icon name="plus" size={iconSize} />} />
            </Row>
            <Row>
                <NumberButton text="0" columns={2} />
                <NumberButton text="." />
                <ActionButton
                    text="="
                    onPress={() => onKeyPress('Enter')}
                    icon={<Icon name="equals" size={iconSize} />}
                />
            </Row>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
