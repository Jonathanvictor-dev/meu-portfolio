const containerMenuHeader = document.querySelector('.container-menu-header');
const btnMenuExpandir = document.querySelector('.menu-header-icon');
const btnMenuDiminuir = document.querySelector('.menu-icon-diminuir');
const menuDeNavegacao =document.querySelector('.menu-header-item');
const listaDeTextoMenu = document.querySelectorAll('.menu-header-item-link-texto');

if (btnMenuExpandir) {
    btnMenuExpandir.addEventListener('click', () => {
        containerMenuHeader.style.justifyContent = 'center';
        menuDeNavegacao.style.flexDirection = 'column';
        btnMenuExpandir.style.display = 'none';
        btnMenuDiminuir.style.display = 'block';
    
        listaDeTextoMenu.forEach((link) => {
            link.style.display = 'block';;
        });
        
    });
};

if (btnMenuDiminuir) {
    btnMenuDiminuir.addEventListener('click', () => {
        containerMenuHeader.style.justifyContent = 'space-between';
        menuDeNavegacao.style.flexDirection = 'row';
        btnMenuDiminuir.style.display = 'none';
        btnMenuExpandir.style.display = 'block';
    
        listaDeTextoMenu.forEach((link) => {
            link.style.display = 'none';
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const listaDeLinks = document.querySelectorAll('.educacao-menu-item');
    const listaDeSecoes = document.querySelectorAll('.educacao-info-card');

    listaDeLinks.forEach(link => {
        link.addEventListener('click', evento => {
            evento.preventDefault();

            listaDeLinks.forEach(links => {
                links.classList.remove('ativo')
            });

            link.classList.add('ativo');

            listaDeSecoes.forEach(secao => {
                secao.classList.add('hidden');
            });

            const secaoID = link.getAttribute('data-section');
            document.getElementById(secaoID).classList.remove('hidden');
        });

    });

    const listaDeLinksXP = document.querySelectorAll('.experiencia-menu-item');
    const listaDeSecoesXP = document.querySelectorAll('.experiencia-info-card');

    listaDeLinksXP.forEach(link => {
        link.addEventListener('click', evento => {
            evento.preventDefault();

            listaDeLinksXP.forEach(link => {
                link.classList.remove('ativo');
            });

            link.classList.add('ativo');

            listaDeSecoesXP.forEach(secoes => {
                secoes.classList.add('hidden');
            });

            const secaoID = link.getAttribute('data-section');
            document.getElementById(secaoID).classList.remove('hidden');
        });
    });
});

const secaoContato = document.querySelector('.container-contato');
const btnAbrirContato = document.querySelector('#menu-header-abrir-contato');
const btnFecharContato = document.querySelector('.contato-icone-fechar');

if(btnAbrirContato) {
    btnAbrirContato.addEventListener('click', evento => {
        evento.preventDefault()
        secaoContato.style.display = 'flex';
    });
};

if(btnFecharContato) {
    btnFecharContato.addEventListener('click', () => {
        secaoContato.style.display = 'none';
    });
};

