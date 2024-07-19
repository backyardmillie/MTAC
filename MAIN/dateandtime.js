function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var meridiem = "";
    console.log()
    
    if (hour >= 12) {
        meridiem = "PM";
    } else {
        meridiem = "AM";
    }
    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }
    
    hour = update(hour);
    minutes = update(minutes);
    
    document.getElementById("hgjfd").innerText = hour + ":" + minutes + " " + meridiem;
    setTimeout(Time, 1000);
}

function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}

Time();