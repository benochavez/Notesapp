const notes = [{
  title: 'my next trip',
  body: 'I would like to go to Spain'
},
{
  title: 'Habbits to work on',
  body: 'I would like to go to Mexico'
},
{
  title: 'Office modification',
  body: 'Get a new seat'
},
{
  title: 'Office modification',
  body: 'clean de floor'
}]

const filter ={
  searchText:''
}

// localStorage.setItem('location', 'Mexico')
console.log(localStorage.getItem('location'))
localStorage.removeItem('location')

const rendernotes =function (notes, filter) {
  filterNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML=''

  filterNotes.forEach( function (note) {
    const noteElement = document.createElement('p')
    noteElement.textContent = note.title
    document.querySelector('#notes').appendChild(noteElement)
  })
}

rendernotes(notes, filter)

/* const p=  document.querySelector('p')
p.remove() */
/* const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
  p.textContent= '///////'
  console.log(p.textContent)
  p.remove
}) */

//Ad a new Element
/* const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph) */

document.querySelector('#create-note').addEventListener('click', function (event) {
  event.target.textContent = 'The button was clicked'
  /* console.log('Dis this work?') */
  /* console.log(event) */
})

// document.querySelector('#remove-all').addEventListener('click', function () {
//   document.querySelectorAll('.note').forEach( function (note) {
//     note.remove()
//   })
//    console.log('Delete All notes')
// })

document.querySelector('#search-note').addEventListener('input', function (event) {
  // console.log(event.target.value)
  filter.searchText= event.target.value
  rendernotes(notes,filter)
})

document.querySelector('#nameForm').addEventListener('submit', function (event) {
  event.preventDefault()
  console.log(event.target.elements.firstName.value)
  e.target.elements.firstName.value = ''
})

document.querySelector('#checkFun').addEventListener('change', function (event) {
  console.log(event.target.checked)
})