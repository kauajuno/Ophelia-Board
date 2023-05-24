function tocaSomPom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const teclas = document.querySelectorAll('.tecla');
console.log(teclas);

teclas.forEach((e) => {
    const classList = e.classList;
    e.onclick = () => {
        tocaSomPom(`#som_${classList[1]}`);
    }
})