// basic utilities that are nice to have
const random = (array) => (
  array[Math.floor(Math.random() * array.length)]
)

// let's track visits to see if it's our user's first visit
const lastVisit = window.localStorage.getItem('lastVisit')
const isFirstVisit = lastVisit == null
window.localStorage.setItem('lastVisit', new Date())

// Let's spice it up
const setTitle = (title) => {document.title = title}

const titles = [
  'On track!',
  'No place like 127.0.0.1!',
  'asdkasdaskdasldaskd βmatthew',
  'ALL STEAM|NO BREAKS',
  function() {
    const run = () => {
      setTimeout(() => {setTitle('zephπ')}, 0)
      setTimeout(() => {setTitle('zephπyrπ')}, 1000)
      setTimeout(() => {setTitle('zephπyrπnetπ')}, 2000)
    }
    run()
    setInterval(run, 3000)
  },
  function() {
    const run = () => {
      setTimeout(() => {setTitle('________π')}, 0)
      setTimeout(() => {setTitle('_______π_')}, 100)
      setTimeout(() => {setTitle('______π__')},  200)
      setTimeout(() => {setTitle('_____π___')},   300)
      setTimeout(() => {setTitle('____π____')},    400)
      setTimeout(() => {setTitle('___π_____')},     500)
      setTimeout(() => {setTitle('__π______')},      600)
      setTimeout(() => {setTitle('_π_______')},       700)
      setTimeout(() => {setTitle('π________')},        800)
    }
    run()
    setInterval(run, 900)
  },
  function() {
    setTitle('Zephyr')
    let intervalID, timeout1, timeout2, timeout3
    window.onblur = function() {
      console.log('blur')
      const run = () => {
        timeout1 = setTimeout(() => {setTitle('π')}, 0)
        timeout2 = setTimeout(() => {setTitle('π')}, 2500)
        timeout3 = setTimeout(() => {setTitle('π')}, 2750)
      }
      run()
      intervalID = setInterval(run, 4000)
    }
    window.onfocus = function() {
      console.log('focus')
      clearInterval(intervalID)
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      intervalID, timeout1, timeout2, timeout3 = null
      setTitle('Zephyr')
    }
  }
]
const chosenTitle = random(titles)
window.onload = () => {
  if (typeof chosenTitle == 'string') {
    document.title = chosenTitle
  } else if (typeof chosenTitle == 'function') {
    chosenTitle()
  }
}