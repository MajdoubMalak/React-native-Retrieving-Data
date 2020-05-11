import React, { Component} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {getBlogs} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';



class Blogs extends Component {
    //executer la fonction getBlogs (pour la récuperation des données)
    componentDidMount(){
       this.props.getBlogs() 
    }
    render(){
        console.log('Blogs.js', this.props.listOfBlogs)  
        return (
         
        <View style={styles.container}>
            <Text>Fetch Blogs article</Text>
            <FlatList style={{width:'100%'}}
                      data={this.props.listOfBlogs}
                      keyExtractor={(item) => item.key}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => {
                          return(
                              <View style={{elevation:8, borderRadius:15, baclgroundColor:'#575FCF', padding:20, marginBottom:15} }>
                                  <Text style={{fontSize:20, lineHeight:30, color:'#CD5C5C', fontWeight:'bold'}}>{item.Disponibilite}</Text>
  

                                  </View>
                          )
                      }}/>
                     
            <Button title="Go to Edit" onPress= {() => this.props.navigation.navigate('Edit')}/>
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
     padding:10
 },
});
function mapStateToProps(state){
    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
        return {
            ...val,
            key:key
        }
    })
    return{
        listOfBlogs
    }
}
export default connect(mapStateToProps, {getBlogs})(Blogs);