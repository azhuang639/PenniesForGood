window.onload = function() {
    this.document.getElementById('save').onclick = function() {
        var value = documemnt.getElementById('saveLine').value;
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