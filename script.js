document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const gameArea = document.getElementById('gameArea');
    const guessText = document.getElementById('guessText');
    const yesButton = document.getElementById('yesButton');
    const resultArea = document.getElementById('resultArea');
    const resultText = document.getElementById('resultText');
    const restartButton = document.getElementById('restartButton');
    const lowerButton = document.getElementById('lowerButton');
    const greaterButton = document.getElementById('greaterButton');

    let min = 1;
    let max = 100;
    let guess;

    function resetGame() {
        min = 1;
        max = 100;
        resultArea.style.display = 'none';
        gameArea.style.display = 'none';
        startButton.style.display = 'block';
        startButton.style.margin = '0 auto'; // Centrar el botón de empezar
    }

    function nextGuess() {
        guess = Math.floor((min + max) / 2);
        guessText.textContent = `¿Es el número ${guess}?`;
    }

    startButton.addEventListener('click', function() {
        gameArea.style.display = 'block';
        startButton.style.display = 'none';
        nextGuess(); // Mostrar el primer intento
    });

    yesButton.addEventListener('click', function() {
        resultText.textContent = `¡Tu número es el ${guess}, excelente decisión!`;
        resultArea.style.display = 'block';
        gameArea.style.display = 'none';
    });

    lowerButton.addEventListener('click', function() {
        max = guess - 1;
        nextGuess(); // Calcular y mostrar el siguiente intento
    });

    greaterButton.addEventListener('click', function() {
        min = guess + 1;
        nextGuess(); // Calcular y mostrar el siguiente intento
    });

    restartButton.addEventListener('click', resetGame);
});

