gsap.from('.nav',{
    y:10,
    opacity:1,
    duration:2,

})

function luckySearch() {
    const query = document.querySelector('input[name="q"]').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${query}&btnI=I`;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'Light' : 'Dark';
    document.querySelector('.dark-mode-toggle').textContent = currentMode;
}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode();
}

