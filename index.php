<?php

?>
<html>
    <head>
        
        <link href="./css/index.css" rel="stylesheet" type="text/css" media="screen  and (min-width: 481px)" />
  	    <script type="module" src="./js/index.js"></script>
   
    </head>
    <body id="body" style="width:100%;heigt:100%">
        <div id="mid" style="width:100%;height:600px;display:flex">
            <div id="mc0" style="width:20%;height:600px">
                <?php
                for($i=0;$i<20;$i++)
                {
                    echo "<div id='li{$i}' class='li' style='width:100%;height:25px;border-bottom:1px solid white'>{$i}</div>";
                }

                ?>
            </div>
            <input id="inp0" class="inp" style="width:300px;height:30px;border:2px solid red">
            <button id="btn0" class="" style="width:50px;height:30px;">enter</button>
        </div>
    </body>
</html>
