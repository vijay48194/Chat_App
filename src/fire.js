import firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyD4iCtE6wCRAGzvotlCurul00cbEXUwh5g",
    authDomain: "chatapp-46e3d.firebaseapp.com",
    databaseURL: "https://chatapp-46e3d.firebaseio.com",
    projectId: "chatapp-46e3d",
    storageBucket: "chatapp-46e3d.appspot.com",
    messagingSenderId: "324857424220"
  };
  var fire = firebase.initializeApp(config);
  export default fire;