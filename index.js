
let stop = document.querySelector('#stopRun')
//contador de tempo quando abre a runPage
let time = document.getElementById('timeRun')
let seconds = 0
let minutes = 0
let hours = 0

function twoNumbers(number) {
    if (number < 10) {
        return `0${number}`
    } else {
        return number
    }
}

function addTime() {
    seconds++
    if (seconds > 59) {
        seconds = 0
        minutes++
        if (minutes > 59) {
            minutes = 0
            hours++
        }
    }
    time.innerText = `${twoNumbers(hours)}:${twoNumbers(minutes)}:${twoNumbers(seconds)}`


}
setInterval(addTime, 1000)


//Executando api para pegar a velocidade do player
let speedPage = document.querySelector('#speedRun')
let runIco = document.querySelector('.runIco')
const options = {
    enableHighAccuracy: true,
    timeout: 500,
    maximumAge: 0,
};
function success(pos) {
    const crd = pos.coords;
    let speed = crd.speed?(speed * 3.6).toFixed(0):0
    if(speed == 0){
        runIco.classList.add('d-none')
    }else{
        runIco.classList.add('d-inline-block')
    }
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    console.log(`More or less ${speed} meters.`);
    speedPage.innerText = `${speed}`
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.watchPosition(success, error, options);