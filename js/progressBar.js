//sum of amounts raised for each charity

var char1sum = (2.89).toFixed(2);
var char2sum = (1.19).toFixed(2);
var char3sum = (3.80).toFixed(2);

//goal for charities
var goal = 6.00;

//percent of goal raised
var percentChar1 = ((char1sum/goal)*100).toFixed(0);
var percentChar2 = ((char2sum/goal)*100).toFixed(0);
var percentChar3 = ((char3sum/goal)*100).toFixed(0);

//if the goal is exceeded, the percentage output will still be 100 and bar will not be overflowed
var percentChar1Bar = percentChar1;
var percentChar2Bar = percentChar2;
var percentChar3Bar = percentChar3;

if(percentChar1 > 100){
    percentChar1Bar = 100;
}
if(percentChar2 > 100){
    percentChar2Bar = 100;
}
if(percentChar3 > 100){
    percentChar3Bar = 100;
}


document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('hunger', function (data) {
        console.log("hunger " + data.hunger);
        char1sum = parseFloat(data.hunger).toFixed(2);
        console.log("char1sum is " + char1sum);
        percentChar1 = ((char1sum / goal) * 100).toFixed(0);
        percentChar1Bar = percentChar1;
        if (percentChar1 > 100) {
            percentChar1Bar = 100;
        }
        document.getElementById('meter1').style.width = percentChar1Bar + "%";
        document.getElementById("meter1Percent").innerHTML = "" + percentChar1Bar + "%";
        document.getElementById("meter1dollar").innerHTML = "$" + char1sum + "";
    })

    chrome.storage.sync.get('education', function (data) {
        console.log("education " + data.education);
        char2sum = parseFloat(data.education).toFixed(2);
        console.log("char2sum is " + char2sum);
        percentChar2 = ((char2sum / goal) * 100).toFixed(0);
        percentChar2Bar = percentChar2;
        if (percentChar2 > 100) {
            percentChar2Bar = 100;
        }
        document.getElementById('meter2').style.width = percentChar2Bar + "%";
        document.getElementById("meter2Percent").innerHTML = "" + percentChar2Bar + "%";
        document.getElementById("meter2dollar").innerHTML = "$" + char2sum + "";
    })

    chrome.storage.sync.get('health', function (data) {
            console.log("health " + data.health);
            char3sum = parseFloat(data.health).toFixed(2);
            console.log("char3sum is " + char3sum);
            percentChar3 = ((char3sum / goal) * 100).toFixed(0);
            percentChar3Bar = percentChar3;
            if (percentChar3 > 100) {
                percentChar3Bar = 100;
            }
        document.getElementById('meter3').style.width = percentChar3Bar + "%";
        document.getElementById("meter3Percent").innerHTML = "" + percentChar3Bar + "%";
        document.getElementById("meter3dollar").innerHTML = "$" + char3sum + "";
    })




});


