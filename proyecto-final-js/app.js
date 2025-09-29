

const PRODUCTS_URL = 'products.json';
let products = [];
let cart = JSON.parse(localStorage.getItem('cart_v1')) || {};


const qs = s => document.querySelector(s);
const qsa = s => Array.from(document.querySelectorAll(s));


// Inicialización
window.addEventListener('DOMContentLoaded', async () => {
await loadProducts();
renderProducts();
updateCartUI();
setupEvents();
preloadForm();
clearCart();
});


async function loadProducts(){
try{
const res = await fetch(PRODUCTS_URL);
products = await res.json();
}catch(err){
console.error('Error cargando productos', err);
Swal.fire('Error','No se pudieron cargar los productos. ' + err);
}
}


function renderProducts(){
const container = qs('#products');
container.innerHTML = '';
products.forEach(p => {
const col = document.createElement('div'); col.className='col-12 col-sm-6 col-md-4';
col.innerHTML = `
<div class="card h-100">
<img src="${p.img}" class="card-img-top" alt="${p.title}">
<div class="card-body d-flex flex-column">
<h5 class="card-title">${p.title}</h5>
<p class="card-text">${p.description}</p>
<div class="mt-auto d-flex justify-content-between align-items-center">
<strong>$${p.price}</strong>
<button class="btn btn-sm btn-primary btn-add" data-id="${p.id}">Agregar al carrito</button>
</div>
</div>
</div>`;
container.appendChild(col);
});
qsa('.btn-add').forEach(b=> b.addEventListener('click', e=> addToCart(+e.target.dataset.id)));
}


function addToCart(id){
const prod = products.find(p=>p.id===id);
if(!prod) return;
if(!cart[id]) cart[id] = {...prod, qty:0};
if(cart[id].qty + 1 > prod.stock){
Swal.fire('Stock','No hay más stock disponible','warning'); // Alert si no hay stock
return;
}
cart[id].qty += 1;
saveCart();
updateCartUI();
Swal.fire({toast:true, position:'top-end', showConfirmButton:false, timer:1200, title:'Agregado al carrito'});
}


function saveCart(){
localStorage.setItem('cart_v1', JSON.stringify(cart));
}


function updateCartUI(){
const count = Object.values(cart).reduce((s,i)=>s+i.qty,0);
qs('#cart-count').textContent = count;
}
const orders = JSON.parse(localStorage.getItem('orders_v1')) || [];

Swal.fire({
    title: 'Producto agregado',
    html: `<p><b>${prod.title}</b> fue agregado al carrito.</p>
           <p>Total en carrito: ${Object.values(cart).reduce((s,i)=>s+i.qty,0)} items</p>`,
    icon: 'success',
    showCancelButton: true,
    confirmButtonText: 'Ver carrito',
    cancelButtonText: 'Seguir comprando'
  }).then(res => {
    if(res.isConfirmed){
      toggleCartView();
    }
  });

  function cleanCart(){
    const btn = qs('#btn-clearCart');
    btn.addEventListener('click', () => {
    console.log('Limpiar carrito');
      localStorage.clear();

      Swal.fire({
        title: 'Carrito vaciado',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.reload();
      });
    });
  }