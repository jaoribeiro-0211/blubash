
<?php 
include("protect.php")
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Conversor</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <!-- DataTable CSS -->
    <link rel="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css" href="style.css">
    <link rel="https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap5.min.css" href="style.css">
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/conversor.css" />
</head>

<body>

    <div class="d-flex justify-content-center align-items-center vh-100">      
        <div class="conversor">
            <form id="formConversor" action="" method="POST">
                <div class="gridConversor mb-4">     
                    <h2 class="text-center titleGrid">Conversor</h2>
                    <div class="logout">
                        <a href="logout.php">
                        <img src="./img/log-out.svg" width="22px" alt="Logout">
                        </a>
                    </div>
                    
                </div>
                <div class="d-flex justify-content-center align-items-center flex-column gap-4">
                    <div class="d-flex justify-content-center align-items-center gap-4">
                        <div>
                            <label for="converterDe" class="form-label">Converter de</label>
                            <select class="form-select" name="converterDe" aria-label="Default select example" id="converterDe">
                          <option selected>Selecione uma opção</option>
                          <option value="BRL">BRL</option>
                          <option value="USD">USD</option>
                          <option value="CAD">CAD</option>
                          </select>
                        </div>
                        <div>
                            <label for="exampleFormControlInput1" class="form-label">Valor</label>
                            <input type="text" class="form-control" id="valor" placeholder="300,00">
                        </div>

                        <div>
                            <label for="para" class="form-label">Para</label>
                            <select class="form-select" name="para" aria-label="Default select example" id="para">
                          <option selected>Selecione uma opção</option>
                          <option value="BRL">BRL</option>
                          <option value="USD">USD</option>
                          <option value="CAD">CAD</option>
                          </select>
                        </div>
                        <button type="submit" class="btn btn-success" id="converter">Converter</button>
                    </div>
                    <div>
                        <p class="fs-5">
                            <input type="text" style="display:none" name="inputResultado"  value="">
                            <span class="fw-bolder ">Resultado da conversão:</span> <span id="resultado">00,00</span>
                        </p>
                    </div>
                </div>
            </form>
            <table id="example" class="table" style="width:100%">
            <thead>
                <tr>
                <th scope="col">Converter de</th>
                <th scope="col">Valor</th>
                <th scope="col">Para</th>
                <th scope="col">Resultado</th>
                </tr>
            </thead>
            <tbody class="bodyTable">
             
            </tbody>
            </table>
        </div>
    </div>

    <!-- BootStrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <!-- Jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

    <!-- DataTable JS -->
   <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
   <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
   <script src="https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap5.min.js"></script>

    <!-- JS -->
    <script src="js/conversor.js"></script>
</body>

</html>