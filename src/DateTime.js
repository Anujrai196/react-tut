import React from 'react';
import { StyleSheet, AppRegistry, View, Text, TouchableOpacity } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

class DateTime extends React.Component {
    constructor() {
        super()
        this.state = {
            isVisible: false,
            chosenDate: '',
        }
    }
    handlePicker = () => {
        this.setState({
            isVisible: false,
        })
    }
    showPicker = () => {
        this.setState({
            isVisible: true,
        })
    }
    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY  HH:mm')
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:'red',fontSize:30,marginBottom:100}}> 
                    {this.state.chosenDate}
                </Text>
                <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                    <Text style={styles.text}>show DatePicker</Text>
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode={'datetime'}
                    is24Hour={true}
                />
            </View>
        )
    }
}


export default DateTime;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#F5FCFF'

    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: '#800080',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 15
    },
    text: {
        color: 'white',
        textAlign: 'center',

    }
})
