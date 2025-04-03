<script>
	export let segment;
	export let logoSrc = 'assets/img/logo/black-logo.svg';
</script>

<div class="fix-area">
	<div class="offcanvas__info">
	  <div class="offcanvas__wrapper">
		<div class="offcanvas__content">
		  <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
			<div class="offcanvas__logo">
			  <!-- Dynamically using the logo image path -->
			  <a href="index.html">
				<img src={logoSrc} alt="logo-img" />
			  </a>
			</div>
			<div class="offcanvas__close">
			  <button>
				<i class="fas fa-times"></i>
			  </button>
			</div>
		  </div>
  
		  <p class="mt-4 d-none d-xl-block">
			As a leading exporter of textile fabrics, we offer unmatched quality that meets our clients' specifications and adheres to international standards.
		  </p>
		  
  
		  <div class="mobile-menu fix mt-3"></div>
  
		  <div class="social-icon d-flex align-items-center">
			<a href="https://www.facebook.com/nithiyavibeexports"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/nithiyavibeexports"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/nithiyavibeexports"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/917338947748"><i class="fa-brands fa-whatsapp"></i></a>
		  </div>
  
		 
  
		  <div class="offcanvas__contact">
			<h3>Information</h3>
			<ul class="contact-list">
			  <li>
				<span>Address:</span>
				6/1000/3, Suriya Vinayagar Street, Main Road Pudukkadai, Vettaikkaraniruppu, Nagapattinam Tamil Nadu 611 112
			  </li>
			  <li>
				<span>Call Us:</span>
				<a href="tel:+917338947748">+91 7338 947 748</a>
			  </li>
			  <li>
				<span>Email:</span>
				<a href="mailto:nithiyavibeexports@gmail.com">nithiyavibeexports@gmail.com</a>
			  </li>
			</ul>
		  </div>
		  
  
		  <a href="contact.html" class="theme-btn">
			Request a Quote
			<i class="fa-solid fa-arrow-right"></i>
		  </a>
		</div>
	  </div>
	</div>
  </div>
  <div class="offcanvas__overlay"></div>
  <!-- Offcanvas Area End -->

<!-- Header-Top Section Start -->
<div class="header-top-section">
    <div class="container-fluid">
        <div class="header-top-wrapper">
            <ul class="contact-list">
                <li>
                    <i class="fa-solid fa-phone-flip"></i>
                    <a href="tel:+917338947748">Call : +91 7338 947 748</a>
                </li>
                <li>
                    <i class="fa-sharp fa-solid fa-envelope"></i>
                    <a href="mailto:nithiyavibeexports@gmail.com">nithiyavibeexports@gmail.com</a>
                </li>
            </ul>
            <ul class="social-icon d-flex align-items-center">
                <li>
                    <i class="fa-solid fa-location-dot"></i>
                    Location : Nagapattinam, Tamil Nadu 611 112
                </li>
                <li>
                    <a href="https://www.facebook.com/nithiyavibeexports"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/nithiyavibeexports"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/nithiyavibeexports"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/917338947748"><i class="fa-brands fa-whatsapp"></i></a>
                </li>
            </ul>
        </div>
    </div>
</div>

<!-- Header Section Start -->
<header id="header-sticky" class="header-section header-1 header-2">
    <div class="container-fluid">
        <div class="mega-menu-wrapper">
            <div class="header-main">
                <div class="header-left">
                    <div class="logo">
                        <a href="" class="header-logo">
                            <img src="{logoSrc}" alt="logo-img">
                        </a>
                    </div>
                </div>

                <div class="mean__menu-wrapper">
                    <div class="main-menu">
                        <nav id="mobile-menu">
                            <ul>
                                <!-- Home Menu Item -->
                                <li aria-current={segment === 'home' ? 'page' : undefined}>
                                    <a href="">
                                        Home
                                    </a>
                                </li>

                                <!-- Pages Menu Item -->
                                <li aria-current={segment === 'about' ? 'page' : undefined}>
                                    <a href="">
                                        About Us
                                    </a>
                                </li>

                                <!-- Products Menu Item with Dropdown -->
                                <li class="has-dropdown" aria-current={segment === 'products' ? 'page' : undefined}>
                                    <a href="">
                                        Products <i class="fas fa-chevron-down"></i>
                                    </a>
                                    <ul class="submenu">
                                        <li><a href="cotton-fabric.html">Cotton Fabric</a></li>
                                        <li><a href="silk-fabric.html">Silk Fabric</a></li>
                                        <li><a href="linen-fabric.html">Linen Fabric</a></li>
                                        <li><a href="polyester-fabric.html">Polyester Fabric</a></li>
                                        <li><a href="georgette-fabric.html">Georgette Fabric</a></li>
                                        <li><a href="chiffon-fabric.html">Chiffon Fabric</a></li>
                                    </ul>
                                </li>

                                <!-- Contact Us Menu Item -->
                                <li aria-current={segment === 'contact' ? 'page' : undefined}>
                                    <a href="">
                                        Contact Us
                                    </a>
                                </li>

                                <!-- Product Enquiry Menu Item -->
                                <li aria-current={segment === 'enquiry' ? 'page' : undefined}>
                                    <a href="">
                                        Product Enquiry
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="header-right d-flex justify-content-end align-items-center">
                    <!-- <a href="project-details.html" class="text-btn">Track Shipment <i class="fa-solid fa-arrow-right"></i></a> -->
                    <a href="" class="theme-btn">
                        Request a Quote
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <div class="header__hamburger d-xl-block my-auto">
                        <div class="sidebar__toggle">
                            <div class="header-bar">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Header Section End -->
