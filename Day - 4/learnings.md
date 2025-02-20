
# 1.Event Keycodes :- 

- Key Learnings :-  

    (a) window.addEventListener('keydown', function(e){} )

    (b) `e.key` === ' ' ? "Space-Bar":e.key &&
    `e.code`

```js

    /*
    const insert = document.querySelector('#insert')
  let div = document.createElement('div')
  // div.textContent = `Added`
  div.setAttribute('class','color')
  div.setAttribute('class','project')
  div.setAttribute('id','div-2')
  //console.log(div.className) => color
  insert.appendChild(div)

  const div2 = document.querySelector('#div-2')
  // console.log(div2)
    */

   const insert = document.querySelector('#insert')

  // main - logic
  window.addEventListener('keydown', function(e){

    // isko div me dalna tha

    div2.innerHTML = `
    <table>
  <tr>
    <th>Key</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? "Space-Bar":e.key}</td>
    <td>${e.code}</td>    
  </tr>
  
</table>
    `
  });
  
```

# 2. Async-topics & PROJECT

- setTimeout() & clearTimeout()

```js

    const timeOut = function(){
        console.log(`hey : ${Date.now()}`);
    }

    setTimeout(timeOut, 2000)
```

- MINI-PROJECT :- Change heading after sometime & Stopping it !
```js



    const changeTxt = function(){

        document.querySelector('h1').textContent = `Changed after 2 Secs`
    }

    const change = setTimeout(changeTxt, 2000)

    /* to stop it's execution */

    // clearTimeout(change)
    
    const btn = document.querySelector('#stop')
    btn.addEventListener('click',function(){
        clearTimeout(change)
            
        console.log(`STOPPED`);
    })
```
- setInterval() & clearInterval()

```js

const sayHi = function(param) {
    console.log(`${param} : ${Date.now()}`);
    
}
    
setInterval(sayHi,1000,"Parameter")
```

- Mini Project : Start par printing & Stop par ruk jana

```js

    const start = document.querySelector('#start')
    const stop = document.querySelector('#stop')

    const printTxt = function () {
        console.log(`Hi : ${Date.now()}`);
    }

    let ref;
    start.addEventListener('click', () => {
        ref = setInterval(printTxt,1000)
    })  

    stop.addEventListener('click', () => {
        clearInterval(ref)
    })
```
***
# 2. UNLIMITED COLORS :- 

- BETTER PRACTISE which fixes a bug

```js


  // generating random color

  let randomColor = function() {

    const hex = '0123456789ABCDEF'

    let color = '#'

      for(let i=0; i<6; i++)
      {
        color += `${hex[parseInt(Math.random()*10+6)]}`
      }
    return color  
  }
  // console.log(randomColor())

  function changeColor(){
    document.body.style.backgroundColor = randomColor()
  }

  // BETTER CODE PRACTISE
  
  const start = document.querySelector('#start')
  let ref;
  start.addEventListener('click', () => {
    if(!ref)
    ref = setInterval(changeColor,1000)
  })

  const stop = document.querySelector('#stop')
  stop.addEventListener('click', function(){
    clearInterval(ref)
    ref = null
  })
```