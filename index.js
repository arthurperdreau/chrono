document.addEventListener('DOMContentLoaded', () => {
    let timeLeft = 60;

    const timerElement = document.getElementById("timer");

    const interval = setInterval(() => {
        timerElement.textContent = timeLeft + " secondes";

        if (timeLeft <= 0) {
            clearInterval(interval);
            timerElement.textContent = "coucou";
        }

        timeLeft--;
    }, 1000);

})

