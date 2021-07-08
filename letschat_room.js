var firebaseConfig = {
  apiKey: "AIzaSyBPaJevFC8vXBpehLVcuToreZrXcsvOzGs",
  authDomain: "letschat-d681c.firebaseapp.com",
  databaseURL: "https://letschat-d681c-default-rtdb.firebaseio.com",
  projectId: "letschat-d681c",
  storageBucket: "letschat-d681c.appspot.com",
  messagingSenderId: "965257757980",
  appId: "1:965257757980:web:910277e57df8e2a3dea6d9",
  measurementId: "G-6HTPDV3110"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "letsChat_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();