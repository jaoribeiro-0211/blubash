<?php
$usuario = "root";
$senha = "";
$database="blubash";
$host="localhost";

$mysqli = new mysqli($host, $usuario, $senha, $database);



$converterDe = filter_input(INPUT_POST, 'converterDe');




?>