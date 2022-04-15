var car = {
  facing: '',
  position: {
    x: 0,
    y: 0
  }
};

car.facing = 'east';

var $bound = document.querySelector('.bound');
$bound.addEventListener('keypress');
