const rotatorCases = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function changeRotator() {
    // Скрываем текущее объявление
    rotatorCases[currentIndex].classList.remove('rotator__case_active');

    // Переходим к следующему объявлению
    currentIndex = (currentIndex + 1) % rotatorCases.length;

    // Показываем следующее объявление
    rotatorCases[currentIndex].classList.add('rotator__case_active');

    // Меняем цвет текста
    const currentCase = rotatorCases[currentIndex];
    currentCase.style.color = currentCase.dataset.color;

    // Устанавливаем таймер для следующей смены
    setTimeout(changeRotator, currentCase.dataset.speed);
}

// Запускаем механизм смены объявлений
setTimeout(changeRotator, 1000);