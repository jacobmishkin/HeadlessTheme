<?php
/**
 *
 * Helper file to handle odds and ends with WordPress
 *
 */


// This will remove the HTML tags for the Content and the Excerpt
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );

// Add Theme Support for Featured Image
add_theme_support('post-thumbnails');