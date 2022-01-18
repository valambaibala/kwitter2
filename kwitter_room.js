// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBx6Xc41oJ0g3bhocpe2WMMG9sjUjjk1nE",
      authDomain: "kwitter-5e19d.firebaseapp.com",
      databaseURL: "https://kwitter-5e19d-default-rtdb.firebaseio.com",
      projectId: "kwitter-5e19d",
      storageBucket: "kwitter-5e19d.appspot.com",
      messagingSenderId: "131722822692",
      appId: "1:131722822692:web:12f3a54c56ff6d9b6984b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("roomname" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick ='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;

            });
      });
}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname")
      window.location = "index.html";
}