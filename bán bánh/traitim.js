const heart = document.getElementById('traitim');
let x = document.getElementById('number');
let y
y = 0



heart.addEventListener('click', function () {
    heart.classList.add('active');
    setTimeout(function () {
        heart.classList.remove('active');
    }, 300); y++;
    x.innerText = y;
    if (x.innerText == '3') {
        window.location.href = 'index.html'
    }

})
