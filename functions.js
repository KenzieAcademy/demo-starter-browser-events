// select the element - querySelector
let clickCounterElement = document.querySelector('#clickCounter')

let replaceInnerTEXT = function( number ) {
// replace element's inner text

    clickCounterElement.innerText = `Clicked ${number} times`
    console.dir(clickCounterElement)
    return // something
}

//from main.js => line 6.

replaceInnerTEXT("hello")

// order of code
// 1. select element - line 2
// 2. assign variable - live 4
// 3. call the function - line 14
// 4. code inside function - line 5
// 5. from line 14 variable string = "hello" when called with "hello"

// select element2 = <UL> - queryselector
let keyLogger = document.querySelector('ul')
console.log(keyLogger)

//callbacks use the event Object as the argument
// could also be called keyDownHandler
let appendListItem = function( eventObject ) {
    console.log(eventObject)
    let keyCode = eventObject.code
    let listItem = document.createElement('li')
    listItem.innerText = keyCode
    keyLogger.append(listItem)
// create <li>
// add string to the li
// append li to ul

}

// appendListItem("hello") // all functions have implied return undefined
