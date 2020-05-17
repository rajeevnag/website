let images = ["me.JPG","me_prism.JPG","me_mountain.PNG"];


function changeProfilePicture(){
    let image = document.getElementById("mainPic");
    let newImg;
    for(let i = 0; i < images.length; ++i){
        if(image.src.match(`/images/${images[i]}`)){
            newImg = "./images/" + images[(++i % images.length)];
            break;
        }
        
    }
    image.src = newImg;
}