// Ambil semua tombol 'Tambah ke Keranjang'
const buttons = document.querySelectorAll('.tambah-keranjang');

// Event listener untuk tiap tombol
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const produkItem = button.closest('.produk-item');
    const nama = produkItem.querySelector('h3').innerText;
    const harga = produkItem.querySelector('.harga').innerText;
    const gambar = produkItem.querySelector('img').src;

    // Ambil data keranjang dari localStorage
    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

    // Tambahkan produk ke keranjang
    keranjang.push({ nama, harga, gambar });

    // Simpan kembali ke localStorage
    localStorage.setItem('keranjang', JSON.stringify(keranjang));

    // Tampilkan notifikasi
    alert(`${nama} telah ditambahkan ke keranjang!`);
  });
});
