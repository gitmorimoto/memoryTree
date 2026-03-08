<?php
//
include('config.php');
$initSegment = file_get_contents('php://input');
//$initSegment = "/44Kz4/4Oz44";
$path = "{$pathToDatabase}{$initSegment}";
$initArray = [$path];
//echo $path;echo '<br>';

$fileArray = [];
$dirArray = [];
$inArray = [];
$outDirArray = [];
$outFileArray = [];
//$out = scandir($dir);
function scanDirectory($path)
{
    $fileArray = [];
    $dirArray = [];
    
    $out = scandir($path);
    
    foreach ($out as $f) {
        if ($f == "." || $f == "..") {
            continue;
        }
        $outPath = "{$path}/{$f}";

        //echo $outPath . PHP_EOL;echo '<br>';
        if(is_file($outPath))
        {
            array_push($fileArray,$outPath);
        }
        if(is_dir($outPath))
        {
            array_push($dirArray,$outPath);
        }
        
    }
    
   // print_r($fileArray);echo '<br>';
   // print_r($dirArray);echo '<br>';
    return [$dirArray,$fileArray];

}

do{

    if(empty($inArray))
    {
        $inArray = $initArray;  
    }
      
    foreach($inArray as $in)
    {
        
        $result = scanDirectory($in);
        $dirArray = $result[0];
        $fileArray = $result[1];
        $outDirArray = array_merge($outDirArray,$dirArray);
        $outFileArray = array_merge($outFileArray,$fileArray);
    }
    $inArray = $outDirArray;
}while(!empty($dirArray));

print_r($outFileArray);echo '<br>';

?>