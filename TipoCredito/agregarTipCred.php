<?php

include '../conexion.php'; 
//$id = $_POST['id_tip_cred'];
$nombre = $_POST['nom_cred'];
$tasa = $_POST['tasa_int'];

$myArray=[];
$sql = "INSERT INTO tipo_credito(nom_cred, tasa_int) VALUES('$nombre','$tasa') ";



try {
    if($mysqli->multi_query($sql) === TRUE){
          echo json_encode(array('ok' => true, 'mensaje' => "Registro Correcto")) ;
  
      }else{
        echo json_encode(array('ok'=> false, 'errorMsg' => "Los datos son incorrectos")) ;
        
      }
  } catch (\Throwable $th) {
    
    echo json_encode("Error") ;
  }

$mysqli->close();



?>
