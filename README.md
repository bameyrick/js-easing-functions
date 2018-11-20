# JS Easing Functions
Easing functions based upon jQuery's easing functions, using Robert Penner's easing equations.

## Install
You can install via npm or yarn

### npm
```bash
npm install --save js-easing-functions
```

### yarn
```bash
yarn add js-easing-functions
```

## Usage
### Available easing functions
* easeInQuad
* easeOutQuad
* easeInOutQuad
* easeInCubic
* easeOutCubic
* easeInOutCubic
* easeInQuart
* easeOutQuart
* easeInOutQuart
* easeInQuint
* easeOutQuint
* easeInOutQuint
* easeInSine
* easeOutSine
* easeInOutSine
* easeInExpo
* easeOutExpo
* easeInOutExpo
* easeInCirc
* easeOutCirc
* easeInOutCirc
* easeInElastic
* easeOutElastic
* easeInOutElastic
* easeInBack
* easeOutBack
* easeInOutBack
* easeInBounce
* easeOutBounce
* easeInOutBounce

These functions can be visualised at http://easings.net

### Importing
You can import the easing functions you want using ES6 imports
```javascript
import { easeInOutBack } from 'js-easing-functions';
```

### Example use
_Note: this is a rough function to give you an idea of how to use an easing function. Your implementation will probably need more checks to ensure the final value at the end of the animation is the one you specified._
```javascript
import { easeInOutBack } from 'js-easing-functions';

const elemToAnimate = document.querySelector('.MyElem');
const duration = 2000;
const startPosition = 0;
const endPosition = 100;

let startTime;

function tick() {
  const elapsed = Date.now() - startTime;
  this.elemToAnimate.transform = `translateY(${easeInOutBack(elapsed, startPosition, endPosition, duration)}px)`;
  
  if (elapsed < duration)
    requestAnimationFrame(tick);
  }
}

function animate() {
  startTime = Date.now();
  tick();
}

animate();
```


## Notes
More info on easing can be found at Robert Penner's website: http://robertpenner.com/easing

If anyone can tell me what the _s_ parameter in the easeInBack, easeOutBack, and easeInOutBack functions represent please let me know and I'll rename the symbols.
