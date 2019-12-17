import React from 'react';
import { AppRegistry,StyleSheet,View,Text,FlatList} from 'react-native';

import FlatDataList from './data/FlatDataList'
class FlatListItem extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#54B948'}}>
                <Text>{this.props.item}</Text>
                <Text>{this.props.item.author}</Text>
            </View>
        )
    }
}

class BasicFlatList extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                 data={FlatDataList}  
                 renderItem={({item, index})=>{
                    {/* console.log(`item = ${JSON.stringify(item)},index = ${index}`); */}
                    return(
                        <FlatListItem item={item} index={index}> 

                        </FlatListItem>
                    );
                 }}
                >

                </FlatList>
            </View>
        )
    }
}


export default BasicFlatList;

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:22
    },
})
