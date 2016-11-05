let hi= 'poo'
console.log(hi)

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    console.log('cursor initialised')
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function () {
      var randomIndex = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomIndex]);
      console.log('I was clicked!');
    });
    this.el.addEventListener('mouseenter', function () {
      // console.log('Mouse enter!');
    });
    this.el.addEventListener('mouseleave', function () {
      // console.log('Mouse leave!');
    });
    this.el.addEventListener('stateadded', function (evt) {
      // if (  )
      // document.querySelector('#cursor').emit('fade');
    });
    this.el.addEventListener('stateremoved', function (evt) {
      if ( evt.detail.state === "cursor-hovered") {
          // rendering state
          document.querySelector('#cursor').emit('nice')
      }
      console.log('state removed: ', evt.detail.state);

    });
  }
});
