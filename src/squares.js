;(function () {
  var pinkEl = document.querySelectorAll('.pink')[0];
  var pinkXEl = pinkEl.querySelectorAll('.parent-square-x')[0];
  var pinkYEl = pinkEl.querySelectorAll('.parent-square-y')[0];
  var pinkRotateEl = pinkEl.querySelectorAll('.parent-square-rotate')[0];
  var pinkRotateYEl = pinkEl.querySelectorAll('.parent-square-rotate-y')[0];
  var pinkRotateXEl = pinkEl.querySelectorAll('.parent-square-rotate-x')[0];
  var yellowEl = document.querySelectorAll('.yellow')[0];
  var yellowXEl = yellowEl.querySelectorAll('.parent-square-x')[0];
  var yellowYEl = yellowEl.querySelectorAll('.parent-square-y')[0];
  var yellowRotateEl = yellowEl.querySelectorAll('.parent-square-rotate')[0];
  var yellowRotateXEl =
      yellowEl.querySelectorAll('.parent-square-rotate-x')[0];
  var yellowRotateYEl =
      yellowEl.querySelectorAll('.parent-square-rotate-y')[0];
  var tealEl = document.querySelectorAll('.teal')[0];
  var tealXEl = tealEl.querySelectorAll('.parent-square-x')[0];
  var tealYEl = tealEl.querySelectorAll('.parent-square-y')[0];
  var tealRotateEl = tealEl.querySelectorAll('.parent-square-rotate')[0];
  var tealRotateXEl = tealEl.querySelectorAll('.parent-square-rotate-x')[0];
  var tealRotateYEl = tealEl.querySelectorAll('.parent-square-rotate-y')[0];

  var pink = new Kapi.DOMActor(pinkEl);
  var pinkX = new Kapi.DOMActor(pinkXEl);
  var pinkY = new Kapi.DOMActor(pinkYEl);
  var pinkRotate = new Kapi.DOMActor(pinkRotateEl);
  var pinkRotateX = new Kapi.DOMActor(pinkRotateXEl);
  var pinkRotateY = new Kapi.DOMActor(pinkRotateYEl);
  var yellow = new Kapi.DOMActor(yellowEl);
  var yellowX = new Kapi.DOMActor(yellowXEl);
  var yellowY = new Kapi.DOMActor(yellowYEl);
  var yellowRotate = new Kapi.DOMActor(yellowRotateEl);
  var yellowRotateX = new Kapi.DOMActor(yellowRotateXEl);
  var yellowRotateY = new Kapi.DOMActor(yellowRotateYEl);
  var teal = new Kapi.DOMActor(tealEl);
  var tealX = new Kapi.DOMActor(tealXEl);
  var tealY = new Kapi.DOMActor(tealYEl);
  var tealRotate = new Kapi.DOMActor(tealRotateEl);
  var tealRotateX = new Kapi.DOMActor(tealRotateXEl);
  var tealRotateY = new Kapi.DOMActor(tealRotateYEl);

  var kapi = new Kapi();
  kapi.addActor(pink);
  kapi.addActor(pinkX);
  kapi.addActor(pinkY);
  kapi.addActor(pinkRotate);
  kapi.addActor(pinkRotateX);
  kapi.addActor(pinkRotateY);
  kapi.addActor(yellow);
  kapi.addActor(yellowX);
  kapi.addActor(yellowY);
  kapi.addActor(yellowRotate);
  kapi.addActor(yellowRotateX);
  kapi.addActor(yellowRotateY);
  kapi.addActor(teal);
  kapi.addActor(tealX);
  kapi.addActor(tealY);
  kapi.addActor(tealRotate);
  kapi.addActor(tealRotateX);
  kapi.addActor(tealRotateY);

  var stop1 = 2000;
  var stop2 = 2500;
  pinkX
    .keyframe(0, {
      transform: 'translateX(0px)'
    })
    .keyframe(stop1, {
      transform: 'translateX(400px)'
    }, {
      transform: 'swingTo'
    })
    .wait(stop2);

  pinkY
    .keyframe(0, {
      transform: 'translateY(0px)'
    })
    .keyframe(stop1, {
      transform: 'translateY(400px)'
    }, {
      transform: 'swingFrom'
    })
    .wait(stop2);

  pinkRotate
    .keyframe(0, {
      transform: 'rotate(0deg)'
    })
    .keyframe(stop1, {
      transform: 'rotate(360deg)'
    }, {
      transform: 'easeFromTo'
    })
    .wait(stop2);

  yellowY
    .keyframe(0, {
      transform: 'translateY(0px)'
    })
    .keyframe(stop1, {
      transform: 'translateY(400px)'
    }, {
      transform: 'easeFromTo'
    })
    .wait(stop2);

  yellowRotateX
    .keyframe(0, {
      transform: 'rotateX(0deg)'
    })
    .keyframe(stop1, {
      transform: 'rotateX(360deg)'
    }, {
      transform: 'easeFromTo'
    })
    .wait(stop2);

  tealX
    .keyframe(0, {
      transform: 'translateX(0px)'
    })
    .keyframe(stop1, {
      transform: 'translateX(200px)'
    }, {
      transform: 'easeInOutBack'
    })
    .wait(stop2);

  tealY
    .keyframe(0, {
      transform: 'translateY(0px)'
    })
    .keyframe(stop1, {
      transform: 'translateY(200px)'
    }, {
      transform: 'easeInOutBack'
    })
    .wait(stop2);

  tealRotate
    .keyframe(0, {
      transform: 'rotate(0deg)'
    })
    .keyframe(stop1, {
      transform: 'rotate(1080deg)'
    }, {
      transform: 'easeFromTo'
    })
    .wait(stop2);

  tealRotateY
    .keyframe(0, {
      transform: 'rotateY(0deg)'
    })
    .keyframe(stop1, {
      transform: 'rotateY(1080deg)'
    }, {
      transform: 'easeFromTo'
    })
    .wait(stop2);

  kapi.play();

}(this));
