<?php
add_theme_support( 'menus' );

$siteDir = '/wp-content/themes/w25th-build';
add_post_type_support('page', 'excerpt');


// Custom functions

// Tidy up the <head> a little. Full reference of things you can show/remove is here: http://rjpargeter.com/2009/09/removing-wordpress-wp_head-elements/
remove_action('wp_head', 'wp_generator');// Removes the WordPress version as a layer of simple security

add_theme_support('post-thumbnails');
?>
