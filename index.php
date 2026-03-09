<?php
include('class.ListMaker.php');
include('class.InputBox.php');
include('class.OutputBox.php');
$listObj = new ListMaker();
$inpBoxObj = new InputBox();
$outBoxObj = new OutputBox();
?>
<html>
    <head>
        
        <link href="./css/index.css" rel="stylesheet" type="text/css" media="screen  and (min-width: 481px)" />
  	    <script type="module" src="./js/index.js"></script>
   
    </head>
    <body id="body" style="width:100%;heigt:100%">
        <div id="mid" style="width:800px;height:600px;display:flex;position:relative">
          <?php  
                $listObj->makeList(0,20,200,600,5,5);
                $listObj->makeList(1,20,200,600,205,5);
                $inpBoxObj->input_Box(0,"入力",200,30,410,5);
                $inpBoxObj->make_button(0,50,30,620,5);
                $inpBoxObj->input_Box(1,"入力",200,30,410,40);
                $inpBoxObj->make_button(1,50,30,620,40);
                $outBoxObj->output_box(0,"出力",200,30,410,80);
                $outBoxObj->output_box(1,"出力",200,30,410,120);
          ?>
            
        </div>
    </body>
</html>
