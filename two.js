
//ADD YOUR FIREBASE LINKS HERE



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCCyA7eOnTIj-vCmXXY6kvGCffLTGSzhzQ",
  authDomain: "binod-social-app.firebaseapp.com",
  databaseURL: "https://binod-social-app-default-rtdb.firebaseio.com",
  projectId: "binod-social-app",
  storageBucket: "binod-social-app.appspot.com",
  messagingSenderId: "176374576334",
  appId: "1:176374576334:web:1fde72b6d2bb42ac740c9f",
  measurementId: "G-XC2GPR0GZM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome to kwitter "+user_name+"!";

function addroom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name",room_name);
  window.location="three.html";


}
function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="three.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="one.html";
}


