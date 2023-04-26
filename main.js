function send() {
    location.reload();
}

let menubars = document.getElementById('menu-bars')
let bars = document.getElementById('bars')
bars.addEventListener('click', function () {
    menubars.style.display = 'block'
})

let close = document.getElementById('close')
close.addEventListener('click', function () {
    menubars.style.display = 'none'
})

let menu5 = document.getElementById('menu5')
let menu = document.getElementById('dad')
let menuson = document.getElementById('menu-son')
menu.addEventListener('mouseover', function () {
    menuson.style.visibility = 'visible'
})
menu.addEventListener('mouseout', function () {
    menuson.style.visibility = 'hidden'
})

menuson.addEventListener('mouseout', function () {
    menuson.style.visibility = 'hidden'
})

function gioithieu() {
    window.location.href = 'gioithieu.html'
}

function increase() {
    let y = document.getElementById('amount').innerHTML
    y++
    document.getElementById('amount').innerHTML = y
}

function decrease() {
    let y = document.getElementById('amount').innerHTML
    if (y >= 1) {
        y--
        document.getElementById('amount').innerHTML = y
    }else {
        return
    }
}

function hienmenu() {
    let overlay = document.getElementById('overlay')
    overlay.style.display = 'block'
}
let overlay = document.getElementById('overlay')
let faxmark = document.getElementById('fa-xmark')
faxmark.addEventListener('click',function() {
    overlay.style.display = 'none'
})