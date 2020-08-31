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

function toogleClass() {
    /* generate options */
    const options = {
        partial: partial,
        parent: parent,
        offsetLeft: offsetLeft,
        offsetRight: offsetRight,
        offsetTop: offsetTop,
        offsetBottom: offsetBottom,
    }
    if (window.elementInView(element, options)) {
        element.classList.add("in-viewport");
    } else {
        element.classList.remove("in-viewport");
    }
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
    updateFront()
    offsetEl.style.top = `calc(50% + (${(offsetTop * 2) * -1}px - ${offsetBottom}px))`
    offsetEl.style.left = `calc(50% + (${(offsetLeft * 2) * -1}px - ${offsetRight}px))`
    offsetEl.style.height = `calc(200px + ${offsetTop + offsetBottom}px)`
    offsetEl.style.width = `calc(200px + ${offsetLeft + offsetRight}px)`
    toogleClass()
}

function toogleValue(element, value) {
    if (value) {
        element.classList.remove('hidden')
    } else {
        element.classList.add('hidden')
    }
}

function updateFront() {
    toogleValue(document.getElementById("offset-t"), offsetTop)
    toogleValue(document.getElementById("offset-l"), offsetLeft)
    toogleValue(document.getElementById("offset-r"), offsetRight)
    toogleValue(document.getElementById("offset-b"), offsetBottom)
    toogleValue(document.getElementById("offset-rl"), offsetRight != offsetLeft)
    toogleValue(document.getElementById("offset-tb"), offsetTop != offsetBottom)
    toogleValue(document.getElementById("offset-x"), offsetRight == offsetLeft && offsetRight != 0)
    toogleValue(document.getElementById("offset-y"), offsetBottom == offsetTop && offsetBottom != 0)
}

document.getElementById('offsettop').addEventListener('change', function (event) {
    offsetTop = parseInt(event.target.value) || 0
    document.getElementById("f-offset-top").innerText = offsetTop
    document.getElementById("f-offset-y").innerText = offsetTop
    update()
})
document.getElementById('offsetleft').addEventListener('change', function (event) {
    offsetLeft = parseInt(event.target.value) || 0
    document.getElementById("f-offset-left").innerText = offsetLeft
    document.getElementById("f-offset-x").innerText = offsetLeft
    
    update()
})
document.getElementById('offsetright').addEventListener('change', function (event) {
    offsetRight = parseInt(event.target.value) || 0
    document.getElementById("f-offset-right").innerText = offsetRight
    document.getElementById("f-offset-x").innerText = offsetRight
   
    update()
})
document.getElementById('offsetbottom').addEventListener('change', function (event) {
    offsetBottom = parseInt(event.target.value) || 0
    document.getElementById("f-offset-bottom").innerText = offsetBottom
    document.getElementById("f-offset-y").innerText = offsetBottom
    
    update()
})