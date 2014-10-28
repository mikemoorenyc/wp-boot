<?php

global $post;
$slug = $post->post_name;
/*
$parentID = $post->post_parent;
$parentslug = get_post($post->post_parent)->post_name;
*/
?>
<!DOCTYPE html>
<html lang="en" data-parent-slug="<?php echo $parentslug;?>" data-current="<?php echo $slug;?>" class="slug-<?php echo $slug.$int;?>">
<head>

<style><?php include 'build/css/main.css'; ?></style>
<script type="text/javascript">
function downloadCSSAtOnload(){var e=document.createElement("link");e.href="<?php echo bloginfo('template_directory'); ?>/build/css/expanded.css";e.rel="stylesheet";document.head.appendChild(e)}if(window.addEventListener)window.addEventListener("load",downloadCSSAtOnload,false);else if(window.attachEvent)window.attachEvent("onload",downloadCSSAtOnload);else window.onload=downloadCSSAtOnload
</script>

<?php
  $namer = get_the_title();

	if ($namer == "Welcome") {
		?>
    <title><?php echo bloginfo( 'name' );?></title>
    <?php
	} else {
    ?>
    <title><?php echo $namer;?> | <?php echo bloginfo( 'name' );?></title>
    <?php
	}
?>

<meta name="description" content="<?php if ( is_single() ) {
	single_post_title('', true);
	} else {
	bloginfo('name'); echo " - "; bloginfo('description');
	}
?>" />
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- The little things -->
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!-- icons & favicons -->
<link rel="shortcut icon" href="<?php echo bloginfo('template_directory'); ?>/icons/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="<?php echo bloginfo('template_directory'); ?>/icons/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="57x57" href="<?php echo bloginfo('template_directory'); ?>/assets/icons/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo bloginfo('template_directory'); ?>/assets/icons/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo bloginfo('template_directory'); ?>/assets/icons/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo bloginfo('template_directory'); ?>/assets/icons/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo bloginfo('template_directory'); ?>/assets/icons/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo bloginfo('template_directory'); ?>/assets/icons/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo bloginfo('template_directory'); ?>assets/icons/apple-touch-icon-152x152.png" />
<!-- For Nokia -->
<link rel="shortcut icon" href="<?php echo bloginfo('template_directory'); ?>/assets/icons/apple-touch-icon.png">
<!-- For everything else -->
<link rel="shortcut icon" href="<?php echo bloginfo('template_directory'); ?>/assets/icons/favicon.ico">


<!-- Stylesheets -->
<!--	<link rel="stylesheet" href="<?php echo bloginfo('template_directory'); ?>/dist/expanded.min.css" />-->
<!--<link rel="stylesheet/less" type="text/less" href="<?php echo site_url();?>/wp-content/themes/sedes-new/less/bootstrap.less?ts=<?php echo time();?>" />
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.3/less.min.js?v=1"></script>-->

<!--[if lte IE 8]>
	<link href='<?php echo bloginfo('template_directory'); ?>/css/ie-fixes.css?ts=<?php echo time();?>' rel='stylesheet' type='text/css'>
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
        <nav role="navigation">
            <?php $args = array( 'menu' => 'mainnav', 'container' => false, 'menu_id' => false, 'menu_class' => false); wp_nav_menu($args); ?>
        </nav>
        <?php get_search_form(); ?>
    </header>
