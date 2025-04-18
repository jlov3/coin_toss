var userScore = 0; /*global*/
var compScore = 0; /*global*/
var roundNum = 0;
var history = [];

function flipping(guess) {
  window.alert("Started flipping(guess): " + guess);
  var user;
  if (guess == 'heads') {
    user = 0;
  } else {
    user = 1;
  }
  window.alert("Guess to num: " + user);

  /*https://www.w3schools.com/JS//js_random.asp*/
  var comp = Math.floor(Math.random() * 2);
  window.alert(comp);
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
  window.alert(result + " " + actual);
  return [result, actual];
}

function resulting(guess) {
  window.alert("Started resulting(guess)");
  let flip = flipping(guess);
  window.alert("Pushed to flip[]");
  let result = flip[0];
  let actual = flip[1];
  window.alert(flip);
  if (result != 'Tie') {
    var resultStr = result + ' with ' + actual + '.';
    if (result == 'User') {
      userScore += 1;
      document.getElementById('userScore').innerHTML = userScore;
    } if (result == 'Computer') {
      compScore += 1;
      document.getElementById('compScore').innerHTML = compScore;
    }
    var resultStr = result + ' wins with ' + actual + '.';
  } else {
    var resultStr = result + ' with ' + actual + '.';
  }

  let roundR = document.getElementById('roundR');
  roundR.innerHTML = resultStr;
  roundNum += 1;
  document.getElementById('roundNum').innerHTML = roundNum;
}