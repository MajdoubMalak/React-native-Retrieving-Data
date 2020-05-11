import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA20AHyVZsTaKvt9hgerex0AIP5GXbHP2E",
  authDomain: "pythonfirebase-c9b2a.firebaseapp.com",
  databaseURL: "https://pythonfirebase-c9b2a.firebaseio.com",
  projectId: "pythonfirebase-c9b2a",
  storageBucket: "pythonfirebase-c9b2a.appspot.com",
  messagingSenderId: "384939430332",
  appId: "1:384939430332:web:36247dd5bae6ee98135bb9",
  measurementId: "G-KWZSDXME77"
};
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  

  export default firebase;