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