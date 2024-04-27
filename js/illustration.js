document.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;
    var windowWidth = window.innerWidth;

    // Adjust the speed of parallax scrolling by changing the division factor
    var speedLeft = 1.2;
    var speedRight = 1.2;

    // Calculate the new positions for the illustrations
    var newPositionLeft = scrollTop / speedLeft + "px";
    var newPositionRight = scrollTop / speedRight + "px";

    // Check if the illustrations have reached the border of the page
    var maxLeft = windowWidth - document.querySelector(".illustration-left").offsetWidth;
    var maxRight = windowWidth - document.querySelector(".illustration-right").offsetWidth;

    // Apply the new positions to the illustrations within the page boundaries
    if (parseInt(newPositionLeft) <= maxLeft) {
        document.querySelector(".illustration-left").style.left = newPositionLeft;
    }
    if (parseInt(newPositionRight) <= maxRight) {
        document.querySelector(".illustration-right").style.right = newPositionRight;
    }
});
