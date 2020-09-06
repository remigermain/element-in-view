
/* axis y */
export function axisY(elRect, options) {
    return axisTop(elRect, options) && axisBottom(elRect, options)
}
/* axis x */
export function axisX(elRect, options) {
    return axisRight(elRect, options) && axisLeft(elRect, options)
}

/* left corner */
export function axisLeft(elRect, options) {
    const pos = (elRect.left - (options.offsetX || options.offsetLeft || 0))
    // left corner + y axis
    return (options.parent.left <= pos && options.parent.right >= pos)
}

/* right corner */
export function axisRight(elRect, options) {
    const pos = (elRect.right + (options.offsetX || options.offsetRight || 0))
    return (options.parent.left <= pos && options.parent.right >= pos)
}

/* top corner */
export function axisTop(elRect, options) {
    const pos = (elRect.top - (options.offsetY || options.offsetTop || 0))
    return (options.parent.top <= pos && options.parent.bottom >= pos)
}

/* bottom corner */
export function axisBottom(elRect, options) {
    const pos = (elRect.bottom + (options.offsetY || options.offsetBottom || 0))
    return (options.parent.top <= pos && options.parent.bottom >= pos)
}