<?php
//make memory tree and store data  
include('config.php');
$pathString = json_decode(file_get_contents('php://input'),true);
//$pathString = ["/44Kz4/4Oz44/K144O/844K","コンサータ"];

$ts = time();
$path = "{$pathToDatabase}{$pathString[0]}/{$ts}.txt";//path to the file

$dir = dirname($path);//dirname() in PHP returns the parent directory path of a file or directory path.

                      // It is commonly used when you want to extract the directory part of a path.

if(!file_exists($dir)){
    mkdir($dir,0777,true);
}


file_put_contents($path,$pathString[1]);

echo "stored";
?>