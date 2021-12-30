function duit(){
    let nilai
    let pilih
    let out
    nilai = parseInt(document.getElementById('nilai').value)
    pilih = document.getElementById('pilihan').value
    if (pilih == '1') {
        out = nilai * 9915
    } else if (pilih == '2') {
        out = nilai * 13472
    } else if (pilih == '3') {
        out = nilai * 874
    } else if (pilih == '4') {
        out = nilai * 120
    } else if (pilih == '5') {
        out = nilai * 15888
    } else if (pilih == '6') {
        out = nilai * 3592
    } else {
        out = "404 Not Found"
    }
        
    document.getElementById('out').value = 'Rp.' + out;
}