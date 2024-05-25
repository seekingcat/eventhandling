/*

***********************
*                     *
*   POINTER EVENTS    *
*                     *
***********************
*/

const colorButtons = document.querySelectorAll('.colorful');
const h2 = document.querySelectorAll('h2');
const eventbutton = document.querySelector('#eventbutton');

const Change = () => {
    const random = () => Math.floor(Math.random() * 255 + 1);
    const generated = `rgb(${random()}, ${random()}, ${random()})`;
    return generated
}

for (let button of colorButtons) {
    button.addEventListener('click', colorize)
}

for (let heading of h2) {
    heading.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = Change();
    this.style.color = Change();
}


// when you use the keyword this inside a callback to be used in an event handler, this will refer to the 
// thing that has been acted upon, in this case, the button or the h2

eventbutton.addEventListener('click', function(evt) {
    console.log(evt)
})

/*

***********************
*                     *
*   KEYBOARD EVENTS   *
*                     *
***********************
*/

const input = document.querySelector('input');

// input.addEventListener('keydown', function() {
//     console.log('keydown')
// })
// input.addEventListener('keyup', function() {
//     console.log('keyup')
// })

    input.addEventListener('keydown', function(e) {
    console.log(e.key);
    console.log(e.code);
 })

 window.addEventListener('keydown', function(e) {
    console.log(e.code)
 })

 /*

 ***********************
 *                     *
 *      FORM EVENTS    *
 *                     *
 ***********************

 */

// prevent form from submitting to another page, to stay on same page to maniuplate input data (single page workflow)

const form = document.querySelector('#puppyform');
const puppyName = document.querySelector('#puppyName');
const list = document.querySelector('#puppies')

form.addEventListener('submit', function(e) {
    e.preventDefault();  // prevent form from submitting to another page
    const newPup = puppyName.value;  // extract value from form input
    const newLI = document.createElement("LI");  //create a new list item to append to unpopulated ul in html
    newLI.innerText = newPup;  //fill in the list item value with input value from form
    list.append(newLI);  // put new filled in li into ul in html
    puppyName.value = "";  //reset form input to be empty
})