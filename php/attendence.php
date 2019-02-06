<!DOCTYPE html>
<html>
<head>
	<title>Attencence Sheet</title>
</head>
<body>
	<center><h1>Attendence Sheet</h1></center>

	<?php

		require "connection.php";
		include "functions.php";
		$query = "select name,roll_no from students;";
		check_connection();

	echo '<form>
		Enter Date:
		<input type = "date" />
		<table>
			<tr>
				<th>Name</th>
				<th>Roll No</th>
				<th>Present</th>
				<th>Absent</th>
			</tr>';
		
		if($result = $conn->query($query))
		{
			while ($row = $result->fetch_assoc())
			{

				$name = $row['name'];
				$roll = $row['roll_no'];
				echo '
				<tr>
					<td>'.$name.'</td>
					<td>'.$roll.'</td>
					<td><input type = "radio" name ="'.$roll.'" value = "present" checked = "checked"/></td>
					<td><input type = "radio" name ="'.$roll.'" value = "absent"/></td>
				</tr>';

			}
		}
		else{
			echo 'Query failed'.$conn->error;
		}
		echo '</table></form>';
	?>
</body>
</html>