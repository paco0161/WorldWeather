const degree = 6;
var hr = document.getElementsByClassName('hour-hand');
var mn = document.getElementsByClassName('minute-hand');
var sc = document.getElementsByClassName('second-hand');

var digitalHr = document.getElementsByClassName('digital-hour');
var digitalMn = document.getElementsByClassName('digital-minute');
var digitalSc = document.getElementsByClassName('digital-second');

const timeZones = ["America/Toronto", "Asia/Tokyo"];

setInterval(function() {
    let day = timeZones.map(t => new Date(new Date().toLocaleString("en-US", {timeZone: t})));

    day.forEach((value, index, array) => {
        let hour = value.getHours();
        let minute = value.getMinutes();
        let second = value.getSeconds();

        hr[index].style.transform = `rotateZ(${hour * degree * 5 + minute * degree/12}deg)`;
        mn[index].style.transform = `rotateZ(${minute * degree}deg)`;
        sc[index].style.transform = `rotateZ(${second * degree}deg)`;

        digitalHr[index].innerHTML = hour < 10 ? "0" + hour : hour;
        digitalMn[index].innerHTML = minute < 10 ? "0" + minute : minute;
        digitalSc[index].innerHTML = second < 10 ? "0" + second : second;
    });
}, 1000)