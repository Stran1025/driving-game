var car = {
  facing: 0,
  position: {
    x: 0,
    y: 0
  }
};

var $car = document.querySelector('.car');

// var $bound = document.querySelector('.bound');

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
    return;
  }
  if (event.key === 'ArrowRight') {
    makeTurn(0);
  } else if (event.key === 'ArrowLeft') {
    makeTurn(2);
  } else if (event.key === 'ArrowUp') {
    makeTurn(3);
  } else {
    makeTurn(1);
  }
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
