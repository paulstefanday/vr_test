const yo = require('yo-yo')

function addAnimation(el) {
  let child = yo`<a-animation attribute="scale" dur="200" fill="forwards" to="1.4 1.4 1.4" repeat="0"></a-animation>`
  el.appendChild(child)
}

function leaveAnimation(el) {
  el.innerHTML = ''
  let child = yo`<a-animation attribute="scale" dur="200" fill="forwards" to="1 1 1" repeat="0"></a-animation>`
  el.appendChild(child)
}

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function () {
      console.log('I was clicked!');
    });
    this.el.addEventListener('mouseenter', function (e) {
      console.log('Mouse enter!', e.target);
      addAnimation(e.target)
    });
    this.el.addEventListener('mouseleave', function (e) {
      console.log('Mouse leave!', e.target);
      leaveAnimation(e.target)
    });
    this.el.addEventListener('stateadded', function (evt) {
      console.log('state added: ', evt.detail.state);
    });
    this.el.addEventListener('stateremoved', function (evt) {
      if ( evt.detail.state === "cursor-hovered") {

      }
      console.log('state removed: ', evt.detail.state);
    });
  }
});
