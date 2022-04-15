var car = {
  facing: '',
  position: {
    x: 0,
    y: 0
  }
};

car.facing = 'east';

// var $bound = document.querySelector('.bound');

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
    return;
  }
  if (event.key === 'ArrowRight') {
    makeTurn('right');
  } else {
    makeTurn('left');
  }
}

function makeTurn(direction) {

}
