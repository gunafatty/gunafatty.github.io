document.addEventListener("DOMContentLoaded", () => {
    var isPlaying = 0;
    var playElem = $('.btn-play');
    var pauseElem = $('.btn-pause');
    const player = new Plyr('#player');

    function play() {
        if (0 === isPlaying) {
            player.play();
            isPlaying = 1;
            pauseElem.removeClass('d-none');
            pauseElem.addClass('d-flex');
            playElem.removeClass('d-flex');
            playElem.addClass('d-none');
        }
    }

    function playModal() {
        player.play();
        $(".modal-backdrop").remove();
        pauseElem.removeClass('d-none');
        pauseElem.addClass('d-flex');
        playElem.removeClass('d-flex');
        playElem.addClass('d-none');
        isPlaying = 1;
        console.log('trigger');
    }

    function pause() {
        if (1 === isPlaying) {
            player.pause()
            isPlaying = 0;
            pauseElem.removeClass('d-flex');
            pauseElem.addClass('d-none');
            playElem.removeClass('d-none');
            playElem.addClass('d-flex');
        }
    }

    window.player = player;

    $('#open-play').on('click', function () {
        playModal();
    });

    playElem.on('click', function () {
        if (!isPlaying) {
            play();
        } else {
            pause();
        }
    });

    pauseElem.on('click', function () {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    });
})
