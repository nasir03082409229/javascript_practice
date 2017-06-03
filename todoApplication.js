


function myFunc() {
     var inputText = document.getElementById('inputTitle').value;
     var newList = document.createElement('LI');
     var tagInput = document.createTextNode(inputText);
     newList.appendChild(tagInput);
     document.getElementById('list').appendChild(newList).className= 'tag';

     
}

function removeAll(){
   document.getElementById("list").innerHTML = ""
}