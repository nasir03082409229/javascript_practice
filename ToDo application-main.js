var db = firebase.database();
var rootRef = db.ref();

rootRef.on("child_added", function (s) {
    renderToDo(s);
});
rootRef.on("child_changed", function (s) {
    var itemToChang = document.querySelector("." + s.key);
    itemToChang = itemToChang.firstElementChild;
    itemToChang.innerHTML = s.val();
});

rootRef.on("child_removed",function(s){
    var itemtoRemove = document.querySelector("."+s.key);
    itemtoRemove.remove();

});

function addTo() {
    var todo = document.getElementById("todo").value;
    rootRef.push().set(todo);
}


function renderToDo(params) {
    var temp = '<li class="' + params.key + '"><span>' + params.val() + '</span><button onClick="editToDo(\'' + params.key + '\',\'' + params.val() + '\')">Edit</button>'+
    '<button onclick="deleteTodo(\'' + params.key + '\')">Remove</button></li>';
    var li = document.getElementById("list").innerHTML += temp;
}

function editToDo(key, val) {
    var newVal = prompt("Edite ToDo", val)
    var update = {};
    update[key] = newVal;
    rootRef.update(update);
}
function deleteTodo(key) {
    rootRef.child(key).remove();

}










