function getTime() {
    var date = new Date()
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var display = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clockDisplay").innerHTML = display;
}

// Apart of the html to call the function
// <button class = "center" type = "button" onclick="getTime()";>Show Time</button>
