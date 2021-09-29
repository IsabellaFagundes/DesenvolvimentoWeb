$(function () {
    $("#adicionar_campo").click(function () { //ao clicar no botão "outras informações"
        $("#lb_campo").before("<div id='outras_info'><br>" + //antes do botão enviar, cria uma div com um textarea
            "<label id='lb_campo'>Campo</label>" +
            "<input type='text' id='campo'>" +
            "<span id='msg_campo'></span>"          
        );
    $("#remover_campo").click(function () { //quando clicar em remover campo
        $("#outras_info").remove(); //vai esconder o textarea
    });
    });
});
   