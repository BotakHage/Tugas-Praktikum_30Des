let isi = document.getElementById("isiChat")
let masuk = document.getElementById("inputChat")
let tampil = "User: "

function kirim(){
    tampil = tampil + masuk.value + "<br>"
    isi.innerHTML = tampil
    masuk.value = "User: "
}