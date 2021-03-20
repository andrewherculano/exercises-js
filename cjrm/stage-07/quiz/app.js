const quizForm = document.querySelector(".quiz-form");
const finalResult = document.querySelector('.result')

const correctAnswers = ["B", "B", "B", "B"];

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let scoreUser = 0;

  const userAnswers = [
    quizForm.inputQuestion1.value,
    quizForm.inputQuestion2.value,
    quizForm.inputQuestion3.value,
    quizForm.inputQuestion4.value,
  ];

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      scoreUser += 25;
    }
  });

  scrollTo(0,0)
  finalResult.classList.remove('d-none')
  

  let counter = 0

  const timerScore = setInterval (() => {
    if (counter === scoreUser) {
      clearInterval(timerScore)
    }
    finalResult.querySelector('span').textContent = `${counter}%`
    counter++

  }, 100)

});
