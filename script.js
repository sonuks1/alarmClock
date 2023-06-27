var current_time = document.getElementById("current-time");
var alarms_list = document.getElementById("alarms-list");
var set_alarm = document.getElementById("set-alarm");

// Update the current time every second.
setInterval(function() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours > 12 ? "PM" : "AM";

  current_time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
}, 1000);

// Set an alarm.
set_alarm.addEventListener("click", function() {
  var hour = document.getElementById("alarm-hour").value;
  var minute = document.getElementById("alarm-minute").value;
  var second = document.getElementById("alarm-second").value;
  var ampm = document.getElementById("alarm-ampm").value;

  // Create a new alarm object.
  var alarm = {
    hour: hour,
    minute: minute,
    second: second,
    ampm: ampm
  };

  // Add the alarm to the alarms list.
 var li = document.createElement("li");
li.textContent = hour + ":" + minute + ":" + second + " " + ampm;
li.insertBefore(document.createElement("button"), li.firstChild);
li.firstChild.textContent = "Delete";
li.firstChild.addEventListener("click", function() {
// Remove the alarm from the list.
alarms_list.removeChild(li);
});

alarms_list.appendChild(li);
});