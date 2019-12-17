import React from 'react';
import { StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';

class Splash extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:2,backgroundColor:"#1f1"}}>
                <Text style={styles.text}>Hello Anuj</Text>
                </View>
            </View>
        )
    }
}


export default Splash;

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ff1",
        justifyContent:"center",
        alignContent:'center',
        
    },
    text:{
        fontSize:40,
        textAlign:'center'
    }
})
