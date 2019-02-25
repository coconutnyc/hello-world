// how do you find elements on the page?

// quotes

console.log("loaded")

function change() {
  document.querySelector('p').style='font-family: "Courier New"; font-style: italic;' 
}

 change()

function doSomethingComplicated() {
  
}

 doSomethingComplicated()



// call back

document.querySelector('img').addEventListener('click', change)

// when the mouse goes over the image 
document.querySelector('img').addEventListener('mouseenter', changeBackground)

//change the background color

function changeBackground() {
  document.querySelector('body')
  .style = 'background-color:yellow'
}


// change the background back

function resetBackground(){
  document.querySelector('body')
  .style = 'background-color:default'

}

//when the mouse leaves the image
  document.querySelector('img')
  .addEventListener('mouseleave',resetBackground)



// data types
// numbers
// booleans
  // 
// array
// undefined
// string
// null
// objects
// datetime



// variables
let myString = "FAKE FAKE FAKE NEWS!"

console.log(myString)


// functions


// loops
for(let count=0; count<10; count++) {
  console.log(count)
  console.log('made more fake stuff')}


// condition
if (myString, length > 10) {
console.log(myString)
} 





// how do you change them?

// how do add elements to the page?


// What other things do you think js _can_ do?
