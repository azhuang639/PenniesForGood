let active;
chrome.storage.local.get({active: true}, function(result) {
    active = result.active;
    loading(document.getElementById('pause'));
});

// var active = chrome.storage.local.get('active') ? localStorage.getItem('active') : 'true';


document.addEventListener('DOMContentLoaded', function() {
    // careful with using += to modify innerHTML, it'll remove all event listeners i think

    var pauseLink = document.getElementById('pause');
    pauseLink.addEventListener('click', function() {
        reverse(pauseLink);
        console.log("hi");
    });
});

function reverse(element) {
    if (active) {
        element.className = "resume";
        element.innerHTML = "Resume Extension";
        active = false;
        chrome.storage.local.set({'active': active});
    } else {
        element.className = "pause";
        element.innerHTML = "Pause Extension";
        active = true;
        chrome.storage.local.set({'active': active});
    }
}

function loading(element) {
    if (!active) {
        element.className = "resume";
        element.innerHTML = "Resume Extension";
    }
}