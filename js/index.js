// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
// var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }


let nav_box= document.getElementById("nav-box");
let hamburge_button=document.getElementById("hamburgerButton");
let hamburger_close_button=document.getElementById("hamburger-close-button");


hamburge_button.onclick = function(){
    nav_box.classList.toggle("open-nav");

    // if(nav_box.classList.contains("open-nav")){
    //     hamburge_button.src='../assets/icons/close_img.svg'
    // }
    // else{
    //     hamburge_button.src='../assets/icons/hamburger_img.svg'

    // }


}

hamburger_close_button.onclick = function(){
    nav_box.classList.toggle("open-nav");

    // if(nav_box.classList.contains("open-nav")){
    //     hamburger_close_button.src='../assets/icons/close_img.svg'
    // }
    // else{
    //     hamburger_close_button.src='../assets/icons/hamburger_img.svg'

    // }

}   



