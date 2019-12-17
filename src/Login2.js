import React from 'react';
import { StyleSheet, ScrollView, View, Text, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import bgImage from './image/12.png';
import Entypo from 'react-native-vector-icons/Entypo';

class Login2 extends React.Component {
    constructor(){
        super()
        this.state={
            showPass:true,
            press:false
        }
    }
    showPass =()=>{
        if(this.state.press == false){
            this.setState({ showPass:false, press:true })
        } else{
            this.setState({ showPass:true, press:false})
        }
    }
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.container}>
                    <Image source={require('./image/2.jpeg')} style={{ height: 80, width: 100, }} />
                    <Text style={{ fontSize: 50 }}>
                        <Text style={{ color: 'orange' }}>micra</Text>
                        <Text style={{ color: '#43464B' }}>systems</Text>
                    </Text>
                    <Text style={{ color: '#43464B', fontSize: 14, left: 82, bottom: 15 }}>
                        <Text>create|</Text>
                        <Text>manage|</Text>
                        <Text>support</Text>
                    </Text>
                </View>
                <View>
                    <Entypo name='user' size={25} color={'rgba(255, 255, 255, 0.7)'}
                        style={{position:'absolute',top:15,left:10}} />
                    <TextInput style={{
                        height: 45, width: 300, backgroundColor:'rgba(0,0,0,0.35)',
                        color: 'rgba(255,255,255,0.7)', paddingHorizontal: 25,
                        paddingLeft: 45, borderRadius: 25,marginTop:10
                    }}
                        placeholder='Username'
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        keyboardType='email-address'

                    />
                    </View>
                    <View>
                    <Entypo name='lock' size={25} color={'rgba(255, 255, 255, 0.7)'}
                        style={{position:'absolute',top:15,left:10}} />
                    <TextInput style={{
                        height: 45, width: 300, backgroundColor:'rgba(0,0,0,0.35)',
                        color: 'rgba(255,255,255,0.7)', paddingHorizontal: 25,
                        paddingLeft: 45, borderRadius: 25,marginTop:10
                    }}
                        placeholder='Password'
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        returnKeyType='go'
                        secureTextEntry={this.state.showPass}
                        autoCorrect={false}
                        ref={"txtPassword"}
                        
                    />
                    <TouchableOpacity style={{position:'absolute',top:18,right:20}}
                    onPress={this.showPass.bind(this)} >
                    <Entypo name = {this.state.press == false ? 'eye' :'eye-with-line' } size={25} color={'rgba(255, 255, 255, 0.7)'}/>
                    </TouchableOpacity>
                    
                </View>
                <TouchableOpacity style={{height: 45, width: 300,borderRadius: 25,backgroundColor:'#99e599',
                justifyContent:'center',marginTop:25}}>
                        <Text style={{textAlign:'center'}}>LOGIN</Text>
                    </TouchableOpacity>
            </ImageBackground>
        )
    }
}


export default Login2;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'

    },
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,

    },

})
