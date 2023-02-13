const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizamos são:
// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function backGround(){
    let backGroundImage = "../src/img/galeria/boneco.png" ;
    let backGroundColor = "#FFFFFF";

    mensagem.style.backgroundImage = `url('${backGroundImage}')`;
    mensagem.style.backgroundRepeat = "no-repeat";
        if(mensagem.value !== ""){
            mensagem.style.background = backGroundColor;
        }

}

backGround();

function btnEncriptar(){

    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    backGround();
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
        }

    return stringEncriptada;
}

function btnDesencriptar() {

    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    backGround();
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
            if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            }
        }

    return stringDesencriptada;
}

function btnCopiar(){

    navigator.clipboard.writeText(mensagem.value);
}