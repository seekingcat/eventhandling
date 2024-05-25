const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const productName = product.value;
    const productNum = qty.value;
    const newLI = document.createElement('LI');
    newLI.innerText = `${productNum} ${productName}`;
    list.appendChild(newLI);
    product.value = "";
    qty.value = "";
    })