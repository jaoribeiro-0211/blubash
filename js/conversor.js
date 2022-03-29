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

// execute the conversion using the "convert" endpoint:
$('#converter').click(function () {

  // set endpoint and your access key
  endpoint = 'latest'
  access_key = '091dd9f43a81318721c6bff08c19f3e8'

  // define from currency, to currency, and amount
  from = document.querySelector('#converterDe').value;
  to = document.querySelector('#para').value;
  amount =  document.querySelector('#valor').value;
  resultado =  document.querySelector('#resultado');

  // execute the conversion using the "convert" endpoint:
  
  $.ajax({
    type: 'POST',
    url:'http://api.exchangeratesapi.io/v1/'+ endpoint + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function (json) {
      let BRL = json.rates.BRL.toFixed(2)
      let USD = json.rates.USD.toFixed(2)
      let CAD = json.rates.CAD.toFixed(2)

      if (from == 'BRL' && to == 'USD') {
        let result = (USD / BRL) * amount
        resultado.innerHTML = result.toFixed(2)
        let resultadoFinal = result.toFixed(2)
        $.ajax({
          type: 'POST',
          url:"http://localhost/blubash/ajaxController.php",
          data:resultadoFinal,
          success: function (data) {
            console.log(data)
          }
        })
      } else if (from == 'BRL' && to == 'CAD') {
        let result = (CAD / BRL) * amount
        console.log(result)
      } else if(from == 'USD' && to == 'BRL') {
        let result = (BRL / USD) * amount
        console.log(result)
      } else if(from == 'USD' && to == 'CAD') {
        let result = (CAD / USD) * amount
        console.log(result)
      } else if(from == 'CAD' && to == 'BRL') {
        let result = (BRL / CAD) * amount
        console.log(result)
      } else if(from == 'CAD' && to == 'USD') {
        let result = (USD / CAD) * amount
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
