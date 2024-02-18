// Initialize audio
let flag = document.getElementById('flag');
let audio = new Audio("21st.mp3");

// Function to handle sunrise animation
function sunRise() {   
    document.querySelector(".sun").style.bottom = "30px";
    
    setTimeout(function() {
        flag.innerHTML = '<img src="flag.gif" width="100" height="60">';
    }, 1000);
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector(".sun").style.bottom = "28px";
        setTimeout(function() {
            flag.innerHTML = '<img src="flag.gif" width="100" height="50">';
        }, 1000);
    }
    if (window.matchMedia("(max-width: 520px)").matches) {
        document.querySelector(".sun").style.bottom = "30px";
        setTimeout(function() {
            flag.innerHTML = '<img src="flag.gif" width="60" height="36">';
        }, 1000);
    }
    if (window.matchMedia("(max-width: 360px)").matches) {
        document.querySelector(".sun").style.bottom = "30px";
        setTimeout(function() {
            
            flag.innerHTML = '<img src="flag.gif" width="60" height="36">';
        }, 1000);
    }
}

// Function to handle mouseenter event and animations
function handleMouseEnter() {
    document.querySelector('.flag').style.width = "100px";
    document.querySelector('.shaheedMinar').style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
    document.querySelector(".block").style.backgroundColor = "white";
    document.querySelector(".block").style.color = "black";
    sunRise();
}

// Add event listener for mouseenter on .shaheedMinar
document.querySelector('.shaheedMinar').addEventListener('mouseenter', handleMouseEnter);

// Add event listener for click on .instructions (if applicable)
document.querySelector(".instructions").addEventListener('click', function() {
    handleMouseEnter(); // Trigger animations
    if (audio.paused) {
        console.log("Music on");
        audio.play(); // Start playing audio if paused
    } else {
        console.log("Audio is already playing");
    }
    this.style.color = "black"; // Change color of clicked element
});
