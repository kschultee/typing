/* eslint-disable no-unused-vars */
var state = {
  text: 'Hello World!'
}

function $text(text) {
  var $text = document.createElement('div')
  $text.classList.add('text')
  $text.textContent = text
  return $text
}

function showText(text, position) {
  position.appendChild(text)
}

showText($text(state.text), document.getElementById('box'))
