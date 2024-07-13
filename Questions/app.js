
const questions = document.querySelectorAll(".question");

questions.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const question = e.currentTarget;
        question.classList.toggle("show-text");
    });
});