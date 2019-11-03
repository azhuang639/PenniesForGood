//sum of amounts raised for each charity
var char1sum = 2.89;
var char2sum = 4.39;
var char3sum = 1.9;

//goal for charities
var goal = 5.00;

//percent of goal raised

var percentChar1 = ((char1sum/goal)*100).toFixed(0);
var percentChar2 = ((char2sum/goal)*100).toFixed(0);
var percentChar3 = ((char3sum/goal)*100).toFixed(0);

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('meter1').style.width= percentChar1 +"%";
    document.getElementById('meter2').style.width= percentChar2 +"%";
    document.getElementById('meter3').style.width= percentChar3 +"%";

    document.getElementById("meter1Percent").innerHTML = ""+percentChar1 +"%";
    document.getElementById("meter2Percent").innerHTML = ""+percentChar2+"%";
    document.getElementById("meter3Percent").innerHTML = ""+percentChar3+"%";


                                                        });


