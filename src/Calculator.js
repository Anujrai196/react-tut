import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import InputNumberButton from './InputNumberButton';

const buttons = [
    ['CLEAR', 'DEL'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],       
    ['.', '0', '=', '+']
];

class Calculator extends React.Component {
    constructor() {
        super()
        this.initialState = {
            displayValue: '0',
            operator: null,
            firstValue: '',
            secondValue: '',
            nextValue: false
        }
        this.state = this.initialState;
    }
    renderButtons() {
        let layouts = buttons.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
                return <InputNumberButton
                    value={buttonItems}
                    handleOnPress={this.handleInput.bind(this, buttonItems)}
                    key={'btn-' + buttonIndex} />
            })
            return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
        })
        return layouts
    }
    handleInput = (input) => {
        const { displayValue, operator, firstValue, secondValue, nextValue, } = this.state;

        switch (input) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.setState({
                    displayValue: (displayValue === '0') ? input : displayValue + input
                })
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                this.setState({
                    nextValue: true,
                    operator: input,
                    displayValue: (operator !== null ? displayValue.substr(0, displayValue.length - 1) : displayValue) + input
                })

                break;

            case '.':
                let dot = displayValue.slice(-1)
                this.setState({
                    displayValue: dot !== '.' ? displayValue + input : displayValue
                })
                if (!nextValue) {
                    this.setState({
                        firstValue: firstValue + input
                    })
                } else {
                    this.setState({
                        secondValue: secondValue + input
                    })
                }
                break;
  
            case '=':
                // let formatOperator=(operator == '*') ? '*' : (operator == '/') ? '/' :operator
                let result = eval((firstValue) + (operator )+ (secondValue))
                this.setState({
                    displayValue: result,
                    operator: null,
                    firstValue: '',
                    secondValue: '',
                    nextValue: false
                })

                break;

            case 'CLEAR':
                this.setState(this.initialState)
                break;

            case 'DEL':
                let string = displayValue.toString();
                let deletedString = string.substr(0, string.length - 1);
                let length = string.length;
                this.setState({
                    displayValue: length == 1 ? '0' : deletedString
                })

                break;


        }

    }
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.resultContanier}>
                    <Text style={styles.resultText}>
                        {this.state.displayValue}
                    </Text>
                </View>
                <View style={styles.inputContanier}>
                    {this.renderButtons()}
                </View>
            </TouchableOpacity>

        )
    }
}


export default Calculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    resultContanier: {
        flex: 2,
        backgroundColor: '#1E1240',
        justifyContent: 'center'
    },
    inputContanier: {
        flex: 3,
        backgroundColor: '#3D0075',
    },
    resultText: {
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'right'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row',
    },
})
