<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-with, Content-type, Accept, Authorization");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");


$param = json_decode(file_get_contents("php://input"));


include '../conexion.php'; 
$email = $param->email_adm;  
$contrasenia = $param->cont_adm;


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
