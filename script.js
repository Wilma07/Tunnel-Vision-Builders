
// JavaScript functionality for website
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded!');
    const button = document.getElementById('clickMe');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});
