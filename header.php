<?php

global $post;
$slug = $post->post_name;
global $siteDir;
$parentID = $post->post_parent;
$parentslug = get_post($post->post_parent)->post_name;

?>
<!DOCTYPE html>
<html lang="en" data-parent-slug="<?php echo $parentslug;?>" data-current="<?php echo $slug;?>" class="slug-<?php echo $slug;?>">
<head>

<style><?php include 'css/main.css'; ?></style>
<script>
function loadCSS(e,t,n){"use strict";function o(){var t;for(var i=0;i<s.length;i++){if(s[i].href&&s[i].href.indexOf(e)>-1){t=true}}if(t){r.media=n||"all"}else{setTimeout(o)}}var r=window.document.createElement("link");var i=t||window.document.getElementsByTagName("script")[0];var s=window.document.styleSheets;r.rel="stylesheet";r.href=e;r.media="only x";i.parentNode.insertBefore(r,i);o();return r}

cssExpand = "<?php echo $siteDir;?>/css/expanded.css"


</script>

<?php


if ( is_front_page() ) {
  $namer = "Menu";
  ?>
  <title>125 W 25th</title>
  <?php
} else {
  $namer = get_the_title();
  ?>

  <title><?php echo $namer;?> | 125 W 25th</title>
  <?php
}
?>

<meta name="description" content="
<?php if (have_posts() && is_single() OR is_page()):while(have_posts()):the_post();
if (get_the_excerpt()) {
  $out_excerpt = str_replace(array("\r\n", "\r", "\n", "[&hellip;]"), "", get_the_excerpt());
  //echo apply_filters('the_excerpt_rss', $out_excerpt);
  echo $out_excerpt;
} else {
  echo $namer;
}

endwhile;

else: ?>
<?php echo $namer; ?>
<?php endif; ?>" />

<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">

<!-- The little things -->
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="/xmlrpc.php" />
<!-- icons & favicons -->
<link rel="shortcut icon" href="<?php echo $siteDir;?>/assets/icons/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="<?php echo $siteDir;?>/assets/icons/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $siteDir;?>/assets/icons/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $siteDir;?>/assets/icons/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $siteDir;?>/assets/icons/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $siteDir;?>/assets/icons/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $siteDir;?>/assets/icons/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $siteDir;?>/assets/icons/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $siteDir;?>/assets/icons/apple-touch-icon-152x152.png" />
<!-- For Nokia -->
<link rel="shortcut icon" href="<?php echo $siteDir;?>/assets/icons/apple-touch-icon.png">
<!-- For everything else -->
<link rel="shortcut icon" href="<?php echo $siteDir;?>/assets/icons/favicon.ico">


<!--[if lte IE 8]>
<link rel="stylesheet" href="<?php echo $siteDir;?>/css/expanded.css" />
	<link href='<?php echo $siteDir;?>/css/ie-fixes.css?ts=<?php echo time();?>' rel='stylesheet' type='text/css'>
  	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->


</head>

<body <?php body_class(); ?> id="top">
    <header role="banner">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home" class="logo"><?php bloginfo( 'name' ); ?></a>
        <p class="desc">
			<?php bloginfo( 'description' ); ?>
        </p>

    </header>
