//THIS IS FOR THE WEBCHECKERS SLIDESHOW


const wc_dots = document.querySelectorAll(".wc_dot-container button");
const wc_images = document.querySelectorAll(".wc_image-container img");

let wc_i = 0; // current slide
let wc_j = 4; // total slides

function wc_next(){
    console.log("wc_next")
    document.getElementById("wc_content" + (wc_i+1)).classList.remove("active");
    wc_i = ( wc_j + wc_i + 1) % wc_j;
    document.getElementById("wc_content" + (wc_i+1)).classList.add("active");
    wc_indicator( wc_i+ 1 );
}

function wc_prev(){
    document.getElementById("wc_content" + (wc_i+1)).classList.remove("active");
    wc_i = (wc_j + wc_i - 1) % wc_j;
    document.getElementById("wc_content" + (wc_i+1)).classList.add("active");
    wc_indicator(wc_i+1);
}

function wc_indicator(num){
    console.log('wc_indicator')
    wc_dots.forEach(function(dot){
        console.log(dot)
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".wc_dot-container button:nth-child(" + num + ")").style.backgroundColor = "#ffffff";
}

function wc_dot(index){
    wc_images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("wc_content" + index).classList.add("active");
    wc_i = index - 1;
    wc_indicator(index);
}