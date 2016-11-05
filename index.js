require('aframe-text-component');
var Game = require('./game/index.js');
require('./game/events.js');
var yo = require('yo-yo')
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

AFRAME.registerComponent('flapping', {
  init: function () {
		let min = 100
		let max = 250
		this.el.children[0].setAttribute('visible', false)
		this.el.children[1].setAttribute('visible', true)

		setInterval(() => {
			let first = this.el.children[0].getAttribute('visible')
			if(first === true) {
				this.el.children[0].setAttribute('visible', false)
				this.el.children[1].setAttribute('visible', true)
			} else {
				this.el.children[1].setAttribute('visible', false)
				this.el.children[0].setAttribute('visible', true)
			}
		}, Math.floor((Math.random()*(max+1))+min));
  }
})
