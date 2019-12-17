import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import CustomImage from './CustomImage';

class Contant extends React.Component {
    render() {
        return (
            <View style={styles.contaner}>

                <View style={styles.col2}> 
                    <CustomImage imageSource={require('../image/2.jpeg')} 
                        header="Shirts"
                    />
                </View>  
                <View style={styles.col1}> 
                    <CustomImage imageSource={require('../image/3.jpeg')}
                        header='Shoes'
                    />
                </View>

                <View style={styles.contentBanner}> 
                    <CustomImage imageSource={require('../image/5.jpeg')} 
                        header='Smart Watch'
                    />
                </View>
                <View style={styles.col4}> 
                    <CustomImage imageSource={require('../image/12.jpeg')} 
                        header='Kurti'
                    />
                </View>  
                <View style={styles.col3}> 
                    <CustomImage  imageSource={require('../image/8.jpeg')}
                        header='Shirts'
                    />
                </View>

                <View style={styles.contentBanner}> 
                    <CustomImage imageSource={require('../image/4.jpeg')} 
                     header='Analog Watch'
                    />
                </View>
            </View>
        )
    }
}


export default Contant;

const styles = StyleSheet.create({
    contaner: {
       flex:1,
       flexDirection:'row',
       flexWrap:'wrap',
       padding:5
        
    },
    col2: {
        flex:2,
        padding:5,
       
    },
    col1: {
        flex:1.8,
        padding:5,
    },
    contentBanner: {
        width:'100%',
        height:200,
        justifyContent:'center',
        padding:5,
        alignItems:'center'
    },
    col4: {
        flex:2,
        padding:5,
    },
    col3: {
        flex:3,
        padding:5
        
    },
})

