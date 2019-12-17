import React from 'react';
import { StyleSheet, View, Text, Image,ImageBackground} from 'react-native';

import ImageOverlay from './ImageOverlay'

class Banner extends React.Component {
    render() {
        return (
          
                <ImageBackground source ={require('../image/1.jpeg')} style={styles.banner}>
                    <ImageOverlay 
                    header={"Sopping is here"}
                    paragraph={'your lifestyle is depending on you'} />
               
                </ImageBackground>
           )
    }
}


export default Banner;

const styles = StyleSheet.create({
    banner: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:200,
        marginBottoms:20

        
    },
})

