let image = document.getElementById("image");
let qrimage = document.getElementById("qrimage");
let content = document.getElementById("content")

function generateQR(){
    if(content.value.length >0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + content.value;
        image.classList.add("show-img");
    }
    
}