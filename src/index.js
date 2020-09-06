import {inAxisRight, inAxisLeft, inAxisTop, inAxisBottom, inAllAxis} from "./inAxis"

/*
  el: element need to check if visible in viewport
  options: Object of all options available ( like offset, recursive, partial)
  callBack: function, only set when recursive = true
            is the function to find if axis ( y, x, left, top ...ect) is visible
*/
function checkInView(el, options, callback) {
  /* generate options */
  const opt = {
    partial: false,
    parent: null,
    offsetLeft: 0,
    offsetRight: 0,
    offsetTop: 0,
    offsetBottom: 0,
    ...options
  }
  
  /* assign parent */
  if (!opt.parent) {
      opt.recursive = true
      opt.parent = el.parentElement
  } else {
    opt.recursive = false
  }

  /* generate rect */
  opt.parent = opt.parent.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()

  /* check visible */
  const visible = callback(elRect, opt)
  if (!opt.recursive || !visible) {
    return visible
  }

  /* iter for all parents nodes */
  let current = el.parentElement;
  while(current != null) {
    // asing parent
    opt.parent = current.getBoundingClientRect()
    // stop when element not visible in parent
    if (!callback(elRect, opt)) {
      return false
    }
    // assign element by parent
    current = current.parentElement
  }
  
  // if current == null
  // current is over documentElement so element is visible
  return true
}


export function all(el, options) {
  return checkInView(el, options, inAllAxis)
}

export function left(el, options) {
  return checkInView(el, options, inAxisLeft)
}

export function right(el, options) {
  return checkInView(el, options, inAxisRight)
}

export function top(el, options) {
  return checkInView(el, options, inAxisTop)
}

export function bottom(el, options) {
  return checkInView(el, options, inAxisBottom)
}