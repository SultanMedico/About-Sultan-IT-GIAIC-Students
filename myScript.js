document.addEventListener('DOMContentLoaded', function() {
    // Set the end date for the countdown (e.g., 12 days from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 12); // Add 12 days to the current date

    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.textContent = days < 10 ? '0' + days : days;
        hoursSpan.textContent = hours < 10 ? '0' + hours : hours;
        minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-section').innerHTML = "<h2>Sale Has Ended!</h2>";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately
});