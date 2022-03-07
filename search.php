<?php 
include_once "connection.php";


if(!isset($_POST)) die("invalid method");

$searchQuery = trim($_POST["searchQuery"]);


$sql = "SELECT name from province where name  LIKE '$searchQuery%' limit 10 ";
$result = $db->query($sql);

if($db->affected_rows > 0 ){
    while($rows = $result->fetch_object()){
        echo "<p class='text-right my-2'><span class ='fas fa-clock ml-3 text-secondary'></span><span>$rows->name</span></p>";
    }
}else{
    echo "<p class ='text-danger'>یافت نشد!<p>";
}
