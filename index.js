const container = document.getElementsByClassName("container")[0];

container.addEventListener("click", (event) => {

    const containerDiv = document.getElementsByClassName("container")[0];
    const x = event.offsetX;
    const y = event.offsetY;

    // create circle
    var div = document.createElement("div");
    div.className = "circle"
    div.style = `top: ${y}px; left: ${x}px;`;

    // add circle
    containerDiv.appendChild(div);
});


function changeDiameter() {
    // getting value from select
    radius = document.getElementsByClassName("radius")[0].value;
    // change diameter variable in css
    document.documentElement.style.setProperty("--diameter", parseInt(radius) + `px`)
}

