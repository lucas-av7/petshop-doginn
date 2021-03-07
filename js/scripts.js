const botaoOpen = document.getElementById('menuOpen');
const botaoClose = document.getElementById('menuClose');
const menu = document.querySelector('.menuPrincipal')

botaoOpen.addEventListener('click', abrirMenu);
botaoClose.addEventListener('click', fecharMenu);

function abrirMenu() {
    menu.style.top = '60px';
    botaoOpen.style.display = 'none';
    botaoClose.style.display = 'inline-block';
}

function fecharMenu() {
    menu.style.top = '0px';
    botaoOpen.style.display = 'inline-block';
    botaoClose.style.display = 'none';
}

// Galeria Mobile 

let imgFull = document.querySelector('.imgFull');
let setaDir = document.getElementById('dirMenu');
let setaEsq = document.getElementById('esqMenu');

let qtdFotos2 = 50;
let fotoAtual  = 1;

setaDir.addEventListener('click', mudarFoto);
setaEsq.addEventListener('click', mudarFoto);

function mudarFoto(e) {

    let direcao = e.target.getAttribute('id');
    
    if(fotoAtual === qtdFotos2 && direcao === 'dirMenu'
     || fotoAtual === 1 && direcao === 'esqMenu') {
        return;
    } else {
        switch(direcao) {
            case 'dirMenu':
                imgFull.setAttribute('src', `img/galeria/foto${fotoAtual+1}.jpg`)
                imgFull.setAttribute('alt', `Foto ${fotoAtual+1}.jpg`)
                fotoAtual++;
                if(fotoAtual === qtdFotos2) {
                    setaDir.style.color = '#666';
                } else if (fotoAtual === 2){
                    setaEsq.style.color = '#EE6C4D';
                }
                break;

            case 'esqMenu':
                imgFull.setAttribute('src', `img/galeria/foto${fotoAtual-1}.jpg`)
                imgFull.setAttribute('alt', `Foto ${fotoAtual-1}.jpg`)
                fotoAtual--;
                if(fotoAtual === 1) {
                    setaEsq.style.color = '#666';
                } else if (fotoAtual === qtdFotos2 -1) {
                    setaDir.style.color = '#EE6C4D';
                }
                break;

            default:
                return;
        }
    }
    
}

function listarFotos() {
    const galeria = document.querySelector('.galeriaPadrao')
    console.log(galeria)
    for(let i = 1; i <= qtdFotos2; i++) {
        let img = document.createElement('img')
        img.setAttribute('src', 'img/galeria/foto' + i + '.jpg')
        img.setAttribute('alt', 'Foto ' + i)
        galeria.appendChild(img)
    }
}

listarFotos()