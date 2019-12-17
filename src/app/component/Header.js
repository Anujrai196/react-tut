import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

class Header extends React.Component {
    render() {
        return (
           <View style={styles.header}>
                <Image source ={require('../image/cart.png')} style={styles.cart} />
                 <Text style={styles.logo}>e-commerce</Text>
           </View>
        )
    }
}


export default Header;

const styles = StyleSheet.create({
    header: {
        height:80,
        marginTop:20,
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:20,borderBottomWidth:4,
        borderBottomColor:'#ccc'
    },
    logo:{
        fontSize:20,
        marginLeft:10,
        fontStyle:'italic',
        color:'#292929'

    },
    cart:{
        width:40,
        height:40
    }
})

