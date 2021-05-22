//Function for drop down to switch between F to C in temp boxes

var highTemps = [document.querySelector("#highToday"),document.querySelector("#highTomorrow"),document.querySelector("#highFriday"),document.querySelector("#highSaturday")];
var lowTemps = [document.querySelector("#lowToday"),document.querySelector("#lowTomorrow"),document.querySelector("#lowFriday"),document.querySelector("#lowSaturday")];
var lowTempNums = [65,66,61,70]
var highTempNums = [75,80,69,78]

function setTemp(element){
    console.log(element.value)
    if(element.value == 'C'){
        for (var i = 0; i<lowTemps.length; i++){
            lowTempNums[i]= Math.round(((lowTempNums[i]-32)*(5/9))*10)/10;
            lowTemps[i].innerText = lowTempNums[i] + "°";
        }
        for (var i = 0; i<highTemps.length; i++){
            highTempNums[i]= Math.round(((highTempNums[i]-32)*(5/9))*10)/10;
            highTemps[i].innerText = highTempNums[i] + "°";
        }
    }
    else {
        for (var i = 0; i<lowTemps.length; i++){
            lowTempNums[i]= Math.round(((lowTempNums[i]* (9/5))+32));
            lowTemps[i].innerText = lowTempNums[i] + "°";
        }
        for (var i = 0; i<highTemps.length; i++){
            highTempNums[i]= Math.round(((highTempNums[i]* (9/5))+32));
            highTemps[i].innerText = highTempNums[i] + "°";
        }
    }
}

//remove cookie box

function noCookies(){
    var cookieBox = document.querySelector(".cookie");
    cookieBox.remove();
}