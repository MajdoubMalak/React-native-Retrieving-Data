import firebase from '../fb'

 export function getBlogs(){
   return (dispatch) => {
    firebase.database().ref('/pythonfirebase-c9b2a/voiture').on('value', snapshot => {
    dispatch({
        type:"BLOGS_FETCH",
        payload: snapshot.val()
    })
    })  
     
}
}
