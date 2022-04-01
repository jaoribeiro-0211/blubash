$(document).ready(function() {
    /* Iniciando dataTable */
    $('#tabelaConversor').DataTable({
        "language": {
            "paginate": {
                "previous": "Anterior",
                "next": "Próxima"
            },
            "lengthMenu": "Exibir _MENU_ registros por página",
            "zeroRecords": "Nada encontrado - desculpe",
            "info": "_START_ de _END_ - _TOTAL_ resultados",
            "infoEmpty": "Nenhum registro disponível",
            "infoFiltered": "(filtrado de _MAX_ registros totais)",
            "search": "Procurar :",
        },
    });
    /* Jquery Mask */
    $('#valor').mask("#.##0,00", { reverse: true });
});



$("#formConversor").submit(function(e) {
    e.preventDefault();

    var endpoint = 'latest'
    var access_key = '091dd9f43a81318721c6bff08c19f3e8'

    var converterDe = document.querySelector('#converterDe').value;
    var para = document.querySelector('#para').value;
    var valorConversao = document.querySelector('#valor').value.replace(",", ".");
    var resultado = document.querySelector('#resultado');
    var resultadoInput = document.querySelector('[name="inputResultado"]');


    $.ajax({
        method: 'POST',
        url: 'http://api.exchangeratesapi.io/v1/' + endpoint + '?access_key=' + access_key,
        dataType: 'json',
        success: function(json) {
            let BRL = json.rates.BRL.toFixed(2)
            let USD = json.rates.USD.toFixed(2)
            let CAD = json.rates.CAD.toFixed(2)

            if (converterDe == 'BRL' && para == 'USD') {
                let result = (USD / BRL) * valorConversao
                resultado.innerHTML = result.toFixed(2)
                resultadoInput.value = result.toFixed(2)
                let resultadoFinal = result.toFixed(2)
                AjaxConversation(converterDe, para, valorConversao, resultadoFinal)
            } else if (converterDe == 'BRL' && para == 'CAD') {
                let result = (CAD / BRL) * valorConversao
                resultado.innerHTML = result.toFixed(2)
                resultadoInput.value = result.toFixed(2)
                let resultadoFinal = result.toFixed(2)
                AjaxConversation(converterDe, para, valorConversao, resultadoFinal)

            } else if (converterDe == 'USD' && para == 'BRL') {

                let result = (BRL / USD) * valorConversao
                resultado.innerHTML = result.toFixed(2)
                resultadoInput.value = result.toFixed(2)
                let resultadoFinal = result.toFixed(2)
                AjaxConversation(converterDe, para, valorConversao, resultadoFinal)

            } else if (converterDe == 'USD' && para == 'CAD') {
                let result = (CAD / USD) * valorConversao
                resultado.innerHTML = result.toFixed(2)
                resultadoInput.value = result.toFixed(2)
                let resultadoFinal = result.toFixed(2)
                AjaxConversation(converterDe, para, valorConversao, resultadoFinal)

            } else if (converterDe == 'CAD' && para == 'BRL') {
                let result = (BRL / CAD) * valorConversao
                resultado.innerHTML = result.toFixed(2)
                resultadoInput.value = result.toFixed(2)
                let resultadoFinal = result.toFixed(2)
                AjaxConversation(converterDe, para, valorConversao, resultadoFinal)

            } else if (converterDe == 'CAD' && para == 'USD') {
                let result = (USD / CAD) * valorConversao
                resultado.innerHTML = result.toFixed(2)
                resultadoInput.value = result.toFixed(2)
                let resultadoFinal = result.toFixed(2)
                AjaxConversation(converterDe, para, valorConversao, resultadoFinal)

            } else {
                alert('Selecione uma moeda válida')
            }
        },
        error: function(e) {
            console.log(e)
        }
    })
})

function AjaxGetConversation() {

    $.ajax({
        type: 'GET',
        url: "http://localhost/blubash/AjaxGetConversation.php",
        dataType: 'json',
    }).done(function(result) {
        $(".bodyTable tr").remove();
        for (var i = 0; i < result.length; i++) {
            $(".bodyTable").prepend('<tr><td>' + result[i].moeda1 + '</td><td>' + result[i].moeda2 + '</td><td>' + result[i].valor + '</td><td>' + result[i].resultado + '</td></tr>')
        }
    })
}

function AjaxConversation(converterDe, para, valorConversao, resultadoFinal) {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "http://localhost/blubash/AjaxInsertConversation.php",
        data: { moeda1: converterDe, moeda2: para, valor: valorConversao, resultado: resultadoFinal },

    }).done(function(data) {

        AjaxGetConversation()
    })
}

$("#inverter").click(function(e) {
    e.preventDefault();
    let converterDeInverter = document.querySelector('#converterDe').value;
    let paraInverter = document.querySelector('#para').value;

    if (converterDeInverter == "BRL" && paraInverter == "USD") {

        $("#para option[value='BRL']").prop('selected', true);
        $("#converterDe option[value='USD']").prop('selected', true);
    } else if (converterDeInverter == "BRL" && paraInverter == "CAD") {

        $("#para option[value='BRL']").prop('selected', true);
        $("#converterDe option[value='CAD']").prop('selected', true);

    } else if (converterDeInverter == "USD" && paraInverter == "BRL") {

        $("#para option[value='USD']").prop('selected', true);
        $("#converterDe option[value='BRL']").prop('selected', true);

    } else if (converterDeInverter == "USD" && paraInverter == "CAD") {

        $("#para option[value='USD']").prop('selected', true);
        $("#converterDe option[value='CAD']").prop('selected', true);

    } else if (converterDeInverter == "CAD" && paraInverter == "BRL") {

        $("#para option[value='CAD']").prop('selected', true);
        $("#converterDe option[value='BRL']").prop('selected', true);

    } else if (converterDeInverter == "CAD" && paraInverter == "USD") {

        $("#para option[value='CAD']").prop('selected', true);
        $("#converterDe option[value='USD']").prop('selected', true);

    } else {
        alert('Selecione uma moeda válida')
    }
})


AjaxGetConversation()