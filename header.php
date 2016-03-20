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
  $pageTitle = $siteTitle;
  ?>
  <title><?php echo $siteTitle;?></title>
  <?php
} else {
  $pageTitle = get_the_title();
  ?>

  <title><?php echo $pageTitle;?> | <?php echo $siteTitle;?></title>
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




<!-- FACEBOOK & TWiTTER TAGS REMOVED ON COMPILATION UNLESS YOU UNCOMMENT-->
<!--
<meta property="og:site_name" content="<?php echo $siteTitle;?>" />
<meta property="og:title" content="<?php echo $pageTitle;?> | <?php echo $siteTitle;?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="<?php echo $homeURL;?>" />
<meta property="og:image" content="<?php echo $siteDir;?>/assets/blue-pin.jpg" />
<meta property="og:description" content="<?php echo $siteDesc;?>" />

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?php echo $pageTitle;?> | <?php echo $siteTitle;?>">
<meta name="twitter:description" content="<?php echo $siteDesc;?>">
<meta name="twitter:image" content="<?php echo $siteDir;?>/assets/imgs/1.jpg">
-->

</head>

<body id="top">
<div id="css-checker"></div>
