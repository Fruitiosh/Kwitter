// Your web app's Firebase configiration
var firebaseConfig = {
      apiKey: "AIzaSyBBnPoNM0yACbQwi7ZEuk9_z-ekXeMwTzE",
      authDomain: "chat-app-prototype-a465b.firebaseapp.com",
      databaseURL: "https://chat-app-prototype-a465b.firebaseio.com",
      projectId: "chat-app-prototype-a465b",
      storageBucket: "chat-app-prototype-a465b.appspot.com",
      messagingSenderId: "159384191990",
      appId: "1:159384191990:web:7d5a752755c3757be87dd7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
