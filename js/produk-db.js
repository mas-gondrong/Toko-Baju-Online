import { db } from '../firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Ambil daftar produk
function ambilSemuaProduk() {
  const produkRef = ref(db, 'produk/');
  onValue(produkRef, (snapshot) => {
    const data = snapshot.val();
    const daftarProduk = Object.values(data || {});
    tampilkanProduk(daftarProduk);
  });
}

// Tampilkan ke halaman
function tampilkanProduk(produk) {
  const container = document.querySelector('.products-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  produk.forEach(item => {
    const kartu = `
      <a href="detail.html?id=${item.id}" class="product-card">
        <div class="product-image-wrapper">
          <img src="${item.foto}" alt="${item.nama}" class="product-image">
          ${item.diskon ? `<span class="product-discount">-${item.diskon}%</span>` : ''}
        </div>
        <div class="product-info">
          <h3 class="product-name">${item.nama}</h3>
          <p class="product-price">Rp ${item.harga.toLocaleString('id-ID')} 
            ${item.hargaAsli ? `<small>Rp ${item.hargaAsli.toLocaleString('id-ID')}</small>` : ''}
          </p>
          <p class="product-sold">${item.terjual} Terjual</p>
        </div>
      </a>
    `;
    container.innerHTML += kartu;
  });
}

export { ambilSemuaProduk };
