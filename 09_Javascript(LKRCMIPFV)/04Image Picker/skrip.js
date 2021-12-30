function ubahGambar(elem) {
    let image = document.getElementById("gambar");
    image.src = elem.value;

    let x = document.getElementById("pict").value;
    document.getElementById("x").innerHTML= alert("ini gambar " +x);
    }     
