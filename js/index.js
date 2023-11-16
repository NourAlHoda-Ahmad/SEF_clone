
//JS For navbar Hamburger
let nav_box = document.getElementById("nav-box");
let hamburger_button = document.getElementById("hamburgerButton");
let hamburger_close_button = document.getElementById("hamburger-close-button");


hamburger_button.onclick = function () {
    nav_box.classList.toggle("open-nav");

}

hamburger_close_button.onclick = function () {
    nav_box.classList.toggle("open-nav");

}


//JS For tabs change
function showContent(evt, program_name) {
    let i, program, tablinks;
    program = document.getElementsByClassName("program-content");
    for (i = 0; i < program.length; i++) {
        program[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("tablink-active");
        tablinks[i].style.color = "";

    }

    document.getElementById(program_name).style.display = "flex";
    evt.currentTarget.classList.add("tablink-active");
    evt.currentTarget.style.color = getBackgroundColor(program_name);


    const program_container = document.querySelector(".programs");
    const tab_buttons = document.querySelector(".tab-buttons")
    program_container.style.backgroundColor = getBackgroundColor(program_name);
    tab_buttons.style.backgroundColor = getBackgroundColor(program_name);


}

function getBackgroundColor(program_name) {
    switch (program_name) {
        case "FCS":
            return "#ffc635";
        case "FSW":
            return "#28eea7";
        case "UIX":
            return "#fb508e";
        case "FSD":
            return "#9864da";
        default:
            return "#ffc635";
    }
}


// JS For title animation in hero section
// important : code from https://codepen.io/icka-dev/pen/gOqxKzR

document.addEventListener('DOMContentLoaded', function () {
    const sentences = [

        'DATA ENGINEER ?',
        'UI/UX DESIGNER ?',
        'SOFTWARE ENGINEER ?',
        'DATA ENGINEER ?',
        'SOFTWARE ENGINEER ?'


    ];

    let currentIndex = 0;
    let offset = 0;
    const sentenceElement = document.querySelector('.title-animated');
    let forwards = true;
    let skipCount = 0;
    const skipDelay = 15;
    const speed = 95;

    const updateSentence = () => {
        sentenceElement.textContent = sentences[currentIndex].substring(0, offset);
    };

    const handleAnimation = () => {
        if (forwards) {
            if (offset >= sentences[currentIndex].length) {
                if (++skipCount === skipDelay) {
                    forwards = false;
                    skipCount = 0;
                }
            }
        } else if (offset === 0) {
            forwards = true;
            currentIndex = (currentIndex + 1) % sentences.length;
        }

        if (skipCount === 0) {
            forwards ? offset++ : offset--;
        }

        updateSentence();
    };

    setInterval(handleAnimation, speed);
});



//JS For Slider testimonials

let index = 0;
slider();

function slider() {
    let i;
    let slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    index++;

    if (index > slides.length) {
        index = 1
    }

    slides[index - 1].style.display = "flex";
    setTimeout(slider, 5000); 
}