
let count = 0;

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (ele) {
        const classes = ele.currentTarget.classList;
        if (classes.contains("decrease")) {
            count--;
        } else if (classes.contains("reset")) {
            count = 0;
        } else {
            count++;
        }
        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222"
        }
        value.textContent = count;
    });
});