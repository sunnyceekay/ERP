<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<h1>Testing table creation</h1>
    <?php
        require "connection.php";
        require "../query/query.php";
        require "functions.php";
        exec_query("select * from students");
        
        $conn->close();

    ?>
</body>
</html>