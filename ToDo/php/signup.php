<?php
$conn = mysqli_connect("localhost", "root", "", "todolist");
if(!$conn){
    die("Database can't be connected" .mysqli_connect_error());
}
else{
    echo "database connected";
}


$username = mysqli_real_escape_string($conn , $_POST['username']);
    $password = mysqli_real_escape_string($conn , $_POST['password']);

    if(!empty($username) && !empty($password))
    {
        $sql = mysqli_query(conn, "SELECT username, password FROM user WHERE username = '{$username}'");
        if($sql)
        {
            $row_count = mysqli_num_rows($sql);
            if($row_count > 0)
            {
                echo "Successfully logged in!";
            }
            else{
                echo "There is no user with that username or the password is wrong";
            }
        }
    }else{
        echo "All input field are required!";
    }