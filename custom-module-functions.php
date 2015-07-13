<?php


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

		if ($title != 'Auto Draft' && shortcode_exists( $type )):
	?>
		<p>Copy and paste this shortcode into a content area to show this module.</p>
		<div class="bucket-shortcode">
			<input type="text" readonly value='[<?php echo $type;?> id="<?php echo $pid; ?>"]' onFocus="this.select()" />
		</div>
	<?php else: ?>
		<p>There is no shortcode available for this content.</p>
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
        if(shortcode_exists( $type )) {
          ?>
  <input type="text" readonly value='[<?php echo $type;?> id="<?php echo $pid; ?>"]' onFocus="this.select()" />
          <?php
        }

    }
}


add_filter('manage_posts_columns', 'columns_head');
add_action('manage_posts_custom_column', 'column_content', 10, 2);

add_filter('manage_pages_columns', 'columns_head');
add_action('manage_pages_custom_column', 'column_content', 10, 2);


add_shortcode('page', 'fake_func');

function fake_func() {
$somevar = 'help';


ob_start();
?>
<blockquote style="color:red;">

  <?php echo $somevar;?>


</blockquote>


<?php
return ob_get_clean();
}


?>
