const productInput = document.getElementById('productInput')
const priceInput = document.getElementById('priceInput')
const addButton = document.getElementById('addButton')
const cartList = document.getElementById('cartList')

let newArray = [];

addButton.addEventListener('click', () => {

    cartList.textContent = ""

    let productInfo = productInput.value;
    let priceInfo = priceInput.value;
    let newObject = { product : productInfo, price: priceInfo, quantity: 1};

    let found = false;

    for (let products of newArray) {
        if (newObject.product === products.product) {
            products.quantity++;
            found = true;
            break;
            }
            }
          if (found === false) {
            newArray.push(newObject);
            }
    for (products of newArray) {
    let productsPrint = document.createElement('li');
    productsPrint.textContent = `${products.product} - ${products.price}kr (x${products.quantity})`;
    cartList.appendChild(productsPrint);
    console.log(newArray);
    }
}
    )
