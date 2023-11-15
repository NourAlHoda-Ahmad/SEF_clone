

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
    for (i = 0; i < program.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tablink-active", "");
    }
    document.getElementById(program_name).style.display = "block";
    evt.currentTarget.className += " tablink-active";
  }

// document.getElementById("FCS").addEventListener('click', function (){
//     // document.getElementsByClassName("program-content")[0].classList.toggle('hide-content')
//     document.getElementsByClassName("program-content")[0].setAttribute('class', 'hide-ul')
//     tasks_list_ongoing.setAttribute('class', 'hide-ul')
//     tasks_list_finished.removeAttribute('class', 'hide-ul')

// } )