function multiplicar() {
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = s1 * s2;
    alert("Resultado:" + s3);
}

function VerificarHorario() {

    var saudacao;
    var tempo = document.getElementById("horario").value; //variável que pega o input 

    if (tempo < 12) { //analisa o input e altera a saudação e a imagem (lampada acesa ou apagada)
        saudacao = tempo + "hs Bom dia";
        document.getElementById('img_lampada').src = 'img/apagada.gif';
        document.getElementById('body').style.background = "yellow";
    } else if (tempo < 18) {
        saudacao = tempo + "hs Boa tarde";
        document.getElementById('img_lampada').src = 'img/apagada.gif';
        document.getElementById('body').style.background = "Orange";
    } else {
        saudacao = tempo + "hs Boa noite";
        document.getElementById('img_lampada').src = 'img/acesa.gif';
        document.getElementById('body').style.background = "Darkblue";
    }
    document.getElementById('saudacao').innerHTML = saudacao;
}

function VerificarDiaSemana(){
    switch (new Date().getDay()){
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
        default: day = "não encontrado";
    }
    document.getElementById("demo").innerHTML = day;
}
