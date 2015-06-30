<?php

global $post;
$slug = $post->post_name;
$parentID = $post->post_parent;
$parentslug = get_post($post->post_parent)->post_name;
global $siteDir;
$siteDir = get_bloginfo('template_url');
global $homeURL;
$homeURL = esc_url( home_url( '/' ) );
?>
<!DOCTYPE html>
<html lang="en" data-parent-slug="<?php echo $parentslug;?>" data-current="<?php echo $slug;?>" class="slug-<?php echo $slug;?>">
<head>

<style><?php $inlinecss = file_get_contents($siteDir.'/css/main.css'); dirReplacer($inlinecss);?></style>


<?php


if ( is_front_page() ) {
  $namer = "Home";
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
  echo get_bloginfo('description');
}

endwhile;

else: ?>
<?php echo $namer; ?>
<?php endif; ?>" />

<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">



<!-- icons & favicons -->
<link rel="shortcut icon" href="<?php echo $siteDir;?>/assets/imgs/icons/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="<?php echo $siteDir;?>/assets/imgs/icons/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $siteDir;?>/assets/imgs/imgs/icons/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $siteDir;?>/assets/imgs/icons/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $siteDir;?>/assets/imgs/icons/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $siteDir;?>/assets/imgs/icons/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $siteDir;?>/assets/imgs/icons/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $siteDir;?>/assets/imgs/icons/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $siteDir;?>/assets/imgs/icons/apple-touch-icon-152x152.png" />
<!-- For Nokia -->
<link rel="shortcut icon" href="<?php echo $siteDir;?>/assets/icons/imgs/apple-touch-icon.png">
<!-- For everything else -->
<link rel="shortcut icon" href="<?php echo $siteDir;?>/assets/icons/imgs/favicon.ico">

<!--  STUFF FOR IE8 WILL GET REMOVED ON COMPILATION
<!--[if lte IE 8]>
<link rel="stylesheet" href="<?php echo $siteDir;?>/css/expanded.css" />
	<link href='<?php echo $siteDir;?>/css/ie-fixes.css?ts=<?php echo time();?>' rel='stylesheet' type='text/css'>
  	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->


<!-- FACEBOOK TAGS -->
<!--
<meta property="og:site_name" content="114 W 41st" />
<meta property="og:title" content="Discover Different" />
<meta property="og:type" content="website" />
<meta property="og:url" content="<?php echo $homeURL;?>" />
<meta property="og:image" content="<?php echo $siteDir;?>/assets/blue-pin.jpg" />
<meta property="og:description" content="<?php echo get_bloginfo('description');?>" />
-->

</head>

<body <?php body_class(); ?> id="top">
<div id="css-checker"></div>
