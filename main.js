let secretNummber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click',function () {
    const guess =Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = "no number";
    } else if (guess === secretNummber) {
        document.querySelector('.message').textContent = "correct Number";
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNummber;

     
    } else if (guess > secretNummber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "too high";
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector(".message").textContent = "you lost the game";
            document.querySelector('.score').textContent = 0;
        }
      
    } else if (guess < secretNummber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "too low";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector(".message").textContent = "you lost the game";
            document.querySelector('.score').textContent = 0;
        }
    }
})

// document.querySelector('.again').addEventListener('click',function () {
//     score = 20;
//     secretNummber = Math.trunc(Math.random() * 20) + 1;
// })

document.querySelector('.again').addEventListener('click', function () {
     score = 20;
    secretNummber = Math.trunc(Math.random() * 20) + 1;
       document.querySelector('.message').textContent = " start guessing";
     document.querySelector('.score').textContent = score

  document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';


    
    
})