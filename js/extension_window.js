function initiate(){
    document.getElementById("learn_more").addEventListener('click', insertProgressBar);
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

    var learnLink = document.getElementById('learn_more')
    learnLink.addEventListener('click', function(){
        newPopup('../html/progessBar.html');
    });
});


function newPopup(url) {
    popupWindow = window.open(url,'popUpWindow',
        'height=600,width=1100,left=10,top=10,' +
        'resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,' +
        'location=no,directories=no,status=yes')
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