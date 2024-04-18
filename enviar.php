<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $comentario = $_POST["comentario"];
    
    $destinatario = "bloodydev.dm@gmail.com";
    $asunto = "Consulta de $nombre";
    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Correo Electrónico: $correo\n\n";
    $mensaje .= "Consulta:\n$comentario";

    mail($destinatario, $asunto, $mensaje);
    
    header("Location: confirmacion.html");
}
?>