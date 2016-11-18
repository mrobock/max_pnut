var car;

function buildCar() {
var speed = 0;
  return {
    make: document.getElementById("make").value,
    model: document.getElementById("model").value,
    year: document.getElementById("year").value,
    getSpeed: speed,
    accelerate: function() {
      if (speed < 75) {
        speed += 10;
      }
      else {
        speed = 85;
      }
      document.getElementById("currentSpeed").innerHTML = "Current speed is " + speed;
    },
    brake: function() {
      if (speed < 7) {
        speed = 0;
      }
      else {
        speed -= Math.floor(Math.random() * speed/2);
      }
      document.getElementById("currentSpeed").innerHTML = "Current speed is " + speed;
    }
  }
}

function callCar() {
  car = buildCar();
  document.getElementById("info").innerHTML = car.make + " " + car.model + " " + car.year;
  document.getElementById("currentSpeed").innerHTML = car.getSpeed;

   //console.log(Object.keys(car).forEach(function(key) { key + " " + car[key];}))
}

function callAccelerate() {
  car.accelerate();
}

function callBrake() {
  car.brake();
}
