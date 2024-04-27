document.addEventListener("scroll", function () {
    var illustrations = document.querySelectorAll(".illustration-left, .illustration-right");
    var divs = document.querySelectorAll("div"); // Select all div elements on the page

    illustrations.forEach(function (illustration) {
        var rect1 = illustration.getBoundingClientRect();
        divs.forEach(function (div) {
            var rect2 = div.getBoundingClientRect();
            if (rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
                // If there's overlap, make the illustration transparent
                illustration.style.opacity = 0.5; // Set opacity to 50% (adjust as needed)
            } else {
                // If no overlap, make the illustration opaque
                illustration.style.opacity = 1; // Set opacity to 100%
            }
        });
    });
});
