
// 1. where to add
const placeList = document.getElementsByClassName('places')[0]
// 2. what to be added
const li = document.createElement('li')
li.innerText = 'lorem arah harah arh ara oijg aknj'

// 3. add the child
placeList.appendChild(li)

// console.log(place)

// 1. where to add
const mainContainer = document.getElementById('main-container')
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'this is a header'
section.appendChild(h1)

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'llalalal laaa'
ul.appendChild(li1)

section.appendChild(ul)

mainContainer.appendChild(section)
console.log(mainContainer)