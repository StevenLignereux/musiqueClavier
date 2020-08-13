var bg = document.getElementById('particles-js');

document.addEventListener('keydown', function(event) {

    bg.style.backgroundColor = getRandomColor();
    var key = event.key;
    playMusic(key);

});

function getRandomColor() {
    
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {

        color = color + letters[Math.floor(Math.random() * letters.length)];

    }

    return color;
}

function playMusic(key) {
    
    switch (key) {
        case "z":
            var audio = new Audio('Kick1.wav');
            audio.play();
            break;
        case "q":
            var audio = new Audio('kick.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('kick2.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('Clap1.wav');
            audio.play();
            break;
    
        default:
            alert('Appuyez sur ZQSD pour jouer de la musique')
            break;
    }

}