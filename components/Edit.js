import React, { Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Edit extends Component {
    render(){
        return (
        <View style={styles.container}>
            <Text>EditScreen</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
 container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:'#FFF',
 },
});
export default Edit;