var startTime = "25:00";
var intLength = "5:00";

document.getElementById("start-time").innerHTML = startTime;
document.getElementById("int-length").innerHTML = intLength;
document.getElementById("timer").innerHTML = startTime;

var decreaseIntByOne = function() {
    var numbifyArr = intLength.split(":");
    numbifyArr[0] = parseInt(numbifyArr[0]);

    if (numbifyArr[0] === 0) {
      return;
    }

    numbifyArr[0] = numbifyArr[0] - 1;
    intLength = numbifyArr.join(":");

    document.getElementById("int-length").innerHTML = intLength;
};


var increaseIntByOne = function() {
    var numbifyArr = intLength.split(":");
    numbifyArr[0] = parseInt(numbifyArr[0]);

    numbifyArr[0] = numbifyArr[0] + 1;
    intLength = numbifyArr.join(":");

    document.getElementById("int-length").innerHTML = intLength;
};


var decreaseStartByOne = function() {
    var numbifyArr = startTime.split(":");
    numbifyArr[0] = parseInt(numbifyArr[0]);

    if (numbifyArr[0] === 0) {
      return; // I'm hoping this will stop the whole function if true.... IT DOES WOOHOO!
    }

    numbifyArr[0] = numbifyArr[0] - 1;
    startTime = numbifyArr.join(":");

    document.getElementById("start-time").innerHTML = startTime;
    document.getElementById("timer").innerHTML = startTime;
};


var increaseStartByOne = function() {
    var numbifyArr = startTime.split(":");
    numbifyArr[0] = parseInt(numbifyArr[0]);

    numbifyArr[0] = numbifyArr[0] + 1;
    startTime = numbifyArr.join(":");

    document.getElementById("start-time").innerHTML = startTime;
    document.getElementById("timer").innerHTML = startTime;
};


var initiateTimer = function() {
    var numbifyArr = startTime.split(":");
    numbifyArr[0] = parseInt(numbifyArr[0]);
    numbifyArr[1] = parseInt(numbifyArr[1]);

    if (numbifyArr[1] === 0) {
        numbifyArr[1] = 59;
        numbifyArr[0] = numbifyArr[0] - 1;
    }
    else {
        numbifyArr[1] = numbifyArr[1] - 1;
    }

    if (numbifyArr[1] < 10) {
        numbifyArr[1] = "0" + numbifyArr[1];
    }

    startTime = numbifyArr.join(":");
    document.getElementById("timer").innerHTML = startTime;
};

      /*if (numbifyArr[1] > 0 || numbifyArr[0] > 0) {
        if (numbifyArr[1] == 0) {
            numbifyArr[0] = numbifyArr[0] - 1;
            numbifyArr[1] = 59;
        }
        else {numbifyArr[1] = numbifyArr[1] - 1;
        }
      }

      seconds = numbifyArr[1];
      if (numbifyArr[1] < 10) {
          seconds = "0" + seconds;
          document.getElementById("timer").innerHTML = numbifyArr[0] + ":" + seconds;
          }
}*/

//var timerGo = setInterval(initiateTimer, 1000);

//This is Code from a youtube tutorial showing how to make a timer

/*function initiateTimer() {
    this.start_time = startTime;
    this.target_id = "#timer";
    this.name = "timer";
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
}*/
