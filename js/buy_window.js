function startup(x){
    document.getElementById('buy_logo').src = chrome.extension.getURL('assets/penny.png');
    document.getElementById("no_donate").addEventListener('click', closeBuyWindow);
    document.getElementById("yes_donate").addEventListener('click', insertCharityWindow);

}

function insertCharityWindow() {
    closeBuyWindow();
    console.log('HEPL');
    fetch(chrome.extension.getURL('html/charity_window.html'))
        .then(response => response.text())
        .then(data => {
            const charityBody = document.getElementsByTagName('body')[0];
            const charityWindow = document.createElement('div');
            charityWindow.className = 'charity-window';
            charityWindow.id = 'charity-window';
            charityWindow.innerHTML = data;
            charityBody.append(charityWindow);

            const overlay = document.createElement('div');
            overlay.className = 'charity-overlay';
            overlay.id = 'charity-overlay';
            charityBody.append(overlay);
            console.log('wtf');
        }).catch(err => {
        console.log('Error loading Charity window:' + err)
    });
}

function closeBuyWindow(){
    document.getElementById('buy-window').style.display = 'none';
    document.getElementById('buy-overlay').style.display = 'none';

    // Tell click event listener that impulse window was already show
    const buyChecked = document.createElement('div');
    buyChecked.id = 'buyChecked';
    buyChecked.style.display = 'none';
    document.getElementsByTagName('body')[0].append(buyChecked);
}

// document.addEventListener('DOMContentLoaded', function() {
//     var submitLink = document.getElementById('submitButton');
//     submitLink.onclick = function() {
//         var value = document.getElementById('userInput').value;
//         //alert(value);
//
//         chrome.storage.sync.set({'myLine': value}, function() {
//             alert('success')
//         });
//
//         //chrome.storage.sync.get({
//         //    'yourKEYNAME' : 'YOUR KEY VALUE'
//         //});
//     }
//
//     document.getElementById('get').onclick = function() {
//         chrome.storage.sync.get('myLine', function(data) {
//             alert(data.myLine);
//         })
//     }
// });