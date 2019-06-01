// Create close button
var myList = document.getElementsByTagName("LI");
var i;
for(i = 0; i < myList.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myList[i].appendChild(span);
}
//Click to close button to hide the current list 
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//"Checked" symbol when clicking on a list item
var list = document.getElementById("myUl");
list.addEventListener('click', function(ev){
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
},false);

//Create a new list item when click to "Add" button
function newTask() {
    var input = document.getElementById("myInput").value;
    var ul = document.getElementById("myUl");
    var li = document.createElement("LI");
    if(input == "") {
        alert("Write something!");
    }else{
        li.appendChild(document.createTextNode(input));
        ul.appendChild(li);
        document.getElementById("myInput").value = "";
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for(i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}