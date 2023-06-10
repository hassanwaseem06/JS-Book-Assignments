
function closeModal(){
    document.getElementById("main").className = "hidden"  
}

function showModal(id,src){
    document.getElementById("main").className = "visible"
    var imageModal = document.getElementById("modalImg")
    var image = document.getElementById(id);
    imageModal.src = src;
}
