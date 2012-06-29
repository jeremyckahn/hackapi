;(function () {
  var pinkEl = document.querySelectorAll('.pink')[0];
  var pinkXEl = pinkEl.querySelectorAll('.parent-square-x')[0];
  var pinkYEl = pinkEl.querySelectorAll('.parent-square-y')[0];
  var yellowEl = document.querySelectorAll('.yellow')[0];
  var yellowXEl = yellowEl.querySelectorAll('.parent-square-x')[0];
  var yellowYEl = yellowEl.querySelectorAll('.parent-square-y')[0];
  var tealEl = document.querySelectorAll('.teal')[0];
  var tealXEl = tealEl.querySelectorAll('.parent-square-x')[0];
  var tealYEl = tealEl.querySelectorAll('.parent-square-y')[0];

  var pink = new Kapi.DOMActor(pinkEl);
  var pinkX = new Kapi.DOMActor(pinkXEl);
  var pinkY = new Kapi.DOMActor(pinkYEl);
  var yellow = new Kapi.DOMActor(yellowEl);
  var yellowX = new Kapi.DOMActor(yellowXEl);
  var yellowY = new Kapi.DOMActor(yellowYEl);
  var teal = new Kapi.DOMActor(tealEl);
  var tealX = new Kapi.DOMActor(tealXEl);
  var tealY = new Kapi.DOMActor(tealYEl);

}(this));
