let ampm = document.getElementById('ampm')

function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());
    if (hr > 12) {
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }

    document.getElementById('hours').innerHTML = padZero(hr)
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

function padZero(num) {
    return num < 10 ? "0" + num : num
}

setInterval(displayTime, 500)


// const alarmdiv = document.getElementById('alarm_container')


// const setalarmbtn = document.getElementById('setalarm').addEventListener('click', () =>{
    

//     if (alarmdiv.style.display === 'none') {
//         alarmdiv.style.display = 'block' ;
//     }else{
//         alarmdiv.style.display = 'none' 
//     }
// });


var alarmdiv = document.getElementById('alarm_containr')
var display = 0 ;

function setBtn() {

    if (display==1) {
        alarmdiv.style.display='none'
        display = 0;
        
    } else {

        alarmdiv.style.display='block'
        display =1;
        
    }
    
}







document.getElementById('snooze').disabled = true;


document.getElementById('set-btn').addEventListener('click', function () {
    var alarmInputBox = document.getElementById('alarm-time');
    var alarmInputTime = alarmInputBox.value;
    var currentTime = new Date();
    var alarmTime = new Date();


    var alarmTimeParts = alarmInputTime.split(':');
    var alarmHour = parseInt(alarmTimeParts[0], 10);
    var alarmMinute = parseInt(alarmTimeParts[1], 10);

    // Base 10 (Decimal) — Represent any number using 10 digits [0–9]
    // Base 2 (Binary) — Represent any number using 2 digits [0–1]
    // Base 8 (Octal) — Represent any number using 8 digits [0–7]
    // Base 16(Hexadecimal) — Represent any number using 10 digits and 6 characters [0–9, A, B, C, D, E, F]

    alarmTime.setHours(alarmHour);
    alarmTime.setMinutes(alarmMinute);
    alarmTime.setSeconds(0);






    if (alarmTime > currentTime) {
        var timeDifference = alarmTime - currentTime;

        setTimeout(function () {
            document.getElementById('status').textContent = "Alarm activated!";
            playAlarmSound(); alarmSnooze(); diss();
        }, timeDifference);

        alarmInputBox.disabled = true;


        document.getElementById('set-btn').disabled = true;
        document.getElementById('status').textContent = "Alarm set for " + alarmInputTime;





    } else {
        document.getElementById('status').textContent = "Alarm not set or incorrect time.";
    }


    console.log(timeDifference);
    console.log(alarmTime);
    console.log(currentTime);
    console.log(alarmTimeParts);
    console.log(alarmInputTime);

});

function playAlarmSound() {
    var audio = new Audio('./AUDIO/Emargency Alarm.mp3');
    audio.play();


}

function diss() {

    document.getElementById('set-btn').style.visibility = "hidden";

}

function alarmSnooze() {

    document.getElementById('snooze').disabled = false;

    document.getElementById('snooze').addEventListener('click', function locationreload() {
        location.reload();
    });



}



