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