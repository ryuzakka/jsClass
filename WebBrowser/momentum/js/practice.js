// const title = document.getElementById("title")
// title.innerText = "Got you!";

const h1 = document.querySelector("div.hello:first-child h1");

// javascript를 사용하지 않고 css 활용해서 색상 변경하기
/*
function handleH1Click() {
    const activeClass = "active";
    if(h1.classList.contains(activeClass)){
        h1.classList.remove(activeClass);
    } else {
        h1.classList.add(activeClass);
    }   
}
*/

function handleH1Click() {
    h1.classList.toggle("active"); 
}

h1.addEventListener("click", handleH1Click);



// event react using if-else
/*
function handleH1Click() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleH1Click);
*/


// event listen
/*
function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.style.color = "black";
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    h1.style.color = "black";
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "pink";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS! no WIFI");
}

function handleWindowOnline() {
    alert("You're on WIFI!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/