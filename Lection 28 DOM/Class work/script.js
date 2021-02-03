// let p = document.createElement("p");
// p.innerHTML = "<span> Some text <span>"


// let b = document.createElement("button");
// b.innerText = "Show/hide"
// b.setAttribute("onclick", "toggle()")

// document.body.append(p, b)
// function toggle() {
//     //p.style.display = "none"
//     let text = document.querySelector("p")
//     if (text.style.visibility === "hidden") {
//         text.style.visibility = "visible"
//     } else { text.style.visibility = "hidden" }
// }

function showContent(num) {

    let texts = document.querySelectorAll(".content div")

    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = "none"
    }

    texts[num - 1].style.display = "block"

}


function increase() {

    let barWidth = document.querySelector(".bar").clientWidth;
    let progress = document.querySelector(".progress");
    let progressWidth = progress.clientWidth;
    if (progressWidth < barWidth) {
        progress.style.width = progressWidth + barWidth * 0.05 + "px"
    } else {
        progress.style.width = barWidth * 0.05 + "px"
    }
}
