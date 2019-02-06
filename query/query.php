<!--Upload your code here Sid-->
<?php
    $ct_sec_groups = "create table sec_groups
    (
        group_id varchar(2) not null primary key
    );";
    $ct_students = "create table students
    (
        id int not null auto_increment primary key,
        name varchar(40) not null ,
        roll_no varchar(40) not null,
        Sec_group varchar(2) not null,
        foreign key (sec_group) references Sec_groups(group_id)
    );";
    
?>