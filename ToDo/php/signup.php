<?php
    include_once "config.php";
    $username = mysqli_real_escape_string(conn , $_POST['username']);
    $password = mysqli_real_escape_string(conn , $_POST['password']);

    if(!empty($username) && !empty($password))
    {

    }else{
        echo "All input field are required!";
    }
    ?>