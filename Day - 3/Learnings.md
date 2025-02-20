
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

