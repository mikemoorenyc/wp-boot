<?php global $siteDir; global $homeURL;?>
<script async="true" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script async="true" src="<?php echo $siteDir;?>/js/main.js?v=<?php echo time();?>"></script>
<script><?php $inlinejs = file_get_contents($siteDir.'/js/inline-load.js'); dirReplacer($inlinejs);?></script>
</body>
</html>
