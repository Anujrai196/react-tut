import React from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Header from './Header'
import Banner from './Banner'
import Contant from './Contant'
class Home extends React.Component {
    render() {
        return (
           <ScrollView >
               <Header />
               <Banner />
               <Contant /> 
           </ScrollView>
        )
    }
}


export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:50,
        textAlign:'center'

    }
})
