
// var arr = [1, 2, 3, 4];
// arr.forEach(function (element) {
//     if (element === 1) {
//         console.log("break");
//         break;
//     }
// });



var db = firebase.database();
var rootRef = db.ref();
var c = 1;

// var b = rootRef.child();
// console.log(b);
var totalUsers;
rootRef.on("value", function (s) {
    totalUsers = (Object.keys(s.val()).length);
    console.log(totalUsers);
    totalUsers++;

});
function signUp() {
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    rootRef.once("value", function (s) {
        var allUsers = Object.keys(s.val()).length;
        var flag = false;
        for (var i = 1; i < allUsers + 1; i++) {
            if (s.val()[i].uid === username) {
                alert("User ID already Exist");
                flag = true; // user eixst 
            }
        }
        if (flag === false) { // means same id not exist continou to add user
            rootRef.child(totalUsers).set({
                uid: username,
                password: pass
            });
        }
    })




}

function login() {
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    rootRef.once("value", function (s) {
        var objLength = Object.keys(s.val()).length;
        var flag = false;
        for (var i = 1; i < objLength + 1; i++) {
            if (s.val()[i].uid === username && s.val()[i].password === pass) {
                console.log("Login")
                flag = true;
            }
        }
        if (flag === false) {
            console.log("Invalid ")
        }
        // console.log(Object.keys(s.val()).length)
        //          console.log(s.val()[i].uid,s.val()[i].password)
    })
}