

<script>siteDir = '<?php echo $siteDir;?>';</script>
<script type="text/javascript">
function downloadJSAtOnload(){var e=document.createElement("script");e.src="<?php echo $siteDir;?>/js/main.js";document.body.appendChild(e)}if(window.addEventListener)window.addEventListener("load",downloadJSAtOnload,false);else if(window.attachEvent)window.attachEvent("onload",downloadJSAtOnload);else window.onload=downloadJSAtOnload
</script>
</body>
</html>
