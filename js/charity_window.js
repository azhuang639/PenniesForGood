//var counts = -1;
const education = [
    {
        name: 'UNICEF',
        description: 'UNICEF works in over 190 countries and territories to save children’s lives, to defend their rights, and to help them fulfil their potential, from early childhood through adolescence. And we never give up.',
        url: 'https://www.icpcn.org/wp-content/uploads/2013/08/Unicef-Logo.png'
    },
    {
        name: 'ProLiteracy',
        description: 'ProLiteracy, the largest adult literacy and basic education membership organization in the nation, believes that a safer, stronger, and more sustainable society starts with an educated adult population. For more than 60 years, ProLiteracy has been working across the globe to change lives and communities through the power of literacy.',
        url: 'https://cdn1.imggmi.com/uploads/2019/11/3/31cdb5d508f07e3766c8c95d9caab657-full.png'
    },
    {
        name: 'Room to Read',
        description: 'Room to Read seeks to transform the lives of millions of children in low-income communities by focusing on literacy and gender equality in education.',
        url: 'https://cdn1.imggmi.com/uploads/2019/11/3/6bb6e84d6e3aec39476cca6d35044eca-full.png',
    },
    {
        name:'Pencils of Promise',
        description:'We believe every child should have access to quality education. We build schools and provide quality educational programming to increase literacy rates in Ghana, Guatemala, Laos and Nicaragua.',
        url: 'https://cdn1.imggmi.com/uploads/2019/11/3/868a7bab444f22e9f9c13d36f30bf6fb-full.png'
    }
];

function startupCharity(){
    var charities = education;
    document.getElementById('charity_logo').src = chrome.extension.getURL('assets/penny.png');
    var hover1 = document.getElementById('hover1');
    var hover2 = document.getElementById('hover2');
    var hover3 = document.getElementById('hover3');

    var arr = Array.from(Array(charities.length), (d, i) => i);
    // console.log(arr);

    var ind = Math.floor((Math.random() * arr.length));
    // console.log("a" + arr[ind]);
    var logo1 = document.getElementById("logo1");
    logo1.src = charities[arr[ind]].url;
    // console.log(charities[arr[ind]].url);
    hover1.innerHTML = charities[arr[ind]].description;
    arr.splice(ind,1);

    ind = Math.floor((Math.random() * arr.length));
    // console.log("a" + arr[ind]);
    var logo2 = document.getElementById("logo2");
    logo2.src = charities[arr[ind]].url;
    hover2.innerHTML = charities[arr[ind]].description;
    // console.log(charities[arr[ind]].url);
    arr.splice(ind,1);

    ind = Math.floor((Math.random() * arr.length));
    // console.log("a" + arr[ind]);
    var logo3 = document.getElementById("logo3");
    logo3.src = charities[arr[ind]].url;
    hover3.innerHTML = charities[arr[ind]].description;
    // console.log(charities[arr[ind]].url);

    // console.log();

    document.getElementById("firstButton").addEventListener('click', closeCharityWindow);
    document.getElementById("secondButton").addEventListener('click', closeCharityWindow);
    document.getElementById("thirdButton").addEventListener('click', closeCharityWindow);
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
function closeCharityWindow(){
    document.getElementById('charity-window').style.display = 'none';
    document.getElementById('charity-overlay').style.display = 'none';
    document.getElementById('buy-window').style.display = 'none';
    document.getElementById('buy-overlay').style.display = 'none';
}