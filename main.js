
let clickButton = document.querySelector('#incrementClick')

console.log(clickButton)

// arguments for addEventListener are: (eventName, callback) 
let clickCounter = 0
let clickHandler = function ( eventObject ) {
    clickCounter += 1
    console.log(clickCounter, eventObject)
    replaceInnerTEXT(clickCounter)
}

// only 1 event listener per event
clickButton.addEventListener('click', clickHandler)

document.addEventListener('keydown', appendListItem)

// KeyLogger - select Keylogger element addEventListener 'keyDown'

// line order = 2, 4, 7, 8, 15, (click happens), 9, 10, 11, => functions.js
// 