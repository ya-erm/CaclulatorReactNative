import React, { useRef } from 'react';
import {
    View
} from 'react-native';
import { calculate } from '../model/Calculator';
import CalculatorInput, { ICalculatorInputState } from './CalculatorInput';
import CalculatorKeyboard from './CalculatorKeyboard';

const nonRepeatingOperators = ['+', '-', '/', '*'];

export const CalculatorView: React.FC = () => {
    const inputRef = useRef<CalculatorInput>();

    const setState = (data: Partial<ICalculatorInputState>) => {
        inputRef.current?.setState((prev) => ({ ...prev, ...data }));
    };

    const clearAction = () => {
        setState({ input: '0', expression: '0' });
    };

    const numberAction = (number: string) => {
        const { input, expression } = inputRef?.current.state;
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
                    inputRef.current?.setState((prev) => ({
                        ...prev,
                        expression: prev.expression + '0',
                    }));
                }
            } else {
                // Replace zero by digit 1-9
                inputRef.current?.setState((prev) => ({
                    ...prev,
                    input: number,
                    expression: expressionValue == '0' ? number : prev.expression + number,
                }));
                return;
            }
        }
        // Ignore duplicate decimal delimiter sign
        if (inputValue.includes('.') && number == '.') {
            return;
        }

        inputRef.current?.setState((prev) => ({
            ...prev,
            input: prev.input + number,
            expression: prev.expression + number,
        }));
    };

    const continueWithResult = () => {
        const { expression } = inputRef?.current.state;
        const values = expression.split('=').map((x) => x.trimEnd());
        const value = values[values.length - 1] ?? '0';
        setState({ expression: value });
        return value;
    };

    const functionAction = (text: string) => {
        const { expression } = inputRef?.current.state;

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
            setState({ input: '-', expression: '-' });
            return;
        }

        if (expressionValue == '') {
            expressionValue = '0';
        }

        setState({ input: '0', expression: expressionValue + ` ${text} ` });
    };

    const deleteAction = () => {
        const { input, expression } = inputRef?.current.state;

        if (expression.includes('=')) {
            continueWithResult();
        }

        if (input.length > 1) {
            setState({ input: input.substring(0, input.length - 1) });
        } else {
            setState({ input: '0' });
        }

        if (expression.length > 1) {
            let trimmed = expression.trimEnd();
            setState({ expression: trimmed.substring(0, trimmed.length - 1).trimEnd() });
        } else {
            setState({ expression: '0' });
        }
    };

    const evaluateAction = () => {
        const { expression } = inputRef?.current.state;

        if (expression.includes('=')) {
            return;
        }
        // If expression ends with operator then append zero
        let trimmedExpression = expression.trimEnd();
        if (
            trimmedExpression.length > 0 &&
            nonRepeatingOperators.includes(trimmedExpression[trimmedExpression.length - 1])
        ) {
            inputRef.current?.setState((prev) => ({
                ...prev,
                expression: prev.expression + '0',
            }));
        }
        let result = calculate(expression);

        inputRef.current?.setState((prev) => ({
            ...prev,
            input: `${result}`,
            expression: prev.expression + ` = ${result}`,
        }));
    };

    const onKeyPress = (key: string) => {
        if (('0' < key && key <= '9') || key == '(' || key == ')') {
            numberAction(key);
        } else if (key == '.' || key == ',') {
            numberAction('.');
        } else if (['+', '-', '*', '/'].includes(key)) {
            functionAction(key);
        } else if (key == 'Enter' || key == '=') {
            evaluateAction();
        } else if (key == 'Backspace') {
            deleteAction();
        }else if (key == 'Clear') {
            clearAction();
        }
    };

    return (
        <View>
            <CalculatorInput ref={inputRef} onKeyPress={onKeyPress} />
            <CalculatorKeyboard onKeyPress={onKeyPress} />
        </View>
    );
};
