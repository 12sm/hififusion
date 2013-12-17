    <div class="row-fluid single-article-row">	
        <div class="col-sm-4 left-featured-image-thumb">
        
        	<?php 
			
			if ( '' != get_the_post_thumbnail() ) {
				the_post_thumbnail( $size, $attr );
			} else {
				the_title();
			}
						
			?>
       
        </div>
        
        <div class="col-sm-8 article-chunk">	
            <header>
                <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                <p><?php get_template_part('templates/entry-meta'); ?></p>
             </header>
            <article <?php post_class(); ?>>
              <div class="entry-summary">
                <?php the_excerpt(); ?>
              </div>
            </article>
        </div>
        <hr class="post-divider" />
	</div>