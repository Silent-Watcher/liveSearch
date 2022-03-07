<?php 

$db = new mysqli("localhost","root","","iran");

if($db->connect_errno) die("failed to connect to the database");

$db->set_charset("utf8");