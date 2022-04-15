var car = {
  facing: 0,
  position: {
    top: 0,
    left: 0
  },
  isMoving: false
};

var $car = document.querySelector('.car');
var $hitbox = document.querySelector('.hitbox');

// var $bound = document.querySelector('.bound');

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== ' ') {
    return;
  }
  if (event.key === 'ArrowRight') {
    makeTurn(0);
  } else if (event.key === 'ArrowLeft') {
    makeTurn(2);
  } else if (event.key === 'ArrowUp') {
    makeTurn(3);
  } else if (event.key === 'ArrowDown') {
    makeTurn(1);
  } else if (event.key === ' ') {
    toggleMoving();
  }
}

function toggleMoving() {
  if (car.isMoving) {
    return;
  }
  car.isMoving = true;
  setInterval(moveCar, 12);
}

function moveCar() {
  if (car.facing === 0) {
    car.position.left += 5;
  } else if (car.facing === 1) {
    car.position.top += 5;
  } else if (car.facing === 2) {
    car.position.left -= 5;
  } else if (car.facing === 3) {
    car.position.top -= 5;
  }
  $hitbox.style.left = ' ' + (car.position.left) + 'px';
  $hitbox.style.top = ' ' + car.position.top + 'px';
}

function makeTurn(num) {
  if (num > 4) {
    return;
  }
  car.facing = num;
  displayFacing(car.facing);
}

function displayFacing(num) {
  var degree = num * 90;
  $car.style.transform = 'rotate(' + degree + 'deg)';
}
