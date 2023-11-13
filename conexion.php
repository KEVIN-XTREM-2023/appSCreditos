<?php

$servername = "localhost";
$user = "root";
$password = "";
$dbname = "simuladorcreditos";

$conexion = mysqli_connect($servername,$user,$password,$dbname);
$mysqli = new mysqli($servername,$user,$password,$dbname);

if (!$conexion) {
    die("Error en la conexion".mysqli_connect_error());
} else {
    //echo "Conexion exitosa";
}

?>
