function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = cart.find(item => item.id === id);
    
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} foi adicionado ao carrinho.`);
}

// Função para exibir os itens do carrinho
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartItems.innerHTML += `
            <div>
                <strong>${item.name}</strong>: R$ ${item.price.toFixed(2)} x ${item.quantity} = R$ ${itemTotal.toFixed(2)}
            </div>
        `;
    });
    
    cartTotal.innerHTML = `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
}

// Função para esvaziar o carrinho
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    alert(`Carrinho esvaziado.`);
}

// Função para finalizar a compra
function buy() {
    localStorage.removeItem('cart');
    displayCart();
    alert(`Compra finalizada!`);
}

// Exibe o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', displayCart);

const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let index = 0;
const totalImages = images.length;
const interval = 3000; // Tempo em milissegundos (3 segundos)

function showNextImage() {
    index++;
    if (index >= totalImages) {
        index = 0;
    }
    const offset = -index * 100;
    slide.style.transform = `translateX(${offset}%)`;
}

// Muda a imagem a cada intervalo
setInterval(showNextImage, interval);

// Inicializa o carrossel com a primeira imagem
showNextImage();