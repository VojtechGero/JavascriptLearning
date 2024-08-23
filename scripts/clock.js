function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, 0);
    const minutes = currentTime.getMinutes().toString().padStart(2, 0);
    const seconds = currentTime.getSeconds().toString().padStart(2, 0);
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateClock();
setInterval(updateClock, 250);
