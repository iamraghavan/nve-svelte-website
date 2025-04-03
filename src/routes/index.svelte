<script>
  import RequestFormIndex from "../components/RequestFormIndex.svelte";

export let aboutImg ='assets/img/nve/varun-gaba-7lqa1OcJV9I-unsplash.webp';

</script>


  <!-- Hero Section Start -->
  <section class="hero-section hero-1 fix bg-cover" style="background-image: url(assets/img/nve/michael-up_c1IQN33Q-unsplash.webp);">
	<div class="container">
		<div class="row">
			<div class="col-xl-10">
				<div class="hero-content">
					<h5 class="wow fadeInUp" data-wow-delay=".3s">We Strive for Excellence in the Export-Import Industry</h5>
					<h1 class="wow fadeInUp" data-wow-delay=".5s">
						Our Commitment
						in Export
					</h1>
					

					<div class="hero-button wow fadeInUp" data-wow-delay=".3s">
						<a href="faq.html" class="theme-btn">
							Request a Quote
						   <i class="fa-solid fa-arrow-right"></i>
						</a>
						<a href="service.html" class="text-btn">
							Explore our Products
						   <i class="fa-solid fa-arrow-right"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- About -->
<section class="about-section section-padding fix">
	<div class="container">
		<div class="about-wrapper">
			<div class="row g-4">
				<div class="col-lg-6">
					<div class="about-content">
						<div class="section-title mb-0">
							<span class="wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">Welcome to NITHIYA VIBE EXPORTS</span>
							<h2 class="wow fadeInUp" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
								Connecting Global Businesses with Premium-Quality Fabrics
							</h2>
						</div>
						<p class="about-text wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
							At <span style="color: var(--theme);
    font-weight: bold;" > NITHIYA VIBE EXPORTS </span>, we specialize in exporting high-quality cotton fabrics and textile materials sourced directly from India to businesses around the world. We cater to industries such as garment manufacturing, footwear production, and handbag creation, ensuring they receive the finest raw materials to enhance their products.
						Our goal is to provide reliable service, competitive pricing, and the assurance that every shipment meets the highest standards of quality.
						</p>
						<div class="about-icon-item">
							<div class="about-item wow fadeInUp" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
								<div class="icon">
									<i class="flaticon-world-wide"></i>
								</div>
								<div class="content">
									<h5>
										Global Reach & Reliable Service
									</h5>
									<p>
										We connect textile suppliers in India with businesses worldwide, ensuring timely and efficient delivery.
									</p>
								</div>
							</div>
							<div class="about-item wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
								<div class="icon">
									<i class="flaticon-tracking"></i>
								</div>
								<div class="content">
									<h5>
										Premium-Quality Materials
									</h5>
									<p>
										We offer only the finest cotton fabrics and textile materials to elevate your products.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="about-image">
						<img src="{aboutImg}" alt="img" class="wow img-custom-anim-right" data-wow-duration="1.3s" data-wow-delay="0.3s" style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.3s; animation-name: img-anim-right;">
						<div class="counter-box float-bob-y">
							<h2><span class="count">1</span><sup>+</sup></h2>
							<p>
								Years of Experience
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="cta-bg-section fix bg-cover" style="background-image: url(assets/img/cta/cta-bg-1.jpg);">
	<div class="cta-bg-wrapper">
		<h2 class="wow img-custom-anim-left" data-wow-duration="1.3s" data-wow-delay="0.3s" style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.3s; animation-name: img-anim-left;">Sent a Message</h2>
	</div>
</section>

<RequestFormIndex/>



<section class="service-section section-padding section-bg fix">
	<div class="container">
	  <div class="section-title text-center">
		<span class="wow fadeInUp">Fabric Collection</span>
		<h2 class="wow fadeInUp" data-wow-delay=".3s">Premium Textile Solutions</h2>
	  </div>
	  <div class="service-wrapper">
		<div class="row">
		  <div class="col-lg-12">
			{#each [
			  { number: "01", title: "Premium Cotton Fabrics", description: "Our cotton fabrics are handpicked for their softness, durability, and versatility. Ideal for garment manufacturers, our cotton materials can be used to produce everything from casual wear to high-end fashion. We ensure that each batch of cotton meets the highest quality standards, making it a preferred choice for manufacturers worldwide." },
			  { number: "02", title: "High-Quality Woven Fabrics", description: "Our woven fabrics are carefully crafted to offer excellent texture, strength, and longevity. Whether for fashion or functional wear, these fabrics are known for their smooth finish and ability to retain their shape, making them perfect for a variety of applications, including suits, shirts, and home textiles." },
			  { number: "03", title: "Denim Fabric", description: "Denim is a timeless fabric, and at NITHIYA VIBE EXPORTS, we provide high-quality denim that is perfect for jeans, jackets, and other durable apparel. Our denim fabrics are carefully sourced for their weight, strength, and authentic finish, ensuring your products have the look and feel of high-end fashion." },
			  { number: "04", title: "Knitted Fabrics", description: "Our knitted fabrics are designed for flexibility, comfort, and a smooth fit. They are widely used in activewear, loungewear, and casual clothing due to their stretch and durability. Our knitted fabrics offer the perfect blend of style and comfort, making them an excellent choice for contemporary fashion." }
			] as service}
			<div class="service-box-items wow fadeInUp">
			  <div class="accordion-single">
				<div class="header-area">
				  <div class="accordion-btn">
					<div class="content-items">

					  <span class="post-number">{service.number}</span>
					  <div class="content">
						<h3>{service.title}</h3>
					  </div>
					</div>
					<div class="right-content">
						<div class="right-content"><p>{service.description}</p>
					  <a href="service-details.html" class="arrow-icon"><i class="fa-solid fa-arrow-up-right"></i></a></div>
					</div>
				  </div>
				  <div class="service-image">
					<img src="assets/img/service/service-image.jpg" alt="{service.title}">
				  </div>
				</div>
			  </div>
			</div>
			{/each}
		  </div>
		</div>
	  </div>
	</div>
  </section>
  