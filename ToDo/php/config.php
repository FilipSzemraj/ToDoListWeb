<?php
$conn = mysqli_connect("localhost", "root", "", "todolist");
if(!$conn){
    echo "Database can't be connected" .mysqli_connect_error();
}
else{
    echo "database connected";
}
?>