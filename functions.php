<?php
add_theme_support( 'menus' );

//$siteDir = '/wp-content/themes/w25th-build';
add_post_type_support('page', 'excerpt');


// Custom functions

// Tidy up the <head> a little. Full reference of things you can show/remove is here: http://rjpargeter.com/2009/09/removing-wordpress-wp_head-elements/
remove_action('wp_head', 'wp_generator');// Removes the WordPress version as a layer of simple security

add_theme_support('post-thumbnails');


// DIRECTORY REPLACER

function dirReplacer($string) {
  global $siteDir;
  $time = time();
  $newString = str_replace('***REPLACEWITHTHEMEDIRECTORY***', $siteDir, $string);
  $newString = str_replace('***TIMESTAMP***', $time ,$newString);
  echo $newString;
}
//CONTENT CLEANER
function content_cleaner($content) {

    // Remove inline styling
    $content = preg_replace('/(<[^>]+) style=".*?"/i', '$1', $content);

    // Remove font tag
    $content = preg_replace('/<font[^>]+>/', '', $content);

    // Remove empty tags
    $post_cleaners = array('<p></p>' => '', '<p> </p>' => '', '<p>&nbsp;</p>' => '', '<span></span>' => '', '<span> </span>' => '', '<span>&nbsp;</span>' => '', '<span>' => '', '</span>' => '', '<font>' => '', '</font>' => '');
    $content = strtr($content, $post_cleaners);

    return $content;
}
/*
add_action( 'admin_menu', 'short_coder' );
add_action( 'load-post-new.php', 'short_coder' );


function short_coder() {


  add_action( 'add_meta_boxes', 'shortcode_add' );
}


function shortcode_add() {
$post_types = get_post_types();

  foreach($post_types as $pt) {
    add_meta_box(
      'shortcode-link',      // Unique ID
      esc_html__( 'Shortcode' ),    // Title
      'shortcode_html',   // Callback function
      $pt,
      'side',         // Context
      'default'         // Priority
    );
  }


}

function shortcode_html() {
  ?>
  <div id="shortcode-display">
	<?php
		$pid = $GLOBALS['post_ID'];
		$type = get_post_type( $pid );

		if ($title != 'Auto Draft'):
	?>
		<p>Copy and paste this shortcode into any Post, Page or even another Bucket. Yeah that's right... a Bucket within a Bucket.</p>
		<div class="bucket-shortcode">
			<input type="text" readonly value='[<?php echo $type;?> id="<?php echo $pid; ?>"]' onFocus="this.select()" />
		</div>
	<?php else: ?>
		<p>Save the Bucket and a shortcode will be generated.</p>
	<?php endif; ?>
</div>

  <?php
}


// ADD NEW COLUMN
function columns_head($defaults) {
    $defaults['shorty'] = 'SHORTCODE';
    return $defaults;
}

// SHOW THE FEATURED IMAGE
function column_content($column_name, $post_ID) {
    if ($column_name == 'shorty') {
        $pid = $post_ID;
        $type = get_post_type( $pid );

        ?>
<input type="text" readonly value='[<?php echo $type;?> id="<?php echo $pid; ?>"]' onFocus="this.select()" />
        <?php
    }
}


add_filter('manage_posts_columns', 'columns_head');
add_action('manage_posts_custom_column', 'column_content', 10, 2);

add_filter('manage_pages_columns', 'columns_head');
add_action('manage_pages_custom_column', 'column_content', 10, 2);



*/

?>
