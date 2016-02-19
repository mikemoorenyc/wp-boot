<?php
//GET POST SLUG
global $post;
$slug = $post->post_name;
//GET POST PARENT
//$parentID = $post->post_parent;
//$parentslug = get_post($parentID)->post_name;
//GET THEME DIRECTORY
global $siteDir;
$siteDir = get_bloginfo('template_url');
//GET HOME URL
global $homeURL;
$homeURL = esc_url( home_url( ) );
//DECLARE THE SITE TITLE, SAVE A DB QUERY
global $siteTitle;
$siteTitle = get_bloginfo('name');
//DECLARE THE PAGE EXCERPT
global $siteDesc;
$siteDesc = get_bloginfo('description');
?>
<!DOCTYPE html>
<html lang="en" data-current="<?php echo $slug;?>" class="slug-<?php echo $slug;?>">
<head>

<!-- ABOVE THE FOLD CSS -->
<style><?php $inlinecss = file_get_contents($siteDir.'/css/main.css'); dirReplacer($inlinecss);?></style>


<?php
if ( is_front_page() ) {
  $namer = "Home";
  ?>
  <title><?php echo $siteTitle;?></title>
  <?php
} else {
  $namer = get_the_title();
  ?>

  <title><?php echo $namer;?> | <?php echo $siteTitle;?></title>
  <?php
}
?>

<!-- HERE'S WHERE WE GET THE SITE DESCRIPTION -->
<?php
if ( have_posts() && is_single() OR is_page()):while(have_posts()):the_post();
  if (get_the_excerpt()) {
    $out_excerpt = str_replace(array("\r\n", "\r", "\n", "[&hellip;]"), "", get_the_excerpt());
    //echo apply_filters('the_excerpt_rss', $out_excerpt);
    $siteDesc = $out_excerpt;
  } else {
    $siteDesc =  get_bloginfo('description');
  }
  if($siteDesc == '') {
    $siteDesc =  get_bloginfo('description');
  }
endwhile;
else: ?>

<?php endif; ?>
<meta name="description" content="<?php echo $siteDesc;?>" />

<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">


<?php wp_site_icon();?>


<!--  STUFF FOR IE8 WILL GET REMOVED ON COMPILATION // REMOVE THIS LINE TO RENDER IT
<!--[if lte IE 8]>
<link rel="stylesheet" href="<?php echo $siteDir;?>/css/expanded.css" />
	<link href='<?php echo $siteDir;?>/css/ie-fixes.css?ts=<?php echo time();?>' rel='stylesheet' type='text/css'>
  	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->


<!-- FACEBOOK TAGS REMOVED ON COMPILATION UNLESS YOU UNCOMMENT-->
<!--
<meta property="og:site_name" content="<?php echo $siteTitle;?>" />
<meta property="og:title" content="<?php echo $siteDesc;?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="<?php echo $homeURL;?>" />
<meta property="og:image" content="<?php echo $siteDir;?>/assets/blue-pin.jpg" />
<meta property="og:description" content="<?php echo $siteDesc;?>" />
-->

</head>

<body id="top">
<div id="css-checker"></div>
