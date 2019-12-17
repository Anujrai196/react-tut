import React from 'react';
import { ScrollView,View,Text,StatusBar,} from 'react-native';

class First extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                
                    <Text style={styles.text}>Hello Anuj</Text>
                
            </View>
        )
    }
}


export default First;

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ff1",
        // justifyContent:"center",
        
    },
})
