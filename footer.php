<?php global $siteDir;?>

<script><?php $inlinejs = file_get_contents($siteDir.'/js/inline-load.js'); dirReplacer($inlinejs);?></script>
</body>
</html>
