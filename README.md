![header](https://raw.githubusercontent.com/remigermain/readme-assets/master/element-in-view/header.jpg)
element-in-view is a js library that gives you information if an element is visible or not, it's compatible with elements with a css overflow, and a lot of options !).

## [Demo](https://jsfiddle.net/rgermain/owujbs5y/39/)

## Install [npm link](https://www.npmjs.com/package/element-in-view-rgermain)
```bash
yarn add element-in-view-rgermain
//or
npm install element-in-view-rgermain
```
## Cdn
```
 <script src="https://unpkg.com/element-in-view-rgermain@1.4.0/dist/index.js">
```
If you use with cdn, you can find the library on `window.elementInView`.

```js
windows.elementInView.all(element, options)
  // or
windows.elementInView.left(element, options)
windows.elementInView.top(element, options)
  //... ect
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
  console.log("right corner of element is not visible :(");
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
function: `elementInView.all()`

  all corner of element need to be visible


#### right
function: `elementInView.right()`

  only right corner of element need to be visible

#### left
function: `elementInView.left()`

  only left corner of element need to be visible

#### top
function: `elementInView.top()`

  only top corner of element need to be visible

#### bottom
function: `elementInView.bottom()`

  only bottom corner of element need to be visible


### options

Type: `Object`

### partial

Type: `Boolean` <br> Default: `false`

     the element must be partly visible 

#### parent

Type: `HtmlElement`<br> Default: `null`

    if you define a parent, the element must be in visible only
    in relation to this one, that means that if this parent
    element is not visible (with an overflow for example)
    but that the element is well in the dimensions of this one,
    it will return true to you 

#### offsetX/offsetY

Type: `Number`<br> Default: `0`

    a offset for x/y axis

#### offsetRight / offsetLeft / offsetTop / offsetBottom

Type: `Number`<br> Default: `0`

    offset for every axis,
    if offsetX is set, we ignore offsetRight and offetLeft
    if offsetY is set, we ignore offsetTop and offsetBottom
