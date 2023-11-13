<?php

include '../conexion.php';

$id = $_POST['id_tip_cred'];
$sql = "DELETE FROM tipo_credito WHERE id_tip_cred ='$id'";
try {
    if ($mysqli->query($sql) === TRUE) {
        echo json_encode(array('ok' => true, 'mensaje' => "Eliminacion correcta"));
    } else {
        echo json_encode(array('ok' => false, 'errorMsg' => "No se pudo eliminar el registro"));
    }
} catch (\Throwable $th) {
    echo json_encode(array('ok' => false, 'errorMsg' => "Error"));
}

$mysqli->close();

?>
