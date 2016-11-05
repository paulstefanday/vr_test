require('aframe-text-component');
var Game = require('./game/index.js');
require('./game/events.js');
var game = new Game();

window.onload = function() {

	let scene = document.querySelector('#scene');

	if (scene.hasLoaded) {
		game.init();
	} else {
		scene.addEventListener('loaded', game.init);
	}
}


AFRAME.registerComponent('clicked', {
  init: function () {
    this.el.addEventListener('click', function(e) {
      console.log('I was clicked!', e.target.getAttribute('data-choice'));
      game.answer(e.target.getAttribute('data-choice'))
    })
  }
});
