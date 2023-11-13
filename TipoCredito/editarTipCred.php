<?php

include '../conexion.php'; 
$nombre = $_POST['nom_cred'];
$tasa = $_POST['tasa_int'];
$id = $_POST['id_tip_cred'];

$myArray=[];
$sql = "UPDATE tipo_credito SET nom_cred='$nombre', tasa_int ='$tasa' WHERE id_tip_cred='$id'";



try {
    if($mysqli->multi_query($sql) === TRUE){
          echo json_encode(array('ok' => true, 'mensaje' => "Actualizacion Correcto")) ;
  
      }else{
        echo json_encode(array('ok'=> false, 'errorMsg' => "Los datos son incorrectos")) ;
        
      }
  } catch (\Throwable $th) {
    
    echo json_encode("Error") ;
  }

$mysqli->close();



?>
