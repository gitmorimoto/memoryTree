<?php
class InputBox
{
    public function input_Box($elemNumber,$subTitle,$width,$height,$left,$top)
    {
        echo "<div id='' 
        style='width:fit_content;height:fit_content;display:flex;position:absolute;left:{$left}px;top:{$top}px'>";
        echo "<div id='' 
        style='width:fit_content;height:fit_content;'>{$subTitle}</div>";
        echo "<input id='inp{$elemNumber}' class='inp' 
        style='width:{$width};height:{$height};'>";
        echo "</div>";
       
    }
    public function make_button($elemNumber,$width,$height,$left,$top)
    {
        echo "<button id='btn0' class='' 
        style='width:{$width}px;height:{$height}px;position:absolute;left:{$left}px;top:{$top}px'>enter</button>";
    }
    
}

?>