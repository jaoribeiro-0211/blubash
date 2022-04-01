<?php
include("connection.php");
/* Verifica se os campos estao vazio */
if(isset($_POST['login']) || isset($_POST['password'])){
  
  if(strlen($_POST['login']) == 0){
    $msgErro = "Preencha o campo login";
  } else if(strlen($_POST['password']) == 0){
    $msgErro = "Preencha o campo password";
  } else {
    /* Evitando sqlInjection */
    $login = $mysqli->real_escape_string($_POST['login']);
    $password = $mysqli->real_escape_string($_POST['password']);
    /* Verificando se tem login e password no banco */
    $sql_code = 'SELECT * FROM usuarios WHERE login = "'.$login.'" AND password = "'.$password.'"';
    $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código" . $mysqli->error);

    /* Retorna quantas linhas essa consulta retorno  */
    $quantidade = $sql_query -> num_rows;

    if($quantidade == 1){
      $usuario = $sql_query->fetch_assoc();

      if(!isset($_SESSION)){
        session_start();
      }
      $_SESSION['id'] = $usuario['id'];
      $_SESSION['login'] = $usuario['login'];

      header('Location: conversation.php');
    }  else {
      $msgErro = "Falha ao logar! login ou password incorreta";
     /*  echo "Falha ao logar! login ou password incorreta"; */
    }
  }
}

?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- BootStrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/login.css" />
    <title>BlueBash</title>
  </head>
  <body>
    <div class="d-flex justify-content-center align-items-center vh-100">
      <form class="login" action="" method="POST">
        <div class="mb-3">
          <label for="Login" class="form-label">Login</label>
          <input
            type="text"
            class="form-control"
            id="Login"
            placeholder="login"
            name="login"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="password"
            name="password"
          />
          <p class="mt-2">
            <?php
            if(isset($msgErro)){
              echo $msgErro; 
            }
            ?>
          </p>
          <button type="submit" class="btn btn-primary  w-100">
            Login
          </button>
        </div>
      </form>
    </div>
    <!-- BootStrap Js -->
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
      integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
      integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
      crossorigin="anonymous"
    ></script>
    <!-- Jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <!-- JS -->
    <script src="js/login.js"></script>
  </body>
</html>
