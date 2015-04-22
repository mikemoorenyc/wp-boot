<?php
/**
 * Template Name: Base Template Page
 *
  * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

 global $siteDir;
 $siteDir = get_bloginfo('template_url');
?>


<?php get_header(); ?>
  <?php get_template_part( 'loop', 'index' ); ?>
<?php get_footer(); ?>
