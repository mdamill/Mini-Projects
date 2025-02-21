
# 1. Faulty Calculator :- 
    
    Create a faulty calculator using JavaScript

    This faulty calculator does following:

    1. It takes two numbers as input from the user
    2. It perfoms wrong operations as follows:

    + => -
    * => +
    - => /
    / => **


    It performs wrong operation 10% of the times -->

```js
const randomNumber = Math.random()*100

    const num1 = parseFloat(prompt("Enter a number"))
    const c = prompt("Enter Sign : [ + - * / ]")
    const num2 = parseFloat(prompt("Enter a number"))

    // const num1 = 2
    // let c = '-'
    // const num2 = 1

    const obj ={
        "+" : "-",
        "*" : "+",
        "-" : "/",
        "/" : "**"
    }

    if(randomNumber > 10)
    {
        const result = eval(`${num1} ${c} ${num2}`)
        alert(`Result is : ${result}`) 
    }

    else {
        const result = eval(`${num1} ${obj[c]} ${num2}`)
        alert(`Result is : ${result}`) 

    }
```

***
# 2. Random Name Generator :-  [DO NOT USE ARRAYS]
    Create a business name generator by combining list of adjectives and shop name and another word :


    Adjectives:
    Crazy 
    Amazing
    Fire 

    Shop Name:
    Engine
    Foods
    Garments

    Another Word:
    Bros
    Limited
    Hub

```js
const adjectives = {
    
    1:"Engine",
    2: "Foods",
    3: "Garments"
}
const ShopName = {
      
    1:"Crazy",
    2: "Amazing",
    3: "Fire"
}
const anotherWord = {

    1:"Bros",
    2: "Limited",
    3: "Hub"
}
let rand1 =  parseInt(Math.random()*3)+1
let rand2 =  parseInt(Math.random()*3)+1
let rand3 =  parseInt(Math.random()*3)+1

const name = `${adjectives[rand1]} ${ShopName[rand2]} ${anotherWord[rand3]}`

console.log(name)
```
***

# 3. Factorial :- 



- Array(number + 1): Creates an empty array with 6 positions (because number + 1 = 6).

- .keys(): Generates numbers from 0 to 5 (array positions).

- Array.from(...): Converts these numbers into an actual array.



```js
let a = 5

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}

console.log(factorial(a))
console.log(facFor(a))
```

***

# 4. Color Generator in RGB :- 

```html
    <div class="container">
        <div class="box">Box</div>
        <div class="box">Box</div>
        <div class="box">Box</div>
        <div class="box">Box</div>
        <div class="box">Box</div>
     </div>
```

```js

function getRandomColor() {
    let r = Math.floor(Math.random() * 256); // Random value between 0-255
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`; // Format as RGB string
}

const boxs = document.querySelectorAll('.box')
// console.log(boxs) NodeList(5)

boxs.forEach( function(e){
    
    e.style.backgroundColor = getRandomColor()
    
})
```

