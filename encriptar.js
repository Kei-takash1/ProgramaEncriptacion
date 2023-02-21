/*  NOTAS

La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/


function encriptar(){

    let mensaje = document.getElementById("mensaje").value;
    let resultado = "";

    for(i=0;i<mensaje.length;i++){

        if(mensaje[i] == "a")
            resultado += "ai";

        else if(mensaje[i] == "e")
            resultado += "enter";

        else if(mensaje[i] == "i")
            resultado += "imes";

        else if(mensaje[i] == "o")
            resultado += "ober";

        else if(mensaje[i] == "u")
            resultado += "ufat";

        else if(mensaje[i] == " ")
            resultado += " ";
        else{
            resultado += mensaje[i];
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}


function copiar(){

    var codigoACopiar = document.getElementById('resultado');
    navigator.clipboard.writeText(codigoACopiar.innerHTML);

}

function desencriptar(){

    let mensaje = document.getElementById("mensaje").value;
    let resultado = "";

    for(i=0;i<mensaje.length;i++){

        if(mensaje[i] == "a"){
            resultado += "a";
            i+=1;
        }

        else if(mensaje[i] == "e"){
            resultado += "e";
            i+=4;
        }
            

        else if(mensaje[i] == "i"){
            resultado += "i";
            i+=3;
        }
            

        else if(mensaje[i] == "o"){
            resultado += "o";
            i+=3;
        }
            

        else if(mensaje[i] == "u"){
            resultado += "u";
            i+=3;
        }

        else if(mensaje[i] == " ")
            resultado += " ";

        else{
            resultado += mensaje[i];
        }
            
    }

    document.getElementById("resultado").innerHTML = resultado; 

}