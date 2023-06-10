// Task 1

var main = document.getElementById("main-content")
var childs = main.children;
console.log(childs)
var render = document.getElementsByClassName("render");
for(i = 0; i < render.length; i++){
    document.write(render[i].innerHTML + "<br>")
}
var fname = document.getElementById("first-name");
fname.value = "Hassan waseem"
var lname = document.getElementById("last-name");
lname.value = "waseem ahmed"
var email = document.getElementById("email");
email.value = "hassanwas06@gmail.com"

// Task 2

var form = document.getElementById("form-content");
console.log(form.nodeType)
var lname = document.getElementById("lastName")
console.log(lname.nodeType)
lname.children.innerHTML = "Hassan waseem"
var main = document.getElementById("main-content")
var fchild = main.firstChild;
var lchild = main.lastChild;
var nextSib = lname.nextSibling;
var preSib = lname.previousSibling;
var email = document.getElementById("email")
var pnode = email.parentNode;
var pnodeType = email.parentNode.nodeType