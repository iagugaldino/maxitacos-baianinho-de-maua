document.addEventListener("DOMContentLoaded", function() {
    // Código para limitar o nome dos produtos
    const productTitles = document.querySelectorAll('.product-title');
    const limit = 50;

    productTitles.forEach(title => {
        const originalText = title.textContent;
        if (originalText.length > limit) {
            const truncatedText = originalText.substring(0, limit) + '...';
            title.textContent = truncatedText;
        }
    });

    // Código para o temporizador
    const countdownElement = document.getElementById('countdown');
    let totalMinutes = 60;
    let totalSeconds = totalMinutes * 60;

    function updateCountdown() {
        if (totalSeconds < 0) {
            countdownElement.textContent = "00:00";
            return;
        }

        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        countdownElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
        totalSeconds--;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});