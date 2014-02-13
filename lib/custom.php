<?php
/**
 * Custom functions
 */


function vidthumb_func($atts) {
   extract(shortcode_atts(array(
      'id' => 200,
   ), $atts));
   $thevidthumb = get_video_thumbnail( $id );
   return $thevidthumb;
}
add_shortcode('vidthumb', 'vidthumb_func');