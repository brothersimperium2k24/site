//barra de menu visto apenas por mobile 
    const menu = document.querySelector('.menu');
    const NavMenu = document.querySelector('.nav-menu');

    menu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
        NavMenu.classList.toggle('ativo');
    });
//caixa de descrição de cada produto
    const saibaMaisBtn = document.getElementById('saibaMaisBtn');
    const productDescription = document.getElementById('productDescription');
    const closeBtn = document.getElementById('closeBtn');

    saibaMaisBtn.addEventListener('click', function(){
        productDescription.style.display = 'block';
    })
    closeBtn.addEventListener('click', function(){
        productDescription.style.display = 'none';
    });