function data(e) {
    const hasil = document.getElementById('hasil');
    const nama = document.getElementById('nama')
    const email = document.getElementById('email')
    const jam = document.getElementById('jam')
    const tujuan = document.getElementById('tujuan')
    const tiket = document.getElementById('tiket')

    hasil.innerHTML = 
    `<br>
    <b>Data Pemesanan</b> <br>
    Nama: ${nama.value} <br>
    Email: ${email.value} <br>
    Jam Keberangkatan: ${jam.value} <br>
    Tujuan Keberangkatan: ${tujuan.value} <br>
    Jumlah Tiket: ${tiket.value}` 

    e.preventDefault();
}

const form = document.getElementById('validasi');
form.addEventListener('submit', data);