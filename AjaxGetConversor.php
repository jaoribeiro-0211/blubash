<?php

header('Content-Type: application/json');

$usuario = "root";
$senha = "";
$database="blubash";
$host="localhost";


$pdo = new PDO('mysql:host=localhost;dbname=blubash', $usuario, $senha);

$stmt = $pdo->prepare("SELECT * FROM conversor");
$stmt->execute();

if($stmt->rowCount() >= 0){
  echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}else {
  echo json_encode("Falha ao selecionar conversor");
}
?>