/* eslint-disable no-unused-vars */
var state = {
  text: 'Hello_World',
  position: 0
}
var score = 0
var feedback = document.getElementById('feedback')
function $text(text, position) {
  var $text = document.createElement('div')
  $text.classList.add('text')

  var $complete = document.createElement('span')
  $complete.textContent = text.slice(0, position)

  var $current = document.createElement('span')
  $current.classList.add('current')
  $current.textContent = text[position]

  var $next = document.createElement('span')
  $next.textContent = text.slice(position + 1)

  var $score = document.getElementById('score')
  $text.append($complete, $current, $next)

  window.addEventListener('keydown', function (event) {
    if (event.key === text[position]) {
      position++
      state.position++
      score++
      feedback.textContent = 'Correct!'
      $current.textContent = text[position]
      $next.textContent = text.slice(position + 1)
    }
    else {
      if (event.key === 'Shift') {
      }
      else {
        score--
        feedback.textContent = 'Wrong!'
      }
      if (text[position] === undefined) {
        $score.textContent = 'Your score is ' + score
        console.log('OVER')
      }
    }
  })
  return $text
}

function showText(text, position) {
  position.appendChild(text)
}
showText($text(state.text, state.position), document.querySelector('.box'))
