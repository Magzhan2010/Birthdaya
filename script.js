const item = document.querySelectorAll('.countdown-item > h4');

let countdownDate = new Date(2025, 11, 24, 0, 0,).getTime();

function getCountDown () {
    const nowDate = new Date().getTime();
    const dic = countdownDate - nowDate;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = Math.floor(dic / oneDay);
    let hour = Math.floor((dic % oneDay) / oneHour);
    let minute = Math.floor((dic % oneHour) / oneMinute);
    let second = Math.floor((dic % oneMinute) / 1000);

    const values = [days, hour, minute, second];
    item.forEach(function(item, index){
        item.textContent = values[index];
    });

}

let countdown = setInterval(getCountDown, 1000)
getCountDown()
