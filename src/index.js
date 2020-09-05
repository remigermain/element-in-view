export default function elementInView(el, options) {
  if (typeof options === "undefined" || options === null) {
    options = {}
  }

  return __inView(el, { partial: false, ...options})
}

function __inView(el, options) {
  const elRect = el.getBoundingClientRect();

  /* if parent is not define , get the document element */
  const parent = (options.parent || document.documentElement).getBoundingClientRect();

  /* construct with offset add or none */
  const target = {
    left: elRect.left - (options.offsetX || options.offsetLeft || 0),
    right: elRect.right + (options.offsetX || options.offsetRight || 0),
    top: elRect.top - (options.offsetY || options.offsetTop || 0),
    bottom: elRect.bottom + (options.offsetY || options.offsetBottom || 0)
  }

  /* for x axis */
  const AxisRight = (parent.left <= target.right && parent.right >= target.right)
  const AxisLeft = (parent.left <= target.left && parent.right >= target.left)

  /* for y axis */
  const AxisBottom  = (parent.top <= target.bottom && parent.bottom >= target.bottom)
  const AxisTop  = (parent.top <= target.top && parent.bottom >= target.top)

  /* if partial need to
  ** top or bottom and right and left
  */
  if (options.partial) {
    return (AxisTop || AxisBottom) && (AxisRight || AxisLeft)
  }
  /* else need to all point in view */
  return AxisRight && AxisLeft && AxisTop && AxisBottom
}