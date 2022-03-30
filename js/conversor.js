$(document).ready(function() {
  $('#example').DataTable({
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
  
});


$('#converter').click(function () {

  endpoint = 'latest'
  access_key = '091dd9f43a81318721c6bff08c19f3e8'

  
  converterDe = document.querySelector('#converterDe').value;
  para = document.querySelector('#para').value;
  valorConversao =  document.querySelector('#valor').value;
  resultado =  document.querySelector('#resultado');
  resultadoInput = document.querySelector('[name="inputResultado"]');


  $.ajax({
    type: 'POST',
    url:'http://api.exchangeratesapi.io/v1/'+ endpoint + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function (json) {
      let BRL = json.rates.BRL.toFixed(2)
      let USD = json.rates.USD.toFixed(2)
      let CAD = json.rates.CAD.toFixed(2)

      if (converterDe == 'BRL' && para == 'USD') {
        let result = (USD / BRL) * valorConversao
        resultado.innerHTML = result.toFixed(2)
        resultadoInput.value = result.toFixed(2)
        let resultadoFinal = result.toFixed(2)
        /* $.ajax({
          type: 'POST',
          url:"http://localhost/blubash/ajaxController.php",
          data:{resultadoFinal},
          success: function (data) {
            console.log(data)
          }
        }) */
      } else if (converterDe == 'BRL' && para == 'CAD') {
        let result = (CAD / BRL) * valorConversao
        console.log(result)

      } else if(converterDe == 'USD' && para == 'BRL') {
        let result = (BRL / USD) * valorConversao
        console.log(result)

      } else if(converterDe == 'USD' && para == 'CAD') {
        let result = (CAD / USD) * valorConversao
        console.log(result)

      } else if(converterDe == 'CAD' && para == 'BRL') {
        let result = (BRL / CAD) * valorConversao
        console.log(result)

      } else if(converterDe == 'CAD' && para == 'USD') {
        let result = (USD / CAD) * valorConversao
        console.log(result)

      } else {
        alert('Selecione uma moeda válida')
      }
    },
    error: function (e) {
      console.log(e)
    }
  })
})
