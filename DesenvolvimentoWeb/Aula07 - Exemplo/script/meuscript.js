$(function () {
    $("#detail_p1").hide();//esconde os detalhes 
    $("#prod1").click(function () { //ao clicar no produto
        $("#detail_p1").toggle(2000); //aparece ou esconde os detalhes
    });
  });

$(function () {
    $("#detail_p2").hide();
    $("#prod2").click(function () {
        $("#detail_p2").toggle(2000);
    });
 });

$(function () {
    $("#detail_p3").hide();
    $("#prod3").click(function () {
        $("#detail_p3").toggle(2000);
    });
});

$(function () {
    $("#bt").click(function () {//ao clicar no botão enviar
        $("#msg_nome").text("Nome inválido");  //mostra esse texto
        $("#nome").val("Digite o nome completo"); //atribui esse valor

        $("#msg_email").text("Email inválido");
        $("#email").val(" faltou o @");
    
        $("#msg_cpf").html("<span style='color:red'> CPF inválido</span>");
        $("#cpf").val("formato: 000.000.000-00");
    });
});
   

$(function () {
    $("#adicionar_campo").click(function () { //ao clicar no botão "outras informações"
        $("#bt").before("<div id='outras_info'><br>" + //antes do botão enviar, cria uma div com um textarea
            "<label>Informações adicionar</label><br>" +
            "<textarea id='outras'rows='4' cols='50'></textarea>" +
            "<a id='remover_campo' href='#'> Excluir</a></div>"
        );
    $("#adicionar_campo").hide(); //vai esconder o botão 
    $("#remover_campo").click(function () { //quando clicar em remover campo
        $("#outras_info").remove(); //vai esconder o textarea
        $("#adicionar_campo").show(); //e mostrar o botão "outras informações"
    });
    });
});
   