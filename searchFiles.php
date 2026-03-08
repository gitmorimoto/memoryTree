<?php
//find the files by initSegment
include('config.php');
include('class.scanDirectory.php');
$paths = [];
$result = [];
$initSegment = file_get_contents('php://input');
//$initSegment = "/n";
$obj = new ScanDirectory();
//$initSegment =  "/44Kz4/4Oz44";
$path = "{$pathToDatabase}{$initSegment}";
$paths = $obj->findFiles($path);
if($paths)
{
    foreach($paths as $p)
    {
        $data = file_get_contents($p);
        array_push($result,$data);
        $result = array_unique($result);
    }
}else{
    $result = [];
}
echo json_encode($result,JSON_UNESCAPED_UNICODE);

?>