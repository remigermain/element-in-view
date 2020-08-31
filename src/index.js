export default function elementInView(el, options) {
  if (typeof options === "undefined" || options === null) {
    options = {}
  }

  return __inView(el, { partial: false, ...options})
}

function __inView(el, options) {
  const elRect = el.getBoundingClientRect();

  /* if parent is not define , get the document element */
  const parentRect = (options.parent || document.documentElement).getBoundingClientRect();

  /* construct with offset add or none */
  const p = {
    left: parentRect.left + (options.offsetX || options.offsetLeft || 0),
    right: parentRect.right - (options.offsetX || options.offsetRight || 0),
    top: parentRect.top + (options.offsetY || options.offsetTop || 0),
    bottom: parentRect.bottom - (options.offsetY || options.offsetBottom || 0)
  }

  /* for x axis */
  const AxisRight = (p.left <= elRect.right && p.right > elRect.right)
  const AxisLeft = (p.left <= elRect.left && p.right >= elRect.left)

  /* for y axis */
  const AxisBottom  = (p.top <= elRect.bottom && p.bottom > elRect.bottom)
  const AxisTop  = (p.top <= elRect.top && p.bottom > elRect.top)

  /* if partial need to
  ** top or bottom and right and left
  */
  if (options.partial) {
    return (AxisTop || AxisBottom) && (AxisRight || AxisLeft)
  }
  /* else need to all point in view */
  return AxisRight && AxisLeft && AxisTop && AxisBottom
}