import { FontAwesome5 as Icon } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { calculate } from '../model/Calculator';
import { CalculatorButton, IButtonProps } from './CalculatorButton';

const Row: React.FC = ({ children }) => {
    return <View style={styles.row}>{children}</View>;
};

const nonRepeatingOperators = ['+', '-', '/', '*'];

export const CalculatorView: React.FC = () => {
    const [input, setInput] = useState('0');
    const [expression, setExpression] = useState('0');

    const clearAction = () => {
        setInput('0');
        setExpression('0');
    };

    const makeNumberButtonAction = (number: string) => {
        return () => {
            const inputValue = expression.includes('=') ? '0' : input;
            const expressionValue = expression.includes('=') ? '0' : expression;

            if (inputValue == '0') {
                if (number == '.') {
                    // If expression ends with operator then append zero
                    const trimmedExpression = expressionValue.trimEnd();
                    if (
                        trimmedExpression.length > 0 &&
                        nonRepeatingOperators.includes(
                            String(trimmedExpression[trimmedExpression.length - 1]),
                        )
                    ) {
                        setExpression((prev) => prev + '0');
                    }
                } else {
                    // Replace zero by digit 1-9
                    setInput(number);
                    setExpression((prev) => (expressionValue == '0' ? number : prev + number));
                    return;
                }
            }
            // Ignore duplicate decimal delimiter sign
            if (inputValue.includes('.') && number == '.') {
                return;
            }
            setInput((prev) => prev + number);
            setExpression((prev) => prev + number);
        };
    };

    const continueWithResult = () => {
        const values = expression.split('=').map((x) => x.trimEnd());
        const value = values[values.length - 1] ?? '0';
        setExpression(value);
        return value;
    };

    const makeFunctionButtonAction = (text: string) => {
        return () => {
            // if expression contains calculation result then continue with result
            let expressionValue = expression.includes('=') ? continueWithResult() : expression;

            if (nonRepeatingOperators.includes(text)) {
                let trimmedExpression = expressionValue.trimEnd();
                let lastSymbol = trimmedExpression[trimmedExpression.length - 1];
                // if expression ends with the same operator then ignore it
                if (lastSymbol == text) {
                    return;
                }
                // if expression ends with other operator then replace it
                if (nonRepeatingOperators.includes(lastSymbol)) {
                    expressionValue = trimmedExpression
                        .substring(0, trimmedExpression.length - 1)
                        .trimEnd();
                }
            }

            if (expressionValue == '0' && text == '-') {
                setInput('-');
                setExpression('-');
                return;
            }

            if (expressionValue == '') {
                expressionValue = '0';
            }

            setExpression(expressionValue + ` ${text} `);
            setInput('0');
        };
    };

    const deleteAction = () => {
        if (expression.includes('=')) {
            continueWithResult();
        }

        if (input.length > 1) {
            setInput(input.substring(0, input.length - 1));
        } else {
            setInput('0');
        }

        if (expression.length > 1) {
            let trimmed = expression.trimEnd();
            setExpression(trimmed.substring(0, trimmed.length - 1).trimEnd());
        } else {
            setExpression('0');
        }
    };

    const evaluateAction = () => {
        if (expression.includes('=')) {
            return;
        }
        // If expression ends with operator then append zero
        let trimmedExpression = expression.trimEnd();
        if (
            trimmedExpression.length > 0 &&
            nonRepeatingOperators.includes(trimmedExpression[trimmedExpression.length - 1])
        ) {
            setExpression((prev) => prev + '0');
        }
        let result = calculate(expression);
        setInput(`${result}`);
        setExpression((prev) => prev + ` = ${result}`);
    };

    const ActionButton: React.FC<IButtonProps> = ({ text, style = 'action', ...other }) => (
        <CalculatorButton text={text} style={style} {...other} />
    );
    const NumberButton: React.FC<IButtonProps> = ({ text, style = 'number', ...other }) => (
        <CalculatorButton
            text={text}
            style={style}
            onPress={makeNumberButtonAction(text)}
            {...other}
        />
    );
    const FunctionButton: React.FC<IButtonProps> = ({ text, style = 'action', ...other }) => (
        <CalculatorButton
            text={text}
            style={style}
            onPress={makeFunctionButtonAction(text)}
            {...other}
        />
    );
    const iconSize = 30;

    return (
        <View>
            <View style={styles.inputContainer}>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputMain} value={input} onChangeText={setInput} keyboardType="numeric" />
                    <View style={styles.separator} />
                    <Text style={styles.history}>{expression}</Text>
                </View>
                <ActionButton
                    onPress={deleteAction}
                    icon={<Icon name="backspace" size={iconSize} />}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <Row>
                    <ActionButton
                        onPress={clearAction}
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
                        onPress={evaluateAction}
                        icon={<Icon name="equals" size={iconSize} />}
                    />
                </Row>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    spacer: {
        flex: 1,
    },
    inputContainer: {
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
    buttonsContainer: {
        marginBottom: 30,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
