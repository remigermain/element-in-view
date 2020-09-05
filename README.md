![header](https://raw.githubusercontent.com/remigermain/readme-assets/master/element-in-view/header.jpg)
element-in-view is a js library to see if an element is visible on the user's screen, it is compatible for elements with a scroll bar (cs overflow).

## [Demo](https://jsfiddle.net/rgermain/owujbs5y/27/)

## Install

## [npm link](https://www.npmjs.com/package/element-in-view-rgermain)
```bash
yarn add element-in-view-rgermain
//or
npm install element-in-view-rgermain
```

You can find the library on `window.elementInView`.

```
windows.elementInView.all(element, options)
  // or
windows.elementInView.left(element, options)
windows.elementInView.top(element, options)
  ... ect
```

## Usage

```js
// es6 import
import elementInView from "element-in-view-rgermain";
// or es5
const elementInView = require("element-in-view");

const el = document.getElementById("my-element");

if (elementInView.all(el)) {
  console.log("element is visible :D");
} else {
  console.log("element is not visible :(");
}

if (elementInView.right(el)) {
  console.log("right corner of element is visible :D");
} else {
  console.log("element is not visible :(");
}

/*
    scrollIntoView accept 2 arguments
    first: the element , required !
    seconde: objects for options
*/
const parrentElement = document.getElementById("my-parrent");
elementInView.all(element, {
  parent: parrentElement,
  offsetRight: 50,
  offsetLeft: 10,
  offsetY: -20,
});
```

## API

### elementInView.function(element, [options])

### function
#### all

  all corner of element need to be visible

#### partial

  only one corner of element need to be visible

#### right

  only right corner of element need to be visible

#### left

  only left corner of element need to be visible

#### top

  only top corner of element need to be visible

#### bottom

  only bottom corner of element need to be visible


### options

Type: `Object`

#### parent

Type: `HtmlElement`<br> Default: `document.documentElement`

    the parent element

#### offsetX/offsetY

Type: `Number`<br> Default: `0`

    a offset for x/y axis

#### offsetRight / offsetLeft / offsetTop / offsetBottom

Type: `Number`<br> Default: `0`

    offset for every axis,
    if offsetX is set, we ignore offsetRight and offetLeft
    if offsetY is set, we ignore offsetTop and offsetBottom
