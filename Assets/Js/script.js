var currenteNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currenteNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        document.getElementById('currentNumber').style.color = 'red';
    }
    else
    {
        document.getElementById('currentNumber').style.color = 'blue';
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currenteNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        document.getElementById('currentNumber').style.color = 'red';
    }
    else
    {
        document.getElementById('currentNumber').style.color = 'blue';
    }
}
