<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package OnePress
 */

$hide_footer = false;
if ( is_page() ){
    $hide_footer = get_post_meta( get_the_ID(), '_hide_footer', true );
}
if ( ! $hide_footer ) {
    ?>
    <footer id="colophon" class="site-footer navbar-fixed-bottom" role="contentinfo">
	<div class="row">
	<div class ="col-md-4" style="background-color: red">
	col11-4
	</div>
	<div class="col-md-4" style="background-color: yellow">
	col12-4
	</div>
	<div class="col-md-4" style="background-color: blue">
	col13-4
	</div>
	</div>
        <?php
        /**
         * @since 2.0.0
         * @see onepress_footer_widgets
         * @see onepress_footer_connect
         */
        do_action('onepress_before_site_info');
        $onepress_btt_disable = sanitize_text_field(get_theme_mod('onepress_btt_disable'));

        ?>

        <div class="site-info">
            <div class="container">
                <?php if ($onepress_btt_disable != '1') : ?>
                    <div class="btt">
                        <a class="back-top-top" href="#page" title="<?php echo esc_html__('Back To Top', 'onepress') ?>"><i class="fa fa-angle-double-up wow flash" data-wow-duration="2s"></i></a>
                    </div>
                <?php endif; ?>
                <?php
                /**
                 * hooked onepress_footer_site_info
                 * @see onepress_footer_site_info
                 */
                do_action('onepress_footer_site_info');
                ?>
            </div>
        </div>
        <!-- .site-info -->

    </footer><!-- #colophon -->
    <?php
}
/**
 * Hooked: onepress_site_footer
 *
 * @see onepress_site_footer
 */
do_action( 'onepress_site_end' );
?>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
