<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>

  <!--[if lt IE 7]><div class="alert alert-warning"><?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'roots'); ?></div><![endif]-->

  <?php
    do_action('get_header');
    // Use Bootstrap's navbar if enabled in config.php
    if (current_theme_supports('bootstrap-top-navbar')) {
      get_template_part('templates/header-top-navbar');
    } else {
      get_template_part('templates/header');
    }
  ?>

  <div class="wrap container tk-arvo" role="document">
  	<?php if (is_front_page()) { ?>
		<div class="row topslider">
			<?php echo do_shortcode( '[wpv-view name="Top-Slider"]' ); ?>
		</div>  		
  	<?php } ?>
   
    <div class="content row">
      <div class="main <?php echo roots_main_class(); ?>" role="main">
        <?php include roots_template_path(); ?>
      </div><!-- /.main -->
      <?php if (roots_display_sidebar()) : ?>
        <aside class="sidebar <?php echo roots_sidebar_class(); ?>" role="complementary">
          <?php include roots_sidebar_path(); ?>
        </aside><!-- /.sidebar -->
      <?php endif; ?>
    </div><!-- /.content -->
    
   <?php if (is_front_page()) { ?>
		<div class="row welcome">
			<section class="welcome-text">
				<p><?php echo get_post_meta(5, 'short_desc', true); ?></p>
			</section>
		</div>  		
  	<?php } ?>
  	
  	<?php if (is_front_page()) { ?>
		<div class="row projects">
			<?php echo do_shortcode( '[wpv-post-body view_template="Bottom Slider"]' ); ?>
		</div>  		
  	<?php } ?>
    
  </div><!-- /.wrap -->

  <?php get_template_part('templates/footer'); ?>

</body>
</html>
