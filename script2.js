const spotlight = document.querySelector(".spot-light");
var timeout;
document.addEventListener("mousemove", (e) => {
let x = e.pageX;
let y = e.pageY;

spotlight.style.top = y + "px";
spotlight.style.left = x + "px";
spotlight.style.display = "block";
function mouseStopped(){
    spotlight.style.display ="none";
}
clearTimeout(timeout);
timeout = setTimeout(mouseStopped, 1000);
});
document.addEventListener('mouseout',() =>{
    spotlight.style.display = "none";
})
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btn = document.querySelector('.button');
const btnM = document.querySelector('.buttonL');

const iconClose = document.querySelector('.icon-close')
function showSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'flex'
}
function hideSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'none'

}
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active'); 
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active'); 
}); 
btn.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')});
btnM.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')});    
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')});