<?php
/**
 * Custom functions
 */


function vidthumb_func( $post_id ) {
     $thevidthumb = get_video_thumbnail( $post_id );
     return $thevidthumb;
}
add_shortcode('vidthumb', 'vidthumb_func');

