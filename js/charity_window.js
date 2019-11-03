//var counts = -1;

function startupCharity(){
    document.getElementById('charity_logo').src = chrome.extension.getURL('assets/penny.png');
    var hover1 = document.getElementById('hover1');
    var hover2 = document.getElementById('hover2');
    var hover3 = document.getElementById('hover3');
    addMoney();
}

function addMoney(){
    var submitOneLink = document.getElementById('firstButton');
    submitOneLink.onclick = function () {
        newTotal();
    }
    var submitTwoLink = document.getElementById('secondButton');
    submitTwoLink.onclick = function () {
        newTotal();
    }
    var submitThreeLink = document.getElementById('thirdButton');
    submitThreeLink.onclick = function () {
        newTotal();
    }
    /*
    document.getElementById('get').onclick = function () {
        chrome.storage.sync.get('myLine', function (data) {
            alert(data.myLine);
        })
    }
    */

}

function newTotal(){
    counts += 1;
    var val = donated;

    if (counts > -2) {
        chrome.storage.sync.get('myLine', function (data) {
            chrome.storage.sync.set({'myLine': (Number(val) + Number(data.myLine))}, function() {
                alert("success adding money!");
                chrome.storage.sync.get('myLine', function (data) {
                    alert("new total is: " + parseFloat(data.myLine).toFixed(2));
                })
            })
        })
    }
    else {
        chrome.storage.sync.set({'myLine': val }, function () {
            alert("success!");
            chrome.storage.sync.get('myLine', function (data) {
                alert("total is: " + parseFloat(data.myLine).toFixed(2));
            })
        });
    }
}