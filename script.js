var userScore = 0; /*global*/
var compScore = 0;
var roundNum = 0;
/*var history = [];*/

function flipping(guess) {
  document.getElementById("heads").style.backgroundColor = "#efefef";
  document.getElementById("fheads").style.backgroundColor = "#efefef";
  document.getElementById("tails").style.backgroundColor = "#efefef";
  document.getElementById("ftails").style.backgroundColor = "#efefef";

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
  } else if (user == actual) {
    result = 'User';
  } else {
    result = 'Computer';
  }
  var wrong = '';
  if (actual == 0) {
    actual = 'heads';
    wrong = 'tails';
    document.getElementById("coin").src = "images/heads.svg";
  } else {
    actual = 'tails';
    wrong = 'heads';
    document.getElementById("coin").src = "images/tails.svg";
  }
  return [result, actual, wrong];
}

function resulting(guess) {
  let flip = flipping(guess);
  let result = flip[0];
  let actual = flip[1];
  let wrong = flip[2];

  let userAct = document.getElementById(actual);
  let compAct = document.getElementById("f" + actual.toString());
  let userWro = document.getElementById(wrong);
  let compWro = document.getElementById("f" + wrong);

  if (result != 'Tie') {
    if (result === 'User') {
      userScore += 1;
      document.getElementById('userScore').innerText = userScore;
      userAct.style.backgroundColor = "#a9d8a9";
      compWro.style.backgroundColor = "#e99393";
    } else {
      compScore += 1;
      document.getElementById('compScore').innerText = compScore;
      compAct.style.backgroundColor = "#a9d8a9";
      userWro.style.backgroundColor = "#e99393";
    }
    var resultStr = result + ' wins with ' + actual + '.';
  } else {
    userAct.style.backgroundColor = "#e99393";
    userAct.style.borderColor = "#a9d8a9";
    compAct.style.backgroundColor = "#e99393";
    compAct.style.borderColor = "#a9d8a9";
    var resultStr = result + ' with ' + actual + '.';
  }

  roundR.innerText = resultStr;
  roundNum += 1;
  document.getElementById('roundNum').innerText = roundNum;
  const timed = setTimeout(resetCol, 5000);
}

function resetCol(actual) {
  let userAct = document.getElementById(actual);
  let compA = "f" + actual.toString();
  let compAct = document.getElementById(compA);

  userAct.style.backgroundColor = "#efefef";
  compAct.style.backgroundColor = "#efefef";
}