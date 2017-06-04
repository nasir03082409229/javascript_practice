function signUp()
{
    var userName = document.getElementById("username").value;    
    var pass = document.getElementById("pass").value;    
    console.log("User NAme : "+userName +" PassWord  :"+ pass);
    var signup = {
        name : userName,
        password : pass
    }
    localStorage.setItem("User Detials", JSON.stringify(signup));
    
    alert("Sign Up Complete");

}
function login()
{
    var name  = localStorage.getItem("UserName");
    var pass = localStorage.getItem("PassWord");
    
    var userName = document.getElementById("username").value;    
    var password = document.getElementById("pass").value;    
    if(userName === name && password === pass)
    {
        alert("Login");
    }else
    {
        alert("Sign Up agian Plz");
    }
}

function add()
{
    var a  = JSON.stringify(person);
    localStorage.setItem("Name",a);
    // alert("Data Added");
    var getI = JSON.parse(localStorage.getItem("Name"));
    document.getElementById("demo").innerHTML = "Name : " + getI.name;
    document.getElementById("demo1").innerHTML = "Age  : " + getI.age;
    document.getElementById("demo2").innerHTML = "institute  : " + getI.institute;
    console.log(getI);
}
function get()
{
    var name  = localStorage.getItem("Name");
    document.getElementById("demo").innerHTML = name;
}
function remove()
{
    localStorage.removeItem("Name");
}
function clear()
{
    localStorage.clear();
}

// Object
var person = {
    name : "Nasir",
    age : 19 ,
    institute : "Saylani"
}

