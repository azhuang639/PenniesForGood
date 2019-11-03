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


var char1 = 0.0;
var char2 = 0.0;
var char3 = 0.0;
var totalDon = 0.0;

document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('hunger', function (data) {
        console.log("hunger " + data.hunger);
        char1 = parseFloat(data.hunger).toFixed(2);
        console.log("char1 is " + char1);
        totalDon = Number(char1) + Number(totalDon);
        console.log("totalDon is " + totalDon);

    })

    chrome.storage.sync.get('education', function (data) {
        console.log("education " + data.education);
        char2 = parseFloat(data.education).toFixed(2);
        console.log("char2 is " + char2);
        totalDon = Number(char2) + Number(totalDon);
        console.log("totalDon is " + totalDon);
    })

    chrome.storage.sync.get('health', function (data) {
        console.log("health " + data.health);
        char3 = parseFloat(data.health).toFixed(2);
        console.log("char3 is " + char3);
        totalDon = Number(char3) + Number(totalDon);
        console.log("totalDon is " + totalDon);
        console.log("final totalDon is "+totalDon);
        document.getElementById("total").innerHTML = "$" + totalDon + "";

    })


})



