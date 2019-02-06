<!--Upload your code here Sid-->
<<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Install ERP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
</head>
<body>
    <?php
        require "../php/connection.php";
        require "../query/query.php";

        //Checking connection

        check_connection();

        //End of checking connection
        //Starting of making sec_groups table

        if($conn->query($ct_sec_groups) === TRUE)
		{
			echo "<center><p>group creation successfull</p></center>";
		}
		else
		{
			echo "group creation failed".$conn->error;
        }
        
        //End of making sec_groups table
        //Start of making students table

        if($conn->query($ct_students) === TRUE)
        {
            echo "table creation successfull";
        }
        else
        {
            echo "Table creation failed".$conn->error;
        }

        //End of making students table
        $conn->close();

    ?>
</body>
</html>