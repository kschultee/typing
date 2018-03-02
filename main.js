/* eslint-disable no-unused-vars */
var state = {
  text: 'Hello World!',
  position: 0
}

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

  $text.append($complete, $current, $next)
  return $text
}

function showText(text, position) {
  position.appendChild(text)
}

showText($text(state.text, state.position), document.querySelector('.box'))
