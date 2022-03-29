// execute the conversion using the "convert" endpoint:
$('#converter').click(function () {
  // set endpoint and your access key
  endpoint = 'latest'
  access_key = '091dd9f43a81318721c6bff08c19f3e8'

  // define from currency, to currency, and amount
  from = 'EUR'
  to = 'GBP'
  amount = '10'

  // execute the conversion using the "convert" endpoint:
  $.ajax({
    type: 'POST',
    url:'http://api.exchangeratesapi.io/v1/'+ endpoint + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function (json) {
      let BRL = json.rates.BRL.toFixed(2)
    let USD = json.rates.USD.toFixed(2)
    let CAD = json.rates.CAD.toFixed(2)

    let result = (USD / BRL) * 30
  

    console.log(result)
    },
    error: function (e) {
      console.log(e)
    }
  })
})
