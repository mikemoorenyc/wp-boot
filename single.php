<?php get_header(); ?>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
	<?php /* How to display standard posts and search results */ ?>

	<div class="post">


		<a href="<?php the_permalink(); ?>" rel="bookmark">
			<h2><?php the_title(); ?></h2>
		</a>
		<?php the_content(); ?>

	</div>


<?php endwhile; // End the loop. Whew. ?>
<?php get_footer(); ?>
