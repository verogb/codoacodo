<html>
<head>
    <title>Página de Contacto</title>
</head>
<body>
    <h1>Contacto</h1>
    <p>Por favor, llene el siguiente formulario para ponerse en contacto con nosotros:</p>
    
    <form action="procesar_formulario.php" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>

