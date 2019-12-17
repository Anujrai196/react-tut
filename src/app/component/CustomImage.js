import React from 'react';
import { StyleSheet, Image,ImageBackground} from 'react-native';
import ImageOverlay from './ImageOverlay'
class CustomImage extends React.Component {
    render() {
        return (
            <ImageBackground source ={this.props.imageSource} style={styles.image}>
                <ImageOverlay 
                    header={this.props.header}
                    Paragraph={this.props.Paragraph}
                />
            </ImageBackground>
        )
    }
}


export default CustomImage;

const styles = StyleSheet.create({
    image: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:200
        
    }
})

