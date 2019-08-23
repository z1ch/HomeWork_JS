let text = document.getElementById('text');
document.getElementById('replace').addEventListener('click', () => {
    text.textContent = text.textContent.replace(/\B'|'\B/g, '"');
});