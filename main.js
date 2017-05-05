var  arr = [] ;
var c =0;
var list = document.getElementById("li");
function add()
{
    var input = document.getElementById("mytext").value;
    arr.push(input);
    list.innerHTML += c+"."+input+ " <button id='"+c+"'>"+ c +"</button>"+"<br>"; 
    c++;
}
function delall()
{
    arr.slice(0);
    list.innerHTML = "";
    c=0;
}
