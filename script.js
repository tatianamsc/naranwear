let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} добавлен в корзину!`);
}

function renderCart() {
  const el = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  if (!el) return;
  el.innerHTML = '';
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    el.innerHTML += `<p><span>${item.name}</span><span>${item.price} ₽</span>
      <button onclick="removeItem(${i})">Удалить</button></p>`;
  });
  totalEl.textContent = `Итого: ${total} ₽`;
}

function removeItem(i) {
  cart.splice(i,1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function checkout() {
  if (!cart.length) { alert('Корзина пустая'); return; }
  alert('Заказ оформлен! Мы свяжемся с вами в Telegram для оплаты и доставки.');
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

document.addEventListener('DOMContentLoaded', renderCart);
