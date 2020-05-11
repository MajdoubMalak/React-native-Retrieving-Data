import React, { Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {postBlogs} from '../actions';
import {connect} from 'react-redux';
class Post extends Component {
 
    render(){
        return (
        <View style={styles.container}>
            <Text>Post</Text>
         
            
        </View>
        );
    }
}
const styles = StyleSheet.create({
 container: {
     flex: 1,
     justifyContent: 'center',
     padding:30,
     backgroundColor:'#FFF',
 },
});
export default Post;