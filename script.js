'use strict';

console.log(this === window);

function checkThis() {
  console.log(this);
}

checkThis();

function Chair(style, color) {
  this.style = style;
  this.color = color;
  console.log(this);
}

var sofa = new Chair('sofa', 'green');

var couch = {
  color: 'green',
  f: function() {
    console.log(this);
    return this;
  }
};

console.log(couch.f());
