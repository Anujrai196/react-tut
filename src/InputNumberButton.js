import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';

class InputNumberButton extends React.Component {
    render() {
        const { value, handleOnPress } = this.props;
        return (
            <TouchableOpacity  style = {styles.container}
                onPress = {() => handleOnPress(value)}  >
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        )
    }
}


export default InputNumberButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: "center",
        margin: 1,

    },
    text: {
        color: 'white',
        fontSize: 26,
        textAlign: 'center'
    }

})
