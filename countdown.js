// Countdown display
function displayCountdown(){
    const endTime = new Date("Jun 10, 2022 16:30:00").getTime();
    const now = new Date().getTime();
    const timeleft = endTime - now;
    
    const days = Math.floor(timeleft/(1000*60*60*24));
    const hours = Math.floor((timeleft % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((timeleft % (1000*60*60))/(1000*60));
    const seconds = Math.floor((timeleft % (1000*60))/ 1000);
    
    const Countdown = days + "Day(s) : " + hours + "Hour(s) : " + minutes + "min(s) : " + seconds + "sec(s)";
    document.getElementById("countdowndisplay").innerHTML = Countdown;
    document.getElementById("countdowndisplay").textContent = Countdown;

    setInterval(displayCountdown, 1000);



}

displayCountdown();
