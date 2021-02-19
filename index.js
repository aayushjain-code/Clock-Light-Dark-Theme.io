// getting query
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");


// toggle function
function toggleClass(){
    const body = document.querySelector('body');
    body.classList.toggle('light');
}

// analog rotation function
setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


    // digital
    let hour=document.querySelector("#hour");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let ampm = document.querySelector("#ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = "AM";


    // AM_PM
    if(h>12){
        h = h - 12;
        var am = "PM";
    }



    // add zero before single digit numberss
    h = (h < 10) ? "0" + h:h;
    m = (m < 10) ? "0" + m:m;
    s = (s < 10) ? "0" + s:s;



    hour.innerHTML = h+":";
    minutes.innerHTML = m+":";
    seconds.innerHTML = s + "&nbsp";
    ampm.innerHTML = am;





})

