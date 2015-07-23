<?php
/**
 * Template Name: Base Template Page
 */
?>
<?php global $siteDir; global $homeURL;?>

<?php get_header(); ?>
  <?php get_template_part( 'loop', 'index' ); ?>
<?php get_footer(); ?>
