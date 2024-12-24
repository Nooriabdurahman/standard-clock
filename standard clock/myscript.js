function clock(){
    const now = new Date()
    let hours = now.getHours().toString().padStart(2, 0);
    const rozshab = hours >= 12 ? "PM": "AM"
    const minute = now.getMinutes().toString().padStart(2, 0);
    const second = now.getSeconds().toString().padStart(2, 0);
    const timestring = `${hours}:${minute}:${second} ${rozshab}`;
    document.getElementById("clock").textContent = timestring;
}

clock()
setInterval(clock, 1000)