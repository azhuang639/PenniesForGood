function startup(x){
    document.getElementById("no_donate").addEventListener('click', closeWindow);
}

function closeWindow(){
    document.getElementById('buy-window').style.display = 'none';
    document.getElementById('buy-overlay').style.display = 'none';

    // Tell click event listener that impulse window was already show
    const buyChecked = document.createElement('div');
    buyChecked.id = 'buyChecked';
    buyChecked.style.display = 'none';
    document.getElementsByTagName('body')[0].append(buyChecked);
}

window.onload = function() {
    var submitLink = document.getElementById('submitButton');
    submitLink.onclick = function() {
        var value = document.getElementById('userInput').value;
        //alert(value);

        chrome.storage.sync.set({'myLine': value}, function() {
            alert('success')
        });

        //chrome.storage.sync.get({
        //    'yourKEYNAME' : 'YOUR KEY VALUE'
        //});
    }

    document.getElementById('get').onclick = function() {
        chrome.storage.sync.get('myLine', function(data) {
            alert(data.myLine);
        })
    }
}