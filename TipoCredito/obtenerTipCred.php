<?php

include '../conexion.php'; 
$sqlSelect = "SELECT *FROM tipo_credito";
$respuesta = $mysqli->query($sqlSelect);
$result = array();
if($respuesta->num_rows > 0 ){

  while($filaTipo = $respuesta->fetch_assoc()){
    array_push($result,$filaTipo );

  }
}else{
  $result = "NO HAY TIPOS DE CREDITOS";
}
echo json_encode($result, JSON_FORCE_OBJECT)

?> 
