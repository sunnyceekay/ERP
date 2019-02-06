<?php
    function check_connection()
        {
            if($conn->connect_error)
            {
                echo "Connection error".$conn->connect_error;
            }
            else{
                echo "Connection successfull";
            }
        }
    function exec_query($query)
    {
        if($conn->query($query) === TRUE)
		{
			echo "<center><p>group creation successfull</p></center>";
		}
		else
		{
			echo "group creation failed".$conn->error;
		}
    }
    function ct_subject_table($name)
    {
        $query = "create table $name
        (
            id int not null primary key,
            lec_date date not null,
            name varchar(40) not null,
            attendance varchar(10) not null
        );";
        exec_query($query);
    }

?>