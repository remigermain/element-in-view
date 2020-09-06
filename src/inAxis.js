import {axisY, axisX, axisLeft, axisRight, axisTop, axisBottom} from "./axis"


export function inAxisRight(elRect, options) {
    if (options.partial) {
        return axisRight(elRect, options) && (axisTop(elRect, options) || axisBottom(elRect, options))
    }
    return axisRight(elRect, options) && axisY(elRect, options)
}

export function inAxisLeft(elRect, options) {
    if (options.partial) {
        return axisLeft(elRect, options) && (axisTop(elRect, options) || axisBottom(elRect, options))
    }
    return axisLeft(elRect, options) && axisY(elRect, options)
}

export function inAxisTop(elRect, options) {
    if (options.partial) {
        return axisTop(elRect, options) && (axisLeft(elRect, options) || axisRight(elRect, options))
    }
    return axisTop(elRect, options) && axisX(elRect, options)
}

export function inAxisBottom(elRect, options) {
    if (options.partial) {
        return axisBottom(elRect, options) && (axisLeft(elRect, options) || axisRight(elRect, options))
    }
    return axisBottom(elRect, options) && axisX(elRect, options)
}

export function inAllAxis(elRect, options) {
    if (options.partial) {
        return (axisBottom(elRect, options) || axisTop(elRect, options)) && (axisLeft(elRect, options) || axisRight(elRect, options))
    }
    return axisX(elRect, options) && axisY(elRect, options)
}