let images= [
    "src/assets/chiron.png",
    "src/assets/zonda.png",
    "src/assets/divo.png",
    "src/assets/aventador.png"
];
let index = 0;
let time = 3000;

function slideshow(){
    document.getElementById("backgroundinit").src = images[index];
    index++;
    if(index == images.length){
        index = 0;
    }
    setTimeout("slideshow()",time)
}
slideshow();