function displayTime(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    
    if(h == 0){
        h = 12;
    }
    
    if(h >= 12){
        session = "PM"
    }

    if (h > 12){
        h = h % 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + " : " + m + " : " + s + " : " + session;

    document.getElementById("clockdisplay").innerHTML = time;
    
    document.getElementById("clockdisplay").textContent = time;

    setInterval(displayTime, 1000);
}

displayTime();

