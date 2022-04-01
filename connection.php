<?php

$usuario = "root";
$senha = "";
$database="blubash";
$host="localhost";

$mysqli = new mysqli($host, $usuario, $senha, $database);

if($mysqli->error){
  die("Erro ao conectar ao banco de dados" . $mysqli->error);
}