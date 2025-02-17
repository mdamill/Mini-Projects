# DOM Traversal and Manipulation Guide

## Accessing Child Elements

```javascript
const parentEl = document.querySelector('.parent');

// Get HTMLCollection of child elements (array-like structure)
console.log(parentEl.children);

// Access specific child by index
console.log(parentEl.children[3].textContent); // Output: "Thursday" 
```

## Looping Through Children
```JS
for(let i = 0; i < parentEl.children.length; i++) {
    console.log(parentEl.children[i].textContent);
}
/* Output: Monday Tuesday Wednesday Thursday */
```

### Accessing First and Last Children
```JS
console.log(parentEl.firstElementChild);  // Returns Monday's div
console.log(parentEl.lastElementChild.textContent);  // Output: "Thursday"
```

### Navigating from Child to Parent
```JS
const ch = document.querySelector('.day');  // Selects first element with class 'day'
console.log(ch.parentElement);  // Returns parent element
```

## Understanding childNodes vs children

```JS
// childNodes includes all node types (elements, text, comments)
console.log(parentEl.childNodes);  // Returns NodeList(9)
console.log(parentEl.childNodes[1].textContent);  // Output: "Monday"

/* Key Difference:
| Property     | Returns        | Includes Non-Element Nodes |
|--------------|----------------|----------------------------|
| .children    | HTMLCollection | No                         |
| .childNodes  | NodeList       | Yes                        |
*/
```

## Creating and Adding Elements

```JS

// Create new element
const div = document.createElement('div');

// Add properties and styles
div.className = "main";
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";

// Add text content (two methods)
// Method 1: direct text
// div.innerText = "Chai aur code";

// Method 2: text node
const addText = document.createTextNode("Chai aur code");
div.appendChild(addText);

// Add to document
document.body.appendChild(div);
```