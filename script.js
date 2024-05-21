const pointButton = document.querySelector('.point-button');
const gameButtons = document.querySelectorAll('.game-button');

// ゲームボタンのクリックイベント
gameButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'えびまよ遊し') {
            window.location.href = 'https://example.com/game1'; // 適切なURLに置き換える
        } else {
            window.location.href = 'https://example.com/game2'; // 適切なURLに置き換える
        }
    });
});

