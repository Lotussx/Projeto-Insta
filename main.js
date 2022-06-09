cont = 0;
images = document.querySelectorAll(".iphone img")
max = images.length;
console.log(images)

function ProxImage() {
    images[cont].classList.remove("selected");
    cont++

    if (cont >= max)
        cont = 0

    images[cont].classList.add("selected");
}

function start() {
    let time = 5000;
    setInterval(() => { ProxImage() }, time);
}

window.addEventListener("load", start);