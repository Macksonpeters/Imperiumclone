let hotdealcart = document.querySelectorAll('.hotdealcart');
let hotdealpackages = document.querySelectorAll('.card');
let cardsRow = document.querySelector('#cardsrow');
let productshover = document.querySelector('#productshover');
let productlink = document.querySelector('#productlink');


productlink.addEventListener('mouseenter', () => {
    productshover.style.display = 'block';
} );

productlink.addEventListener('mouseleave', () => {
    productshover.style.display = 'none';
} );

productshover.addEventListener('mouseenter', () => {
    productshover.style.display = 'block';
} );

productshover.addEventListener('mouseleave', () => {
    productshover.style.display = 'none';
} );

localStorage.setItem('name', 'Peter');
localStorage.setItem('name', 'john');

localStorage.getItem('name');

for (let i = 0; i < hotdealcart.length; i++) {
    hotdealcart[i].addEventListener('click', (e) => {
        cartNumbers(hotdealpackages[i]);
        alert('Item Added To Cart')
    })
    
}

function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.nav-item sup').textContent = productNumbers;  
    }

}

function cartNumbers(hotdealpackage) {
    console.log('The product clicked is', hotdealpackage);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +  1);
        document.querySelector('.nav-item sup').textContent = productNumbers +  1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.nav-item sup').textContent = 1;
    }
    

}

onLoadCartNumber();


