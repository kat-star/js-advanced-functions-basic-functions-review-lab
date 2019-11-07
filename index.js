// Your code here

function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (string = 'go to the office') {
  return `This Monday, I will ${string}.`
}

function wrapAdjective(flair = '*') {
  return function(status = 'special') {
    return `You are ${flair}${status}${flair}!`
  }
}

//each function should be a key in the object

const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

function actionApplyer(start, array) {
  if (array.length === 0) {
    return start;
  } else {
    return ((start * 2) + 1000) % 7;
  }
}