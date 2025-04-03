<script>
    import Swal from 'sweetalert2';

    let name = '';
    let phone = '';
    let email = '';
    let message = '';
    let isSubmitting = false; // Tracks if the form is being submitted

    const filterNameInput = () => {
        name = name.replace(/[^a-zA-Z\s]/g, ''); // Only allow letters and spaces
    };

    const filterPhoneInput = () => {
        phone = phone.replace(/[^0-9]/g, ''); // Only allow numbers
    };

    const submitForm = async () => {
        if (!validateForm()) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill out the form correctly.',
            });
            return;
        }

        isSubmitting = true; // Disable the button and show loading animation

        const formData = { name, phone, email, message };

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                const responseData = await res.json();
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: responseData.message || 'Quote request submitted successfully!',
                });

                // Reset the form inputs
                name = '';
                phone = '';
                email = '';
                message = '';
            } else {
                const errorData = await res.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: errorData.message || 'Something went wrong!',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Network Error',
                text: 'Unable to submit the form. Please try again later.',
            });
        } finally {
            isSubmitting = false; // Re-enable the button and hide loading animation
        }
    };

    const validateForm = () => {
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Name',
                text: 'Name should only contain alphabets and spaces.',
            });
            return false;
        }
        if (!/^[0-9]{10,15}$/.test(phone)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Phone Number',
                text: 'Please enter a valid phone number (10-15 digits).',
            });
            return false;
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Email Address',
                text: 'Please enter a valid email address.',
            });
            return false;
        }
        if (message.length > 250) {
            Swal.fire({
                icon: 'warning',
                title: 'Message Too Long',
                text: 'Message should be less than 250 characters.',
            });
            return false;
        }
        return true;
    };
</script>
<section class="feature-quite-section section-padding fix blue-bg">
    <div class="container">
        <div class="feature-quate-wrapper">
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="feature-quate-content">
                        <div class="section-title mb-0">
                            <span class="text-white wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                                Get Started Now
                            </span>
                            <h2 class="text-white wow fadeInUp" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                Contact our Team
                            </h2>
                        </div>
                        <p class="text wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                            Ready to simplify your logistics needs? Request a personalized quote today and let us provide you with tailored solutions that align with your business requirements.
                        </p>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="feature-contact-box">
                        <h4>Contact Form</h4>
                        <form on:submit|preventDefault={submitForm} class="contact-form-items">
                            <div class="row g-4">
                                <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div class="form-clt">
                                        <input
                                            type="text"
                                            bind:value={name}
                                            placeholder="Full Name"
                                            on:input={filterNameInput}
                                        />
                                        <div class="icon">
                                            <i class="fa-regular fa-user"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div class="form-clt">
                                        <input
                                            id="phoneInput"
                                            type="tel"
                                            bind:value={phone}
                                            placeholder="Phone"
                                            inputmode="numeric"
                                            on:input={filterPhoneInput}
                                        />
                                        <div class="icon">
                                            <i class="fa-regular fa-phone-flip"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                    <div class="form-clt">
                                        <input
                                            type="email"
                                            bind:value={email}
                                            placeholder="Email"
                                        />
                                        <div class="icon">
                                            <i class="fa-regular fa-envelope"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                    <div class="form-clt">
                                        <textarea
                                            bind:value={message}
                                            placeholder="Message"
                                            maxlength="250"
                                        ></textarea>
                                        <div class="icon">
                                            <i class="fa-solid fa-comment"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                    <button type="submit" class="theme-btn" disabled={isSubmitting}>
                                        {#if isSubmitting}
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...
                                        {:else}
                                            Request a Quote
                                            <i class="fa-solid fa-arrow-right"></i>
                                        {/if}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
