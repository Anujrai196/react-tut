import React from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';

class ImageOverlay extends React.Component {
    render() {
        let header = this.props.header ? 
        <Text style={styles.overlayheader}>{this.props.header}</Text> : null ;

        let paragraph = this.props.paragraph ? 
        <Text style={styles.overlaytext}>{this.props.paragraph}</Text> : null ;
        return (
            <View>
                {header}
                {paragraph}
            </View>
        )
    }
}


export default ImageOverlay;

const styles = StyleSheet.create({
    overlayheader: {
        shadowColor:'#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity:0.8,
        shadowRadius:3,
        elevation:1,
        
        alignSelf:'center',
        fontSize:28,
        color:'#fff',
        textAlign:'center',
        padding:10,
        backgroundColor:'rgba(255,255,255,0.5)',
        fontWeight:'bold',
            
    },
    overlaytext: {
        shadowColor:'#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity:0.6,
        shadowRadius:3,
        elevation:1,

        alignSelf:'center',
        fontSize:16,
        fontStyle:'italic',
        color:'#292929',
        textAlign:'center',
        padding:8,
        backgroundColor:'rgba(255,255,255,0.8)',
        marginTop:8,
        
    }
})

