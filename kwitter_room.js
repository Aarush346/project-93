var firebaseConfig = {
      apiKey: "AIzaSyAl6OZkzj6zE443trHeNTUreQuaQ4Dte4Q",
      authDomain: "class-94-25447.firebaseapp.com",
      databaseURL: "https://class-94-25447-default-rtdb.firebaseio.com",
      projectId: "class-94-25447",
      storageBucket: "class-94-25447.appspot.com",
      messagingSenderId: "194606793937",
      appId: "1:194606793937:web:5b222966b007f2ab8c31f0"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room name - " + Room_names);
row =  "<div class 'room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data ['like'];
name_with_tag = "<h4>"+ name+"<img class='user_tick'src= 'tick.png'></h4>";
message_with_tag = "<h4 class ' message_h4'>" + message + "</h4>";
like_button+= "<button class+'btn btn-warning'  id= "+firebase_message_id+" value="+like+" onclick='updateLike(this.id'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:"+ like + "</span></button><hr>";

row = name_with_tag + message_with_tag + like_button+ span_with_tag;
document.getElementById("output").innerHTML += row;

      });});}
getData();
function  addroom()
{
Room_names = document.getElementById("room_name").value
firebase.database().ref("/").child(Room_names).update({purpose : "adding room name"});
localStorage.setItem("room_name", Room_names);
window.location = "kwitter_page.html";

}
 function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
 }
