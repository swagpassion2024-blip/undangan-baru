// 1. Buka Undangan & Play Music
const btnBuka = document.getElementById('btn-buka');
const coverPage = document.getElementById('cover-page');
const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
let isPlaying = false;

btnBuka.addEventListener('click', function() {
    // Animasi ke atas
    coverPage.style.top = '-100vh';
    // Aktifkan scroll
    document.body.classList.remove('no-scroll');

    // Play music
    music.play().then(() => {
        isPlaying = true;
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-compact-disc', 'fa-spin');
    }).catch(err => console.log("Autoplay dicegah browser: ", err));

    // Trigger animasi reveal
    reveal();
});

// 2. Toggle Music Play/Pause
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.classList.remove('fa-spin', 'fa-compact-disc');
        musicIcon.classList.add('fa-play');
    } else {
        music.play();
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-compact-disc', 'fa-spin');
    }
    isPlaying = !isPlaying;
}

// 3. Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;
        var elementVisible = 50; // Jarak dari bawah layar sebelum animasi mulai
        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// 4. Countdown Timer
// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2026 08:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If the count down is finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h3 style='color:var(--primary-color);'>Acara Sedang Berlangsung</h3>";
    }
}, 1000);

// 5. Copy text (Rekening)
function copyText(elementId) {
    var text = document.getElementById(elementId).innerText;
    // Menggunakan API Clipboard
    navigator.clipboard.writeText(text).then(function() {
        alert("Nomor rekening berhasil disalin: " + text);
    }, function(err) {
        alert("Gagal menyalin: ", err);
    });
}