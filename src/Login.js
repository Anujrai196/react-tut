import React from 'react';
import { StyleSheet,ScrollView,View,Text,Image,SafeAreaView,StatusBar,TouchableOpacity,
    TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';

class Second extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
              
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                                <View style={{flex:1,alignItems:'center',top:50}}>
                                    <Image style={{width:120,height:100}}
                                        source={require('./image/logi.png')}>
                                    </Image>
                                    <Text style={{fontSize:18,color:'#ff1',textAlign:"justify",
                                     marginTop:10,opacity:0.5}}>Acount Information</Text>
                                </View>
                                <KeyboardAvoidingView > 
                                <View style={{height:200,justifyContent:'center'}}>
                                    <TextInput style={{height:40,backgroundColor:'rgba(255,255,255,0.5)',
                                    color:'#FFF',paddingHorizontal:10,marginBottom:10}}
                                        placeholder='Enter your name/email'
                                        keyboardType='email-address'
                                        returnKeyType='next'
                                        autoCorrect={false}
                                        onSubmitEditing={()=>this.refs.txtPassword.focus()}
                                    />
                                    <TextInput style={{height:40,backgroundColor:'rgba(255,255,255,0.5)',
                                    color:'#FFF',paddingHorizontal:10,marginBottom:20}}
                                        placeholder='Enter password'
                                        returnKeyType='go'
                                        secureTextEntry
                                        autoCorrect={false}
                                        ref={"txtPassword"}
                                     />
                                    <TouchableOpacity style={{backgroundColor:'#f7c744',paddingVertical:15}}>
                                            <Text style={{textAlign:'center'}}>SIGN IN</Text>
                                    </TouchableOpacity>
                                 </View>
                                 </KeyboardAvoidingView>
                            </View>
                        </TouchableWithoutFeedback>
                   
                </SafeAreaView>
            )
    }
}


export default Second;

const styles =StyleSheet.create({
    container:{
        // height:620,
        flex:1,
        backgroundColor:'rgb(32, 53,70)',
        flexDirection:'column'   
    },
    
    
})
