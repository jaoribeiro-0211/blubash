

// execute the conversion using the "convert" endpoint:
$("#converter").click(function() {
// set endpoint and your access key
endpoint = 'convert'
access_key = '091dd9f43a81318721c6bff08c19f3e8';

// define from currency, to currency, and amount
from = 'EUR';
to = 'GBP';
amount = '10';

// execute the conversion using the "convert" endpoint:
$.ajax({
    type: "POST",
    url: 'http://api.exchangeratesapi.io/v1/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,
    dataType: 'jsonp',
    success: function(json) {

        // access the conversion result in json.result
        alert(json.result);

    },
    error: function(e) {
        console.log
    }
});
})
