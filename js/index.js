

let nav_box= document.getElementById("nav-box");
let hamburge_button=document.getElementById("hamburgerButton");
let hamburger_close_button=document.getElementById("hamburger-close-button");


hamburge_button.onclick = function(){
    nav_box.classList.toggle("open-nav");

}

hamburger_close_button.onclick = function(){
    nav_box.classList.toggle("open-nav");

}   



function showContent(evt, program_name) {
    let i, program, tablinks;
    program = document.getElementsByClassName("program-content");
    for (i = 0; i < program.length; i++) {
        program[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("tablink-active");
    }

    document.getElementById(program_name).style.display = "block";
    evt.currentTarget.classList.add("tablink-active");

    const program_container = document.querySelector(".programs");
    const tab_buttons =document.querySelector(".tab-buttons") 
    // const tablink = document.querySelector(".tablink-active ");
    program_container.style.backgroundColor = getBackgroundColor(program_name);
    tab_buttons.style.backgroundColor = getBackgroundColor(program_name);
    // tablink.style.backgroundColor = getBackgroundColor(program_name);


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