function login(){
    var user, pass;
    user= document.getElementById("usuario").value;
    pass= document.getElementById("contraseña").value;
if(user == "ramiro" && pass == "12345678"){
    window.location= "Suspiros de Chocolate.html";
}


}