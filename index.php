<?php
include('class.ListMaker.php');
include('class.InputBox.php');
$listObj = new ListMaker();
$inpBoxObj = new InputBox();
?>
<html>
    <head>
        
        <link href="./css/index.css" rel="stylesheet" type="text/css" media="screen  and (min-width: 481px)" />
  	    <script type="module" src="./js/index.js"></script>
   
    </head>
    <body id="body" style="width:100%;heigt:100%">
        <div id="mid" style="width:800px;height:600px;display:flex;position:relative">
          <?php  
                $listObj->makeList(0,20,5,5);
                $inpBoxObj->input_Box(0,"入力",200,30,180,5);
                $inpBoxObj->make_button(0,50,30,400,5);
                $inpBoxObj->input_Box(1,"出力",200,30,180,60);
          ?>
            
        </div>
    </body>
</html>
