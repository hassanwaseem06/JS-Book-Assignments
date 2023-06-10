
// ---------------Question 01--------------

function showAlert(){
    alert("Hello World")
}

// ---------------Question 02--------------

function showAlert(){
    alert("Thank you for buying mobile from us")
}

// ---------------Question 03--------------

function delRecord(e){
    e.parentNode.parentNode.remove()
}

// ---------------Question 04---------------

function changeImage(id,src){
    var image = document.getElementById(id);
    image.src = src;
}


// ---------------Question 05--------------

function increase(){
    var value = document.getElementById("counter").innerHTML
    value = parseInt(value)
    value = value + 1
    document.getElementById("counter").innerHTML = value 
}

function decrease(){
    var value = document.getElementById("counter").innerHTML
    value = parseInt(value)
    value = value - 1
    document.getElementById("counter").innerHTML = value 
}