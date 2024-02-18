// Initialize audio
let flag = document.getElementById('flag');
let audio = new Audio("21st.mp3");


function sunRise(){   
    if (window.matchMedia("(max-width: 768px)").matches) {
    
        document.querySelector(".sun").style.bottom = "28px";
    }
    if (window.matchMedia("(max-width: 360px)").matches) {
    
        document.querySelector(".sun").style.bottom = "30px";
    }
    if (window.matchMedia("(max-width: 520px)").matches) {
    
        document.querySelector(".sun").style.bottom = "30px";
    }
}

// Remove existing event listener
function removeEventListener() {
    document.querySelector(".shaheedMinar").removeEventListener('mouseenter', sunRise);
}

// Add event listener for mouseenter on .shaheedMinar
function magic() {
    document.querySelector('.flag').style.width="100px";
    document.querySelector('.shaheedMinar').style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
    document.querySelector(".block").style.backgroundColor = "white";
    document.querySelector(".block").style.color = "black";
    // Media query for screen widths less than or equal to 768px


setTimeout(function(){
    flag.innerHTML= '<img src="flag.gif" width="100" height="60">'
},1000);

}



document.querySelector('.shaheedMinar').addEventListener('mouseenter', function(){
    magic();
    sunRise();
});
document.querySelector(".instructions").addEventListener('click',function(){
    magic();
    if (audio.paused) {
        console.log("Music on");
        // If audio is paused, play it
        audio.play();
    } else {
        // If audio is already playing, do nothing
        console.log("Audio is already playing");
    }
    magic();
    sunRise();
    document.querySelector(".instructions").style.color = "black";
    
});