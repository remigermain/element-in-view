const element = document.querySelector(".ballon");
const parent = document.getElementById("parent");
const subParent = document.getElementById("parent2");
const offsetEl = document.querySelector(".ballon-offset");

let partial = false
let nested = false
let offsetLeft = 0
let offsetRight = 0
let offsetTop = 0
let offsetBottom = 0

/* center the ballon */
parent.scrollTop = (parent.scrollTopMax / 2)
parent.scrollLeft = (parent.scrollLeftMax / 2)

subParent.scrollTop = (subParent.scrollTopMax / 2)
subParent.scrollLeft = (subParent.scrollLeftMax / 2)
moveDash()

function axisView(el, inView) {
    document.getElementById(el).innerText = (inView ? "yes" : "no")
}

function moveDash() {
    const rect = element.getBoundingClientRect()
    offsetEl.style.top = `calc(${rect.top}px - ${offsetTop}px)`
    offsetEl.style.left = `calc(${rect.left}px - ${offsetLeft}px)`
    offsetEl.style.height = `calc(${rect.height}px + ${offsetTop + offsetBottom}px)`
    offsetEl.style.width = `calc(${rect.width}px  + ${offsetLeft + offsetRight}px)`
}

function toogleClass() {
    /* generate options */
    const options = {
        parent: (nested ? subParent : null),
        partial: partial,
        offsetLeft: offsetLeft,
        offsetRight: offsetRight,
        offsetTop: offsetTop,
        offsetBottom: offsetBottom,
    }
    if (window.elementInView.all(element, options)) {
        element.classList.add("in-viewport");
    } else {
        element.classList.remove("in-viewport");
    }

    axisView('left-corner', window.elementInView.left(element, options))
    axisView('right-corner', window.elementInView.right(element, options))
    axisView('top-corner', window.elementInView.top(element, options))
    axisView('bottom-corner', window.elementInView.bottom(element, options))
    moveDash()
}

parent.addEventListener("load", toogleClass);
parent.addEventListener("scroll", toogleClass);
subParent.addEventListener("load", toogleClass);
subParent.addEventListener("scroll", toogleClass);

document.getElementById('partial').addEventListener('click', function () {
    partial = !partial
    document.getElementById('partial').innerText = (partial ? "on" : "off")
    toogleClass()
})

document.getElementById('nested').addEventListener('click', function () {
    nested = !nested
    document.getElementById('nested').innerText = (nested ? "on" : "off")
    document.getElementById("parent-name").innerHTML = (nested ? "parent": "window")
    if (nested) {
        document.getElementById("parent-name2").classList.add('hidden')
    } else {
        document.getElementById("parent-name2").classList.remove('hidden')
    }
    toogleClass()
})


document.getElementById('offsettop').addEventListener('change', function (event) {
    offsetTop = parseInt(event.target.value) || 0
    toogleClass()
})
document.getElementById('offsetleft').addEventListener('change', function (event) {
    offsetLeft = parseInt(event.target.value) || 0
    toogleClass()
})
document.getElementById('offsetright').addEventListener('change', function (event) {
    offsetRight = parseInt(event.target.value) || 0
    toogleClass()
})
document.getElementById('offsetbottom').addEventListener('change', function (event) {
    offsetBottom = parseInt(event.target.value) || 0
    toogleClass()
})