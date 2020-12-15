<?php /* Template Name: naslovna */ ?>
<?php get_header(); ?>

<main>
	<div id="home" class="naslovna">
		<?php

		
		if( have_rows('slider') ):

			// loop through the rows of data
			while ( have_rows('slider') ) : the_row();
		?>			
				<img class="mySlides" src="<?php the_sub_field('img_pocetna');?>" />
		<?php	
			endwhile;

		else :
		endif;
		?>
	</div>

	<section id="about" class="container">
		<?php
			// loop through the rows of data
			while ( have_posts() ) : the_post(); 
		?>
			<div class="row justify-content-center">
				<div class="col-lg-5 p-sm-0 p-md-1 m-auto">
					<h3 class="section__header"><strong><?php the_field('title_onama', 10); ?></strong></h3>
					<p class="section__text">
					<?php the_field('text_onama', 10); ?>
					</p>
					<a href="<?php the_field('link_radovi', 10); ?>" title="Naši radovi"class="btn show-sm mb-4">Naši radovi</a>
				</div>
				<div class="col-lg-7">
					<div class="row justify-content-center">

						<div class="col-xs-12 img-gap-bottom show-sm ">
							<img class="img-gap-right" src="<?php the_field('img1_onama', 10); ?>" width="261" height="391" />
							<img src="<?php the_field('img2_onama', 10); ?>" width="261" height="391"/>
						</div>
						<div class="w-100 show-sm"></div>
						<div class="col-xs-12 show-sm">
							<img src="<?php the_field('img3_onama', 10); ?>" />
						</div>
						
						<div class="owl-two owl-carousel owl-theme hide-sm">
							<div class="item-img">
								<img src="<?php the_field('img1_onama', 10); ?>" width="261" height="391" />
							</div>
							<div class="item-img">
								<img src="<?php the_field('img2_onama', 10); ?>" width="261" height="391"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		<?php endwhile; ?>
	</section>
	<hr class="hr">
	
	<section class="container">
		<?php
			// loop through the rows of data
			while ( have_posts() ) : the_post(); 
		?>
			<div class="row p-0 p-md-1">
				<div class="col-12">
					<h3 id="services" class="services__header services__header--center"><strong><?php the_field('title_usluge', 12); ?></strong></h3>
				</div>
			</div>
			
			<div class="container">
				<div class="row justify-content-center mt-5 owl-two owl-carousel owl-theme mx-0 off">
				
					<div class="col-12 col-sm-6 col-lg-4 col-xl-4 mb-5 text-center">
						<img alt="image" class="img-icon" src="<?php the_field('img_implan', 12); ?>">
						<h4><?php the_field('title_implan', 12) ?></h4>
						<p><?php the_field('text_implan', 12) ?></p>
						<a href="<?php the_field('link_implan', 12) ?>" title="Link pročitaj više" class="card__link"><i class="glyphicon-plus"></i> Pročitaj više</a>
					</div>
						<div class="col-12 col-sm-6 col-lg-4 col-xl-4 mb-5 text-center">
						<img alt="image" class="img-icon" src="<?php the_field('img_krunice', 12); ?>">
						<h4><?php the_field('title_krunice', 12); ?></h4>
						<p><?php the_field('text_krunice', 12); ?></p>
						<a href="<?php the_field('link_krunice', 12); ?>" title="Link pročitaj više" class="card__link"><i class="glyphicon-plus"></i> Pročitaj više</a>
					</div>
                
					<div class="col-12 col-sm-6 col-lg-4 col-xl-4 mb-5 text-center">
						<img alt="image" class="img-icon" src="<?php the_field('img_endo', 12); ?>">
						<h4><?php the_field('title_endo', 12); ?></h4>
						<p><?php the_field('text_endo', 12); ?></p>
						<a href="<?php the_field('link_endo', 12); ?>" title="Link pročitaj više" class="card__link"><i class="glyphicon-plus"></i> Pročitaj više</a>
					</div>
                
                
					<div class="col-12 col-sm-6 col-lg-4 col-xl-4 mb-5 text-center">
						<img alt="image" class="img-icon" src="<?php the_field('img_protetika', 12); ?>">
						<h4><?php the_field('title_protetika', 12); ?></h4>
						<p><?php the_field('text_protetika', 12); ?></p>
						<a href="<?php the_field('link_protetika', 12); ?>" title="Link pročitaj više" class="card__link"><i class="glyphicon-plus"></i> Pročitaj više</a>
					</div>
                
					<div class="col-12 col-sm-6 col-lg-4 col-xl-4 mb-5 text-center">
						<img alt="image" class="img-icon" src="<?php the_field('img_ljuskice', 12); ?>">
						<h4><?php the_field('title_ljuskice', 12); ?></h4>
						<p><?php the_field('text_ljuskice', 12); ?></p>
						<a href="<?php the_field('link_ljuskice', 12); ?>" title="Link pročitaj više" class="card__link"><i class="glyphicon-plus"></i> Pročitaj više</a>
					</div>
                
                
					<div class="col-12 col-sm-6 col-lg-4 col-xl-4 mb-5 text-center">
						<img alt="image" class="img-icon" src="<?php the_field('img_mostovi', 12); ?>">
						<h4><?php the_field('title_mostovi', 12); ?></h4>
						<p><?php the_field('text_mostovi', 12); ?></p>
						<a href="<?php the_field('link_mostovi', 12); ?>" title="Link pročitaj više" class="card__link"><i class="glyphicon-plus"></i> Pročitaj više</a>
					</div>
                
					<div class="col-12 col-sm-6 col-lg-4 col-xl-4 mb-5 text-center">
						<img alt="image" class="img-icon" src="<?php the_field('img_dsd', 12); ?>">
						<h4><?php the_field('title_dsd', 12); ?></h4>
						<p><?php the_field('text_dsd', 12); ?></p>
						<a href="<?php the_field('link_dsd', 12); ?>" title="Link pročitaj više" class="card__link"><i class="glyphicon-plus"></i> Pročitaj više</a>
					</div>
				</div>
			</div>
		<?php endwhile; ?>
		
		
		<div class="banner">
		<h3 class="text-center section__header"><strong><?php the_field('title_posts', 12); ?></strong></h3>

			<div class="container posts_slider">
				<?php
					// check if the repeater field has rows of data
					if( have_rows('slider_posts', 12) ):
					// loop through the rows of data
					while ( have_rows('slider_posts', 12) ) : the_row();
				?>
					<div class="banner-block mt-5 mx-0">
						<div class="row align-items-center justify-content-center">
							<div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto text-center">
								<img alt="Slika zadovoljnog korisnika" class="img-icon-posts" src="<?php the_sub_field('img_posts', 12); ?>" />
							</div>

							<div class="col-12 col-md-8 ml-auto mr-auto mt-4 mt-md-0 align-content-center">
								<p class="posts text-h3">
									<?php the_sub_field('text_posts', 12); ?>
								</p>
								<p class="posts-name mt-4 mt-lg-5"><strong><?php the_sub_field('title_posts_name', 12); ?></strong></p>
							</div>
						</div>
					</div>
				<?php 
					endwhile;
					else :
					endif;
				?>
			</div>
		</div>
	</section>
	
	
	<section id="contact" class="contact pb-0">

		<h2 class="text-center section__header"><span><?php the_field('title_kontakt', 16); ?></span><br><strong><?php the_field('title2_kontakt', 16); ?></strong></h2>
		<div class="container p-0 mt-4 mb-4">
            <iframe width="100%" height="450" frameborder="0" style="border:0;margin-top: 1rem;"
                    src="https://www.google.com/maps/embed/v1/place?q=Ul.%20kralja%20Zvonimira%2033%2C%2031327%2C%20Bilje&key=AIzaSyAyrfaAkUaecn6liuJLPnQpdgzqcMZv0lY" allowfullscreen></iframe>
		</div>
		<div class="container mt-3">
		<?php
			if( have_rows('kontakt_icons', 16) ):
		?>
			<div class="row justify-content-center align-content-center text-center">
		<?php
			// loop through the rows of data
			while ( have_rows('kontakt_icons', 16) ) : the_row(); 
		?>
			<div class="col-12 col-sm-6 col-md-6 col-lg-3">
				<img alt="kontakt ikonica" class="img-icon" src="<?php the_sub_field('img_icon', 16); ?>" />
				<p>
					<?php the_sub_field('title_icon', 16); ?>
				</p>
			</div>
			</div>
		<?php 
			endwhile;
			else :
			endif;
		?>
			
		
		</div>
	</section>
</main>
<?php get_footer(); ?>