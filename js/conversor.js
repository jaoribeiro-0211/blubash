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


/* $('').click(function () {


  
  converterDe = document.querySelector('#converterDe').value;
  para = document.querySelector('#para').value;
  valorConversao =  document.querySelector('#valor').value;
  resultado =  document.querySelector('#resultado');
  resultadoInput = document.querySelector('[name="inputResultado"]');


  
})
 */

$("#formConversor").submit(function(e) {
  e.preventDefault();
  endpoint = 'latest'
  access_key = '091dd9f43a81318721c6bff08c19f3e8'


  converterDe = document.querySelector('#converterDe').value;
  para = document.querySelector('#para').value;
  valorConversao =  document.querySelector('#valor').value;
  resultado =  document.querySelector('#resultado');
  resultadoInput = document.querySelector('[name="inputResultado"]');

  $.ajax({
    method: 'POST',
    url:'http://api.exchangeratesapi.io/v1/'+ endpoint + '?access_key=' + access_key,
    dataType: 'json', 
    success: function (json) {
      let BRL = json.rates.BRL.toFixed(2)
      let USD = json.rates.USD.toFixed(2)
      let CAD = json.rates.CAD.toFixed(2)

      if (converterDe == 'BRL' && para == 'USD') {
        let result = (USD / BRL) * valorConversao
        resultado.innerHTML = result.toFixed(2)
        resultadoInput.value = result.toFixed(2)
        let resultadoFinal = result.toFixed(2)
        $.ajax({
          type: 'POST',
          dataType: 'json', 
          url:"http://localhost/blubash/ajaxController.php",
          data:{moeda1: converterDe, moeda2: para, valor: valorConversao, resultado: resultadoFinal},
         
        }).done(function (data) {
          console.log(data)
          /* converterDe.val("")
          para.val("") 
          valorConversao.val("")
          resultado.val("")   
          resultadoInput.val("") */
          getConversor() 
        })
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

function getConversor(){
  $.ajax({
    type: 'GET',
    url:"http://localhost/blubash/AjaxGetConversor.php",
    dataType: 'json', 
  }).done(function (result) {
    $(".bodyTable tr").remove();
    for(var i = 0; i < result.length; i++){
      $(".bodyTable").prepend('<tr><td>'+ result[i].moeda1 +'</td><td>'+result[i].moeda2 +'</td><td>'+ result[i].valor +'</td><td>'+result[i].resultado +'</td></tr>')
    }    
  })
}

getConversor()
