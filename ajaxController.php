<?php

header('Content-Type: application/json');

$usuario = "root";
$senha = "";
$database="blubash";
$host="localhost";

$moeda1 = $_POST['moeda1'];
$moeda2 = $_POST['moeda2'];
$valor = $_POST['valor'];
$resultado = $_POST['resultado'];


$pdo = new PDO('mysql:host=localhost;dbname=blubash', $usuario, $senha);

$stmt = $pdo->prepare("INSERT INTO conversor (moeda1, moeda2, valor, resultado) VALUES (:m1,:m2,:val,:result)");
$stmt->bindValue(':m1', $moeda1);
$stmt->bindValue(':m2', $moeda2);
$stmt->bindValue(':val', $valor);
$stmt->bindValue(':result', $resultado);
$stmt->execute();

if($stmt->rowCount() >= 1){
  echo json_encode("Conversão salva com sucesso");
}else {
  echo json_encode("Falha ao converter");
}

?>