const element = document.querySelector(".ballon");
const parent = document.getElementById("parent");
const offsetEl = document.querySelector(".offset");

let partial = false
let offsetLeft = 0
let offsetRight = 0
let offsetTop = 0
let offsetBottom = 0

/* center the ballon */
parent.scrollTop = (parent.scrollTopMax / 2)
parent.scrollLeft = (parent.scrollLeftMax / 2)

function axisView(el, inView) {
    document.getElementById(el).innerText = (inView ? "true" : "false")
}

function toogleClass() {
    /* generate options */
    const options = {
        parent: parent,
        offsetLeft: offsetLeft,
        offsetRight: offsetRight,
        offsetTop: offsetTop,
        offsetBottom: offsetBottom,
    }
    if ((partial && window.elementInView.partial(element, options)) ||
        (!partial && window.elementInView.all(element, options))) {
        element.classList.add("in-viewport");
    } else {
        element.classList.remove("in-viewport");
    }

    axisView('left-corner', window.elementInView.left(element, options))
    axisView('right-corner', window.elementInView.right(element, options))
    axisView('top-corner', window.elementInView.top(element, options))
    axisView('bottom-corner', window.elementInView.bottom(element, options))
}

parent.addEventListener("load", toogleClass);
parent.addEventListener("scroll", toogleClass);

document.getElementById('btn').addEventListener('click', function () {
    partial = !partial
    document.getElementById('mode').innerText = (partial ? "on" : "off")
    if (partial) {
        document.getElementById('f-partial').classList.remove('hidden')
    } else {
        document.getElementById('f-partial').classList.add('hidden')
    }
    toogleClass()
})


/* only for front here */

function update() {
    offsetEl.style.top = `calc(50% + (${(offsetTop * 2) * -1}px - ${offsetBottom}px))`
    offsetEl.style.left = `calc(50% + (${(offsetLeft * 2) * -1}px - ${offsetRight}px))`
    offsetEl.style.height = `calc(200px + ${offsetTop + offsetBottom}px)`
    offsetEl.style.width = `calc(200px + ${offsetLeft + offsetRight}px)`
    toogleClass()
}

document.getElementById('offsettop').addEventListener('change', function (event) {
    offsetTop = parseInt(event.target.value) || 0
    update()
})
document.getElementById('offsetleft').addEventListener('change', function (event) {
    offsetLeft = parseInt(event.target.value) || 0
    update()
})
document.getElementById('offsetright').addEventListener('change', function (event) {
    offsetRight = parseInt(event.target.value) || 0
    update()
})
document.getElementById('offsetbottom').addEventListener('change', function (event) {
    offsetBottom = parseInt(event.target.value) || 0
    update()
})