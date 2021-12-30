let attempt = 3;
function masuk() {
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
if (username == "uzii21280" && password == "sttnf123123"){
    alert("Login Success");
    window.location="Successlogin.html";

}else{
    attempt --;
    alert("Gagal Login");
if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;

}
}
}