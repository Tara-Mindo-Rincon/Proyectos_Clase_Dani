document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("startButton");
    var animationModule = document.getElementById("animationModule");

    startButton.addEventListener("click", function (event) {
        event.preventDefault();

        animationModule.style.display = "flex";

        simulateAnimationCompletion();
    });

    function simulateAnimationCompletion() {
        setTimeout(function () {
            animationModule.style.display = "none";
        }, 3000); 
    }
});
