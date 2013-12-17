<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <div class="row-fluid single-post-row">
    	<div class="col-sm-7 left-featured-image-thumb-post">
            <header class="single-post-header">
            <?php 
                    
                    if ( '' != get_the_post_thumbnail() ) {
                        the_post_thumbnail( $size, $attr );
                    } else {
                        the_title();
                    }
                                
                    ?>
                
                </header>
                <!-- AddThis Button BEGIN -->
                <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
                <a class="addthis_button_preferred_1"></a>
                <a class="addthis_button_preferred_2"></a>
                <a class="addthis_button_preferred_3"></a>
                <a class="addthis_button_preferred_4"></a>
                <a class="addthis_button_compact"></a>
                <a class="addthis_counter addthis_bubble_style"></a>
                </div>
                <script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script>
          </div>
          <div class="col-sm-5 col8entry">
          <h1 class="entry-title-single"><?php the_title(); ?></h1>
           <?php get_template_part('templates/entry-meta'); ?> 
        </div>
        <div class="entry-content">
      <?php the_content(); ?>
    </div>
        
    </div>
    
    
    
    <footer>
      <?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'roots'), 'after' => '</p></nav>')); ?>
    </footer>
    <?php comments_template('/templates/comments.php'); ?>
  </article>
<?php endwhile; ?>
