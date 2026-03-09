<?php
class ListMaker
{
    public function makeList($elemNumber,$listSize,$width,$height,$left,$top)
    {    
       echo "<div id='list{$elemNumber}' 
       style='width:{$width}px;height:{$height}px;position:absolute;left:{$left}px;top:{$top}px'>";
            
            for($i=0;$i<$listSize;$i++)
            {
                echo "<div id='li{$i}' class='li' 
                style='width:100%;height:25px;border-bottom:1px solid white'>{$i}</div>";
            }

                     
        echo "</div>";
    }
}
?>