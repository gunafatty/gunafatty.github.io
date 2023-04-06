let nav = document.querySelector('.nav');
if (nav) {
    nav.querySelectorAll('li a').forEach((a, i) => {
        a.onclick = (e) => {
            if (a.classList.contains('nav-item-active')) return;
            nav
                .querySelector('li a.nav-item-active')
                .classList.remove('nav-item-active');
            a.classList.add('nav-item-active');
        };
    });
}

let btnOpen = document.querySelector('.btn-open');
let boxGreeting = document.querySelector('.box-greeting');
let textHero = document.querySelector('.text-hero');
let cover = document.querySelector('body');
let btnPlayer = document.querySelector('#btn-play-status');
// let btnModalBarcode = document.querySelector('btn-theme-barcode');
let sectionNavbar = document.querySelector('.navbar-section');
btnOpen.onclick = (e) => {
    cover.classList.remove('over-none');
    boxGreeting.classList.add('d-none');
    textHero.classList.remove('d-none');
    if (sectionNavbar !== null) {
        sectionNavbar.classList.remove('d-none');
    }
    if (btnPlayer !== null) {
        btnPlayer.classList.remove('d-none');
    }
};
let btnPlay = document.querySelector('.btn-play');
let btnPause = document.querySelector('.btn-pause');
btnPause.onclick = (e) => {
    btnPause.classList.remove('d-flex');
    btnPause.classList.add('d-none');
    btnPlay.classList.remove('d-none');
    btnPlay.classList.add('d-flex');
};
btnPlay.onclick = (e) => {
    btnPause.classList.remove('d-none');
    btnPause.classList.add('d-flex');
    btnPlay.classList.remove('d-flex');
    btnPlay.classList.add('d-none');
};
