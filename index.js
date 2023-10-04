let time = document.getElementById('timeRun')
//let distance = document.querySelector('#distanceRun')
let speed = document.querySelector('#speedRun')

seconds = 0
minutes = 0
hours = 0

function twoNumbers(number){
    if(number < 10){
        return `0${number}`
    }else{
        return number
    }
}
function addTime(){
   seconds++
   if(seconds > 59){
        seconds = 0
        minutes++
        if(minutes > 59){
            minutes = 0
            hours++
        }
   }
   time.innerText = `${twoNumbers(hours)}:${twoNumbers(minutes)}:${twoNumbers(seconds)}`
   
   
}
setInterval(addTime ,1000)


//Executando api para pegar a velocidade do player
window.onload = function() {
    function naviSuccess(position){
        speed.innerHTML = position.coords.speed ? (position.coords.speed * 3.6).toFixed(1):0
    }
    function naviError(error){
        alert('Error 404')
    }
    const options = {enableHighAccuracy: true,
        timeout: 5000}
    navigator.geolocation.watchPosition(naviSuccess, naviError, options)

/*
//Pegano o tempo que o usuario esta correndo
    let novaHora = new Date()
    let hora = novaHora.getHours()
    let minuto = novaHora.getMinutes()
    let segundo = novaHora.getSeconds()
    console.log(`${hora}:${minuto}:${segundo}`)
    setInterval(function(){
        let hora1 = novaHora.getHours() - hora
        let minuto1 = novaHora.getMinutes() - minuto
        let segundo1 = novaHora.getSeconds() - segundo
        console.log(`${hora1}:${minuto1}:${segundo1}`)
    },1000)
*/
}
 