<?php
/**
 * Plugin Name:       Celaneo Missions
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       celaneo-missions
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_celaneo_missions_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_celaneo_missions_block_init' );

/* load css */
function load_celaneo_missions_css() {
	wp_enqueue_style( 'celaneo-missions-css', plugins_url( 'build/style-index.css', __FILE__ ) );
}

add_action( 'wp_enqueue_scripts', 'load_celaneo_missions_css' );

/* load js */
function load_celaneo_missions_js() {
	wp_enqueue_script( 'celaneo-missions-js', plugins_url( 'build/index.js', __FILE__ ) );
}

add_action( 'wp_enqueue_scripts', 'load_celaneo_missions_js' );