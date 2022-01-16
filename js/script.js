var numImg = 1;
mostrarImgs(numImg);

// Control de botones
function ctrSigPrev(n) {
    mostrarImgs(numImg += n);
}

// Control de imagenes
function ctrImg(n) {
    mostrarImgs(numImg = n);
}

function mostrarImgs(n) {
    var i;
    var imgs = document.getElementsByClassName("imgs");
    var hilo = document.getElementsByClassName("opa");
    var txtImg = document.getElementById("txtImg");
    if (n > imgs.length) { numImg = 1 }
    if (n < 1) { numImg = imgs.length }
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    for (i = 0; i < hilo.length; i++) {
        hilo[i].className = hilo[i].className.replace(" active", "");
    }
    imgs[numImg - 1].style.display = "block";
    hilo[numImg - 1].className += " active";
    txtImg.innerHTML = hilo[numImg - 1].alt;
}