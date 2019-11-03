function initiate(){
    document.getElementById("learn_more").addEventListener('click', insertProgressBar);
}

function clearStorage(){
    chrome.storage.sync.set({'education': 0}, function() {
    })
    chrome.storage.sync.set({'health': 0}, function() {
    })
    chrome.storage.sync.set({'hunger': 0}, function() {
    })
    chrome.storage.sync.set({'sessionDonation': 0}, function() {
        alert("success resetting money!");
    })
}

function insertProgressBar() {
}


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

    var learnLink = document.getElementById('learn_more');
    learnLink.addEventListener('click', function(){
        newPopup('../html/progessBar.html');
    });

    var clearLink = document.getElementById('clearStorage');
    clearLink.addEventListener('click', function() {
        clearStorage();
    });
});


function newPopup(url) {
    chrome.tabs.create({url: url})
}

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