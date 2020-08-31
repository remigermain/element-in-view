![header](https://raw.githubusercontent.com/remigermain/readme-assets/master/element-in-view/header.jpg)
element-in-view is a js library to see if an element is visible on the user's screen, it is compatible for elements with a scroll bar (cs overflow).

## [Demo](https://jsfiddle.net/rgermain/owujbs5y/11/)

## Install

```bash
yarn add element-in-view-rgermain
or
npm install element-in-view-rgermain
```

You can find the library on `window.ElementInView`.

## Usage

```js
// es6 import
import elementInView from "element-in-view-rgermain";
// or es5
const elementInView = require("element-in-view");

const el = document.getElementById("my-element");

if (elementInView(el)) {
  console.log("element is visible :D");
} else {
  console.log("element is not visible :(");
}

/*
    scrollIntoView accept 2 arguments
    first: the element , required !
    seconde: objects for options
*/
const parrentElement = document.getElementById("my-parrent");
elementInView(element, {
  partial: true,
  parent: parrentElement,
  offsetRight: 50,
  offsetLeft: 10,
  offsetY: -20,
});
```

## API

### elementInView(element, [options])

### options

Type: `Object`

#### partial

Type: `boolean`<br> Default: `false`

    by default there must be all the object visible for return true,
    if you set it to true, as soon as a part of the object is visible, it will return true.

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
