function playSound() {
    const audio = document.getElementById('loudSound');
    audio.volume = 1.0;
    audio.play()
        .then(() => {
            document.body.innerHTML = '<h1>Звук на максимуме!</h1>';
        })
        .catch(error => console.error('Ошибка:', error));
}