function startupThank(){
    document.getElementById('thank_logo').src = chrome.extension.getURL('assets/penny.png');
    window.addEventListener('click', function(e){
        closeThankWindow();
    })
}
function closeThankWindow() {
    document.getElementById('thank-window').style.display = 'none';
    document.getElementById('thank-overlay').style.display = 'none';
}