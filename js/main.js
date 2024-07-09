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


