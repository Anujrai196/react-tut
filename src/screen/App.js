import React from 'react';
import { StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';
import { createBottomTabNavigator } from   'react-navigation'
import Leave from './Leave'
import TotalLeave from './TotalLeave'
import RemaningLeave from './RemaningLeave'
class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                
            </View>
        )
    }
}


export default createBottomTabNavigator({
    Leave:{
        screen:Leave
    },
    TotalLeave:{
        screen:TotalLeave
    },
    RemaningLeave:{
        screen:RemaningLeave
    }
})

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ff1",
        
    },
})
