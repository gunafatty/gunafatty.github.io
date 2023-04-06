document.addEventListener("DOMContentLoaded", () => {
    var isPlaying = 0;
    var elem = $('#playButton');
    const player = new Plyr('#player');

    function play() {
        if (0 === isPlaying) {
            player.play();
            isPlaying = 1;
            elem.find('span').removeClass('fa-play').addClass('fa-pause');
        }
    }

    function playModal() {
        player.play();
        elem.find('span').removeClass('fa-play').addClass('fa-pause');
        isPlaying = 1;
    }

    function pause() {
        if (1 === isPlaying) {
            player.pause()
            isPlaying = 0;
            elem.find('span').removeClass('fa-pause').addClass('fa-play');
        }
    }

    window.player = player;

    $('#open-play').on('click', function () {
        playModal();
    });

    elem.on('click', function () {
        if (!isPlaying) {
            play();
        } else {
            pause();
        }
    });
})
