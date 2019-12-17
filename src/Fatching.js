import React from 'react';
import { StyleSheet, AppRegistry, View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, ToastAndroid } from 'react-native';

class Fatching extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
                    onPress={ () => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
                    <Image style={{ width: 100, height: 100, margin: 5 }}
                        source={{ uri: item.image }} />
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'green' }}>{item.book_title}</Text>
                        <Text style={{ fontSize: 15, color: 'orange' }}>{item.author}</Text>
                    </View>
               
            </TouchableOpacity>
        )
    }
    renderSeparator = () => {
        return (
            <View style={{ height: 1, width: '100%', backgroundColor: 'black' }}>

            </View>
        )
    }
    componentDidMount() {
        const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?index1'
        fetch(url)
            .then(data => data.json())
            .then(data2 => {
                this.setState({
                    dataSource: data2.book_array,
                    isLoading: false,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            this.state.isLoading
                ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#330066" animating />
                </View>
                :
                <View style={styles.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
        )
    }
}


export default Fatching;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})
