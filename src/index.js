

function encriptar(){
    let texto = document.getElementById("textoUsuario").value;
    //área de encriptado
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    //área para la lógica
    if(document.getElementById("textoUsuario").value.length != 0 ){
        
        document.getElementById("textoUsuario").value = "";
        document.getElementById("titulo-mensaje").textContent = "Mensaje Encriptado";
        
        //document.getElementById("cifrado").textContent = textoCifrado;
        document.getElementById("txtcifrado").value = textoCifrado;


        document.getElementById("imgNo").style.display = "none";
        document.getElementById("btnCopiar").style.display = "block";
        document.getElementById("txtcifrado").style.display = "initial";
    }else{
        alert("Escriba un mensaje para encriptarlo.");
        document.getElementById("imgNo").src = ".//img/imgMsjNoEncontrado.png";
        document.getElementById("imgNo").style.display = "flex";

        document.getElementById("titulo-mensaje").textContent = "";
        document.getElementById("titulo-mensaje").textContent = "";
        document.getElementById("btnCopiar").style.display = "none";
        document.getElementById("txtcifrado").style.display = "none";
    }
}

function desencriptar(){
    let texto = document.getElementById("textoUsuario").value;
    //área de desencriptado
    let textoDesifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    //área de la lógica
    if(document.getElementById("textoUsuario").value.length != 0 ){
        document.getElementById("textoUsuario").value = "";
        document.getElementById("txtcifrado").value = textoDesifrado;
        document.getElementById("titulo-mensaje").textContent = "Mensaje Desencriptado";
        
        document.getElementById("imgNo").style.display = "none";
        document.getElementById("btnCopiar").style.display = "block";
        
        document.getElementById("txtcifrado").style.display = "initial";
    }else{
        alert("Copie el mensaje para desencriptarlo.");
        document.getElementById("imgNo").src = ".//img/imgMsjNoEncontrado.png";
        document.getElementById("imgNo").style.display = "flex";

        document.getElementById("titulo-mensaje").textContent = "";
        document.getElementById("titulo-mensaje").textContent = "";
        document.getElementById("btnCopiar").style.display = "none";
        document.getElementById("txtcifrado").style.display = "none";

    }
}
//función para copiar los mensajes del panel derecho
function copiarMsj(){
    let texto = document.getElementById("txtcifrado").value;
    document.getElementById("textoUsuario").value = texto;
}
//función para ocultar elementos al abrirse la ventana
function ocultarBtn(){
    document.getElementById("btnCopiar").style.display = "none";
    
    document.getElementById("txtcifrado").style.display = "none";

}