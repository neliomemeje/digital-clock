const time = document.getElementById("time");

setInterval(() => {
let date = new Date();

let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

let am_pm = "AM";

if(hours > 12){
	am_pm = "PM";
	hours = hours - 12;
}
if(minutes < 10){
	minutes = "0" + minutes;
}
if(seconds < 10){
	seconds = "0" + seconds;
}
time.textContent = hours + ":" + minutes + ":" + seconds + " " + am_pm;
})