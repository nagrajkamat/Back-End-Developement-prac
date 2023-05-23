var firebaseConfig = {
  apiKey: "AIzaSyAvc3IoIKMCCTugmKyCk2rn_VHiK6XSix8",
  authDomain: "real-time-chatapp-7509a.firebaseapp.com",
  databaseURL: "https://real-time-chatapp-7509a-default-rtdb.firebaseio.com",
  projectId: "real-time-chatapp-7509a",
  storageBucket: "real-time-chatapp-7509a.appspot.com",
  messagingSenderId: "497243844437",
  appId: "1:497243844437:web:716fd3f256fda7d47709dc",
  measurementId: "G-SL7YHNXXY0"
};

firebaseConfig.initializeApp(firebaseConfig);

const db = firebase.database();

const username = prompt("Please Tell Us Your Name");


#Sending Messages
function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref("messages/" + timestamp).set({
    username,
    message,
  });
}


#Receiving Text-Messages

const fetchChat = db.ref("messages/");

fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});


#Google-Authentication

const GoogleAuth = new firebase.auth.GoogleAuthProvider();

// To sign in with pop-up
firebase.auth().signInWithPopup(googleAuth);

//To sign in with redirect. 
firebase.auth().signInWithRedirect(googleAuth);

import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyAvc3IoIKMCCTugmKyCk2rn_VHiK6XSix8",
  authDomain: "real-time-chatapp-7509a.firebaseapp.com",
  databaseURL: "https://real-time-chatapp-7509a-default-rtdb.firebaseio.com",
  projectId: "real-time-chatapp-7509a",
  storageBucket: "real-time-chatapp-7509a.appspot.com",
  messagingSenderId: "497243844437",
  appId: "1:497243844437:web:716fd3f256fda7d47709dc",
  measurementId: "G-SL7YHNXXY0"
};
class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
  
export default Firebase;