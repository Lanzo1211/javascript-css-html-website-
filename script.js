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