function addUser(){
    userName= document.getElementById("user_name").value;
    localStorage.setItem("user name", userName);
    window.location= "kwitter_room.html";
}