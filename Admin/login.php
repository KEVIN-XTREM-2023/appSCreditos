<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include '../conexion.php'; 
$email = $_POST['email_adm'];
$contrasenia = $_POST['cont_adm'];


$myArray=[];
$sql = "SELECT * FROM administrador WHERE email_adm='$email' AND cont_adm='$contrasenia' LIMIT 1 ";

if ($result = $mysqli->query($sql)){
   
  while($row = $result->fetch_assoc()) {
    $myArray[] = $row;
  }
 
  echo json_encode($myArray);
}
else{
  echo json_encode(array('mens'=>'No hay datos'));
  echo("No hay Datos");
}

$mysqli->close();
?>
