<?php
// This class finds the data files from initital path in the data tree
class ScanDirectory{
    function __construct()
    {

    }
    

    protected function scanDirectory($path)
    {
        $fileArray = [];
        $dirArray = [];
        if(is_dir($path))
        {
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
        }else{
            return [[],[]];
        }
    }

    public function findFiles($path)
    {
        $dirArray = [];
        $fileArray = [];
        $outFileArray = [];
        $outDirArray = [];
            do{

            if(empty($inArray))
            {
                $inArray = [$path];  
            }
            
            foreach($inArray as $in)
            {
                
                $result = $this->scanDirectory($in);
                if($result)
                {
                    $dirArray = $result[0];
                    $fileArray = $result[1];
                    $outDirArray = array_merge($outDirArray,$dirArray);
                    $outFileArray = array_merge($outFileArray,$fileArray);
                }
                
            }
            $inArray = $outDirArray;
        }while(!empty($dirArray));
        return $outFileArray;
    }
}

//////////////////example///////////////////////////////////
/*
include('config.php');
$obj = new ScanDirectory();
$initSegment =  "/44Kz4/4Oz44";
$path = "{$pathToDatabase}{$initSegment}";
$result = $obj->findFiles($path);
print_r($result);
*/
?>