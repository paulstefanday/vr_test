// require('aframe-animation-component');
//
// var el = document.querySelector('#mario');
//
// // TweenMax.to(this.state.sphere.position, 1, {
// //   bezier:[{x:1, y:1}, {x:0, y:2}, {x:-1, y:1}, {x:0, y:0}, {x:1, y:1}],
// //   ease:Linear.easeNone,
// //   repeat: -1,
// //   onUpdate: () => {
// //     this.setState({sphere: {
// //       position: this.state.sphere.position
// //     }});
// //   }
// // });


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
      console.log('Mouse enter!');
    });
    this.el.addEventListener('mouseleave', function () {
      console.log('Mouse leave!');
    });
    this.el.addEventListener('stateadded', function (evt) {
      // if (  )
      // document.querySelector('#cursor').emit('fade');
    });
    this.el.addEventListener('stateremoved', function (evt) {
      if ( evt.detail.state === "cursor-hovered") {
          // rendering state
          // document.querySelector('#cursor').emit('nice')
      }
      console.log('state removed: ', evt.detail.state);

    });
  }
});
