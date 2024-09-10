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
// caixa de descriçao do produto 02
    const saibaMaisBtn2 = document.getElementById('saibaMaisBtn2');
    const productDescription2 = document.getElementById('productDescription2');
    const closeBtn2 = document.getElementById('closeBtn2');

    saibaMaisBtn2.addEventListener('click', function(){
        productDescription2.style.display = 'block';
    })
    closeBtn2.addEventListener('click', function(){
        productDescription2.style.display = 'none';
    });
// caixa de descriçao do produto 03
const saibaMaisBtn3 = document.getElementById('saibaMaisBtn3');
const productDescription3 = document.getElementById('productDescription3');
const closeBtn3 = document.getElementById('closeBtn3');

saibaMaisBtn3.addEventListener('click', function(){
    productDescription3.style.display = 'block';
})
closeBtn3.addEventListener('click', function(){
    productDescription3.style.display = 'none';
});
// caixa de descriçao do produto 04
const saibaMaisBtn4 = document.getElementById('saibaMaisBtn4');
const productDescription4 = document.getElementById('productDescription4');
const closeBtn4 = document.getElementById('closeBtn4');

saibaMaisBtn4.addEventListener('click', function(){
    productDescription4.style.display = 'block';
})
closeBtn4.addEventListener('click', function(){
    productDescription4.style.display = 'none';
});