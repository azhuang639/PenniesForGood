//var counts = -1;

function startupCharity(){
    document.getElementById('charity_logo').src = chrome.extension.getURL('assets/penny.png');
    addMoney();
}

function addMoney(){
    var submitLink = document.getElementById('firstButton');
    submitLink.onclick = function () {
        counts += 1;
        var val = donated
        
        if (counts > -2) {
            chrome.storage.sync.get('myLine', function (data) {
                chrome.storage.sync.set({'myLine': (Number(val) + Number(data.myLine))}, function() {
                    alert("success adding money!");
                    chrome.storage.sync.get('myLine', function (data) {
                        alert("new total is: " + data.myLine);
                    })
                })
            })
        }
        else {
            chrome.storage.sync.set({'myLine': val }, function () {
                alert("success!");
                chrome.storage.sync.get('myLine', function (data) {
                    alert("total is: " + data.myLine);
                })
            });
        }

        // check that the updated total is correct
        //chrome.storage.sync.get('myLine', function (data) {
        //    alert("new total is: " + data.myLine);
        //})
        
    }
    /*
    document.getElementById('get').onclick = function () {
        chrome.storage.sync.get('myLine', function (data) {
            alert(data.myLine);
        })
    }
    */

}
