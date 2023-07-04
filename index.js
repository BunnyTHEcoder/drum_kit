

var ww = document.querySelectorAll("button");
for(var i=0;i<7;i++){
    ww[i].addEventListener("click", function (){
        playn(this.innerHTML);
        anime(this.innerHTML);
    })
}
document.addEventListener("keydown",function (event){
    playn(event.key);
    anime(event.key);
})
function playn (key){
    switch (key) {
        case "w":
            var beat1 = new Audio('sounds/tom-1.mp3');
            beat1.play();
            break;

        case "a":
            var beat2 = new Audio('sounds/tom-2.mp3');
            beat2.play();
            break;
        case "s":
            var beat3 = new Audio('sounds/tom-3.mp3');
            beat3.play();
            break;
        case "d":
            var beat4 = new Audio('sounds/tom-4.mp3');
            beat4.play();
            break;
        case "j":
            var beat5 = new Audio('sounds/snare.mp3');
            beat5.play();
            break;
            
        case "k":
            var beat6 = new Audio('sounds/kick-bass.mp3');
            beat6.play();
            break;

        case "l":
            var beat7 = new Audio('sounds/crash.mp3');
            beat7.play();
            break;
        default:
            console.log(this.innerHTML);
    }
}
function anime(keyy){
    var anmbtn = document.querySelector("." + keyy);
    anmbtn.classList.add("pressed");
    setTimeout(function (){
        anmbtn.classList.remove("pressed");
    },100)

}

