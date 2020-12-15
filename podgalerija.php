<?php /* Template Name: podgalerija */ ?>
<?php get_header(); ?>

<!DOCTYPE>
<html>
<body>
	<section class="container">

        <div class="row text-center justify-content-center">
            <div class="col-12 mb-5">
                <h2 class="text-center section__header">
                    <span><?php the_field('title_podgalerije'); ?></span><br><strong><?php the_field('title2_podgalerije'); ?></strong>
                </h2>
            </div>
        </div>
		
		
			<?php
				if( have_rows('slider_podgalerije') ):
			?>
				<div class="row gallery owl-three owl-carousel owl-theme mx-auto ">
			<?php
				while ( have_rows('slider_podgalerije') ) : the_row();
			?>
            <div class="col-sm-12 text-left mb-4">
                <a href="<?php the_field('link_podgalerije'); ?>" data-lightbox="image-1" data-title="Slike ordinacije 2" title="Link za slike ordinacije">
                    <div class="card card--gallery">
                        <div class="img-container">
                            <img alt="Galerija ordinacije" class="img-fluid" src="<?php the_field('img_podgalerije'); ?>">
                        </div>
                    </div>
                </a>
            </div>
			<?php 
				endwhile;
				else :
				endif;
			?>
		</div>
	</section>


	<section class="social-media">
		<div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-4 text-center">
                    <p>
                        Pratite nas na društvenim mrežama !
                    </p>
                    <p class="icon-set-large">
                        <a href="https://www.facebook.com/dr.zeljkokovac/" title="Smile design Kovac Facebook" target="_blank"><i style="font-size:1.8rem" class="fa">&#xf09a;</i></a>&nbsp;
                        <a href="https://www.instagram.com/smiledesignkovac/" title="Smile design Kovac Instagram" target="_blank"><i style="font-size:1.8rem" class="fa">&#xf16d;</i></a>&nbsp;
                    </p>
                </div>
            </div>
        </div>
	</section>
	<hr>
	
	
<footer class="footer">
	<div class="footer-logo">
		<div class="row justify-content-center">
            <div class="col-sm-12 mb-4 mx-auto">
		<a href="<?php the_field('link_logo', 267) ?>" title="Smile design kovac"><img src="<?php the_field('logo_footer', 267) ?>" alt="Smile design kovač logo" /></a>
			</div>
		</div>
	</div>
	
			<?php
				// check if the repeater field has rows of data
				if( have_rows('footer_repeater', 267) ):
			?>
				<div class="row footer-kontakt">
			<?php
				// loop through the rows of data
				while ( have_rows('footer_repeater', 267) ) : the_row();
			?>
			<div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2">
				<p><?php the_sub_field('title_footer', 267) ?></p>
				<hr>
				<p><?php the_sub_field('text_footer', 267) ?></p>
			</div>
			<?php 
				endwhile;
				else :
				endif;
			?>
	</div>
</footer>
</body>
</html>