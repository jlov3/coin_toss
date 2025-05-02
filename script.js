var userScore = 0; /*global*/
var compScore = 0;
var roundNum = 0;
/*var history = [];*/

function flipping(guess) {
  let roundR = document.getElementById('roundR');
  roundR.innerText = "";
  var user;
  if (guess == 'heads') {
    user = 0;
  } else {
    user = 1;
  }

  /*https://www.w3schools.com/JS//js_random.asp
  computer's guess*/
  var comp = Math.floor(Math.random() * 2);
  /*the coin flip*/
  var actual = Math.floor(Math.random() * 2);

  var result;
  if (user == actual && comp == actual) {
    result = 'Tie';
  } if (user == actual) {
    result = 'User';
  } else {
    result = 'Computer';
  }

  if (actual == 0) {
    actual = 'heads';
  } else {
    actual = 'tails';
  }
  return [result, actual];
}

function resulting(guess) {
  let flip = flipping(guess);
  let result = flip[0];
  let actual = flip[1];
  if (result != 'Tie') {
    var resultStr = result + ' with ' + actual + '.';
    if (result == 'User') {
      userScore += 1;
      document.getElementById('userScore').innerText = userScore;
    } if (result == 'Computer') {
      compScore += 1;
      document.getElementById('compScore').innerText = compScore;
    }
    var resultStr = result + ' wins with ' + actual + '.';
  } else {
    var resultStr = result + ' with ' + actual + '.';
  }

  roundR.innerText = resultStr;
  roundNum += 1;
  document.getElementById('roundNum').innerText = roundNum;
}