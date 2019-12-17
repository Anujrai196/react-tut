import React from 'react';
import { AppRegistry, View, Text,ScrollView,Dimensions} from 'react-native';

class Sliding extends React.Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHight = Dimensions.get('window').height;
        return (
           <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#5f9ea0',
                marginTop:20,width:screenWidth}}> 
                    <Text st={{fontSize:20,padding:20,textAlign:'center',color:'white'}}>Screen 1</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#f11',
                marginTop:20,width:screenWidth}}> 
                    <Text st={{fontSize:20,padding:20,textAlign:'center',color:'white'}}>Screen 2</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#1f1',
                marginTop:20,width:screenWidth}}> 
                    <Text st={{fontSize:20,padding:20,textAlign:'center',color:'white'}}>Screen 3</Text>
                </View>
            </ScrollView>
           
        )
    }
}


export default Sliding;

