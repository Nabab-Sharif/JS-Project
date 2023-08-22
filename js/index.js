
let user_1 = document.querySelector('.user_1');
let user_2 = document.querySelector('.user_2');

let error_1 = document.querySelector('.error_1');
let error_2 = document.querySelector('.error_2');

let result = document.querySelector('.display');

let btn = document.querySelector('button')


btn.addEventListener('click', () => {

  let player1 = user_1.value;
  let player2 = user_2.value;

  if (player1 == '' || player2 == '') {
    error_1.innerHTML = 'have to give the both value to range 1 between 10'
    error_2.innerHTML = 'have to give the both value to range 1 between 10'
  }

  else if ((player1 < 1 || player1 > 10) || (player2 < 1 || player2 > 10)) {

    error_1.innerHTML = 'out of range 1 between 10. please Enter the number 1 between 10';

    error_2.innerHTML = 'out of range 1 between 10. please Enter the number 1 between 10';

  }

  else {
    if (player1 == player2) {
      result.innerHTML = 'first player win'
    } else if (player1 != player2) {
      result.innerHTML = 'second player win'
    }
  }





})

