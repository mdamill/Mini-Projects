
# 1.COLOR CHANGER :-

- To select all the buttons , we can either use `getElementsByClassName()` : html collection ----> Only for loop , OR

    `querySelectorAll()` : node list ----> Supports forEach()

- We forEach() , which is a better approach :-

```js

buttons.forEach(function(btn){

  // console.log(btn) --->>> one by one each button elements
  /*WE CAN APPLY EVENT-LISTENER ON IT */

  btn.addEventListener('click', logic) // logic is function()

})

function logic(e) {

  // console.log(e); ----> PointerEvent
  // console.log(e.target); ----> HTMLSpanElement
  // console.log(e.target.id); ----> eg :- 'grey'

  if(e.target.id === 'grey')
    document.body.style.backgroundColor = e.target.id
  if(e.target.id === 'white')
    document.body.style.backgroundColor = e.target.id
  if(e.target.id === 'blue')
    document.body.style.backgroundColor = e.target.id
  if(e.target.id === 'yellow')
    document.body.style.backgroundColor = e.target.id
    
}
```

***
# 2. BMI CALCULATOR :-

- Form by default submits by 'GET' or 'POST' but e.preventDefault() => stops page reload on submission.

- While taking inputs from the form i.e height & weight , we should take it after adding event listener to the form.

- Use `isNaN()` istead of ex :- height != NaN

- Uses parseFloat instead of parseInt for decimal support

```js
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `INVALID : ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `INVALID : ${weight}`;
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span><br><span>${edgeFunction(
      bmi
    )}</span>`;
  }
});

function edgeFunction(bmi) {
  const num = parseFloat(bmi);
  if (bmi < 18.6) return `Under Weight`;
  else if (bmi >= 18.6 && bmi < 24.9) return `Normal Range`;
  else if (bmi > 24.9) return `Overweight`;
  else return `Something went wrong !`;
}

```

***

# 3. DIGITAL CLOCK :-

- We learned about Date()

- setInterval(function(), (timeInMiliSecs))

```js

  const clock = document.getElementById('clock');

  function logic() {

    let date = new Date();

    clock.textContent = date.toLocaleTimeString();
  }

  setInterval(logic, 1000);

  
```

# 4. GUESS NUMBER GAME :- [Incomplete .....]

[CHAI-CODE PROJECT-4 :- LINK](https://youtu.be/_TjtAyMkiTI?t=9513)

```js

  
  let randonNum = parseInt(Math.random() * 100 + 1);
  const userInput = document.querySelector('#guessField')
  const form = document.querySelector('form')
  const guessSlot = document.querySelector('.guesses')
  const remGuess = document.querySelector('.lastResult')
  const lowOrHi = document.querySelector('.lowOrHi')

  const guessArray = []
  let turn = 0

  remGuess.innerHTML = `3`

  let playGame = true

  if(playGame){

    form.addEventListener('submit', function(e){
      e.preventDefault();

      const guess = parseInt(userInput.value)
      // console.log(guess)
      validateGuess(guess)
    })
  }

  function validateGuess(guess){

    if(isNaN(guess))
      alert(`Invalid Input`);
    else if(guess<1 || guess>100)
      alert(`Enter value within range !`)
    else{
      guessArray.push(guess)

      if(turn === 3)
      {
        playGame = false;
        alert(`GAME OVER, REFRESH TO PLAY AGAIN !`)
      }
      else{

        valueUpdate(guess)

        // When guess equals to random number 
        if(guess === randonNum)
        lowOrHi.innerHTML = `<h2>YOU GUESSED IT !!</h2>`
        else if(guess < randonNum)
        lowOrHi.innerHTML = `<h2>Number is LOW</h2>`
        else if(guess > randonNum)
        lowOrHi.innerHTML = `<h2>Number is HIGH</h2>`
      }
    }
  }

  function valueUpdate(guess){

    userInput.value = ''

    guessSlot.textContent += `${guess}, `

    turn++;

    remGuess.textContent = `${3 - turn}`

  }
```