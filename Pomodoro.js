var startTime = "25:00";
var intLength = "5:00";

document.getElementById("start-time").innerHTML = startTime;
document.getElementById("int-length").innerHTML = intLength;
document.getElementById("timer").innerHTML = startTime;



/* This is Code from a youtube tutorial showing how to make a timer

function countDown() {
    this.start_time = "25:00";
    this.target_id = "#timer";
}

countDown.prototype.init = function() {
    this.reset();
    setInterval(this.name + '.tick()', 1000);
}

countDown.prototype.reset = function() {
    time = this.start_time.split(":");
    this.minutes = parseInt(time[0]);
    this.seconds = parseInt(time[1]);
    this.update_target();
}

Countdown.prototype.tick = function() {
    if (this.seconds > 0 || this.minutes > 0) {
        this.seconds = this.seconds - 1;
        if (this.seconds == 0) {
            this.minutes = this.minutes - 1;
            this.seconds = 59;
        }
    }
    this.update_target();
}

Countdown.prototype.update_target = function() {
    seconds = this.seconds;
    if (this.seconds < 10) {
        seconds = "0" + seconds;
        $(this.target_id).val(this.minutes + ":" + seconds);
    }
} */
