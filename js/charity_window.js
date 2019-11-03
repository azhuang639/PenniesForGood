//var counts = -1;
// var category = 0; //0, 1, 2
function startupCharity(){
    var charities;
    console.log("category is " + category);
    if(category===0) charities=education;
    else if(category===1) charities=health;
    else charities=hunger;

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

    document.getElementById("firstButton").addEventListener('click', insertThankWindow);
    document.getElementById("secondButton").addEventListener('click', insertThankWindow);
    document.getElementById("thirdButton").addEventListener('click', insertThankWindow);
    window.addEventListener('click', function(e){
        if (!document.getElementById('charity-window').contains(e.target)){
            closeCharityWindow();
        }
    })
    addMoney();
}

function addMoney(){
    var submitOneLink = document.getElementById('firstButton');
    submitOneLink.onclick = function () {
        if(category===0) newTotal();
        else if(category===1) newTotal2();
        else newTotal3();
        addSessionDonation();
    }
    var submitTwoLink = document.getElementById('secondButton');
    submitTwoLink.onclick = function () {
        if(category===0) newTotal();
        else if(category===1) newTotal2();
        else newTotal3();
        addSessionDonation();
    }
    var submitThreeLink = document.getElementById('thirdButton');
    submitThreeLink.onclick = function () {
        if(category===0) newTotal();
        else if(category===1) newTotal2();
        else newTotal3();
        addSessionDonation();
    }    
}

function addSessionDonation() {
    var val = donated;
    // fourth variable
    chrome.storage.sync.get('sessionDonation', function (data) {
        chrome.storage.sync.set({'sessionDonation': (Number(val) + Number(data.sessionDonation)).toFixed(2)}, function() {
            alert("success adding money!");
            chrome.storage.sync.get('sessionDonation', function (data) {
                alert("new total is: " + parseFloat(data.sessionDonation).toFixed(2));
            })
        })
    })
}

function newTotal(){
    counts += 1;
    var val = donated;

    if (counts > -2) {
        chrome.storage.sync.get('education', function (data) {
            chrome.storage.sync.set({'education': (Number(val) + Number(data.education)).toFixed(2)}, function() {
                alert("success adding money!");
                chrome.storage.sync.get('education', function (data) {
                    alert("new total is: " + parseFloat(data.education).toFixed(2));
                })
            })
        })
    }
    else {
        chrome.storage.sync.set({'education': val }, function () {
            alert("success!");
            chrome.storage.sync.get('education', function (data) {
                alert("total is: " + parseFloat(data.education).toFixed(2));
            })
        });
    }
}

function newTotal2(){
    counts += 1;
    var val = donated;

    if (counts > -2) {
        chrome.storage.sync.get('health', function (data) {
            chrome.storage.sync.set({'health': (Number(val) + Number(data.health)).toFixed(2)}, function() {
                alert("success adding money!");
                chrome.storage.sync.get('health', function (data) {
                    alert("new total is: " + parseFloat(data.health).toFixed(2));
                })
            })
        })
    }
    else {
        chrome.storage.sync.set({'health': val }, function () {
            alert("success!");
            chrome.storage.sync.get('health', function (data) {
                alert("total is: " + parseFloat(data.health).toFixed(2));
            })
        });
    }
}

function newTotal3(){
    counts += 1;
    var val = donated;

    if (counts > -2) {
        chrome.storage.sync.get('hunger', function (data) {
            chrome.storage.sync.set({'hunger': (Number(val) + Number(data.hunger)).toFixed(2)}, function() {
                alert("success adding money!");
                chrome.storage.sync.get('hunger', function (data) {
                    alert("new total is: " + parseFloat(data.hunger).toFixed(2));
                })
            })
        })
    }
    else {
        chrome.storage.sync.set({'hunger': val }, function () {
            alert("success!");
            chrome.storage.sync.get('hunger', function (data) {
                alert("total is: " + parseFloat(data.hunger).toFixed(2));
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
function insertThankWindow(){
    closeCharityWindow();
    fetch(chrome.extension.getURL('html/thank_window.html'))
        .then(response => response.text())
        .then(data => {
            const thankBody = document.getElementsByTagName('body')[0];
            const thankWindow = document.createElement('div');
            thankWindow.className = 'thank-window';
            thankWindow.id = 'thank-window';
            thankWindow.innerHTML = data;
            thankBody.append(thankWindow);

            const overlay = document.createElement('div');
            overlay.className = 'thank-overlay';
            overlay.id = 'thank-overlay';
            thankBody.append(overlay);
            console.log('wtf');

            startupThank();

        }).catch(err => {
        console.log('Error loading Thank window:' + err)
    });

}

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
        description:'We believe every child should have access to quality education. We build schools and provide quality sessionDonational programming to increase literacy rates in Ghana, Guatemala, Laos and Nicaragua.',
        url: 'https://cdn1.imggmi.com/uploads/2019/11/3/868a7bab444f22e9f9c13d36f30bf6fb-full.png'
    }
];
const health = [
    {
        name: 'Partners in Health',
        description: 'Our mission is to provide a preferential option for the poor in health care. By establishing long-term relationships with sister organizations based in settings of poverty, Partners In Health strives to achieve two overarching goals: to bring the benefits of modern medical science to those most in need of them and to serve as an antidote to despair.',
        url: 'https://pbs.twimg.com/profile_images/588073898018648064/6RFQt3Q_.png'
    },
    {
        name: 'BasicNeeds',
        description: '80% of people facing mental health problems live in developing countries, where fewer than 1 in 5 get any treatment. Many endure prejudice and abuse and are prevented from exercising choice, pursuing opportunities and planning for the future. BasicNeeds works with local communities in Africa and Asia to tackle stigma, improve access to treatment and support, and provide opportunities for people experiencing mental illness so that they can return to work or continue their education and fulfil their potential.',
        url: 'https://cdn1.imggmi.com/uploads/2019/11/3/18247459f7d65c6f013455558ab396a5-full.png'
    },
    {
        name: 'Village Reach',
        description: 'VillageReach works with governments to solve health care delivery challenges in low-resource communities. Our programs increase access to quality health care at the last mile, or the point at which services are delivered.',
        url: 'https://images.squarespace-cdn.com/content/v1/5a0507ca6f4ca346d3a11552/1539857167777-MIYEOFDN856VFJ4YZPJG/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/4-VR_stacked_square_500.jpg',
    },
    {
        name:'Mothers2Mothers',
        description:'Mothers2Mothers\' mission is to impact the health of mothers by putting them at the heart of improving reproductive, maternal, newborn, child, and adolescent health. Our Mentor Mother Model empowers mothers living with HIV, through education and employment, as role models to help other women and their families access essential services and medical care.',
        url: 'http://s12982.pcdn.co/wp-content/uploads/2014/03/CMYK_Logo.jpg'
    }
];
const hunger = [
    {
        name: 'Bread for the World',
        description: 'Bread for the World Institute provides nonpartisan policy analysis on hunger and strategies to end it. The Institute has been educating opinion leaders, policymakers, and the public about hunger in the United States and abroad since 1975.',
        url: 'https://www.thespruceeats.com/thmb/SwRY7BssL2CXhDfraz-Y2F8PcH8=/960x960/filters:no_upscale():max_bytes(150000):strip_icc()/11059960_10153377365465432_9188920557726685202_n-589a10213df78caebc1f703a.png'
    },
    {
        name: 'Action against Hunger',
        description: 'Action Against Hunger saves the lives of children and their families. We are there for them before and after disaster strikes. We enable people to provide for themselves, see their children grow up strong, and for whole communities to prosper. We will never give up. Until the world is free from hunger.',
        url: 'https://www.thespruceeats.com/thmb/5pYhUzRG5H0w53GtxDtj7DNczVY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14671135_10154454792975115_3350586774503887180_n-589a0f393df78caebc1f67b0.png'
    },
    {
        name: 'The Hunger Project',
        description: 'The Hunger Project envisions a world where every woman, man and child leads a healthy, fulfilling life of self-reliance and dignity. Our goal is To end hunger and poverty by pioneering sustainable, grassroots, women-centered strategies and advocating for their widespread adoption in countries throughout the world.',
        url: 'https://thp.org/wp-content/uploads/2014/10/THP-LOGO.jpg',
    },
    {
        name:'Heifer International',
        description:'Founded in 1944, the mission of Heifer International is to empower people to get themselves out of poverty. Part of the way we do this is by donating livestock such as cows, goats, and chickens, or funding similar programs to build up local economies.',
        url: 'https://i0.wp.com/events.sustainablebrands.com/sb18vancouver/wp-content/uploads/2018/05/logo-heifer-international-500x500.png?ssl=1'
    }
];