export function all(el, options) {
  return _axisAll(el.getBoundingClientRect(), { partial: false, ...__getOption(options)})
}

export function partial(el, options) {
  return _axisAll(el.getBoundingClientRect(), { partial: true, ...__getOption(options)})
}

export function left(el, options) {
  return _axisLeft(el.getBoundingClientRect(), __getOption(options))
}

export function right(el, options) {
  return _axisRight(el.getBoundingClientRect(), __getOption(options))
}

export function top(el, options) {
  return _axisTop(el.getBoundingClientRect(), __getOption(options))
}

export function bottom(el, options) {
  return _axisBottom(el.getBoundingClientRect(), __getOption(options))
}

/*
  utils
*/

function __getParent(options) {
  return (options.parent || document.documentElement).getBoundingClientRect()
}

function __getOption(options) {
  if (typeof options === "undefined" || options === null) {
    return {parent: __getParent(options)}
  } else {
    return {...options, parent: __getParent(options)}
  }
}


/* left corner */
function _axisLeft(elRect, options) {
  const pos = (elRect.left - (options.offsetX || options.offsetLeft || 0))
  return (options.parent.left <= pos && options.parent.right >= pos)
}

/* right corner */
function _axisRight(elRect, options) {
  const pos = (elRect.right + (options.offsetX || options.offsetRight || 0))
  return (options.parent.left <= pos && options.parent.right >= pos)
}

/* top corner */
function _axisTop(elRect, options) {
  const pos = (elRect.top - (options.offsetY || options.offsetTop || 0))
  return (options.parent.top <= pos && options.parent.bottom >= pos)
}

/* bottom corner */
function _axisBottom(elRect, options) {
  const pos = (elRect.bottom + (options.offsetY || options.offsetBottom || 0))
  return (options.parent.top <= pos && options.parent.bottom >= pos)
}



function _axisAll(el, options) {

  /* if partial need to
  ** top or bottom and right and left
  */
  if (options.partial) {
    return (_axisTop(el, options) || _axisBottom(el, options)) && (_axisRight(el, options) || _axisLeft(el, options))
  }
  /* else need to all point in view */
  return _axisRight(el, options) && _axisLeft(el, options) && _axisTop(el, options) && _axisBottom(el, options)
}