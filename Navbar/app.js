

let navToggel = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

navToggel.addEventListener("click",
    // () => links.classList.contains("show-links")
    //     ? links.classList.remove("show-links")
    //     : links.classList.add("show-links")
    () => links.classList.toggle("show-links"));