function toggleJobDescription(jobId) {
    var jobDescription = document.getElementById(jobId + '-description');

    // Get the current computed display style
    var computedStyle = window.getComputedStyle(jobDescription);
    var displayStyle = computedStyle.getPropertyValue('display');

    // Toggle between 'none' and 'block' using CSS transition
    if (displayStyle === 'none') {
        jobDescription.style.transition = 'display 0.5s ease';
        jobDescription.style.display = 'block';
    } else {
        jobDescription.style.transition = 'display 0.5s ease';
        jobDescription.style.display = 'none';
    }
}
