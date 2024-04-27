// Dynamically adjust background size based on content
window.onload = function () {
    var aboutSection = document.getElementById('about');
    var aboutContent = document.getElementById('about-content');
    var contentHeight = aboutContent.scrollHeight;
    aboutSection.style.height = contentHeight + 'px';
}
