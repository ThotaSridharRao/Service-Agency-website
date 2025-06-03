 // Basic mobile menu toggle
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Loading screen
        window.addEventListener('load', () => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 700); // Match transition duration
            }
        });

        // Intersection Observer for animations
        const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale-in');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target); // Optional: remove observer after animation
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                // Check if it's a link to an ID on the current page and not just "#"
                if (href.length > 1 && href.startsWith('#')) {
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                        // If mobile menu is open, close it after clicking a link
                        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                        }
                    }
                }
            });
        });


         const loginForm = document.getElementById('loginForm');
        const messageElement = document.getElementById('message');

        if (loginForm) {
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent actual form submission for this demo

                const username = document.getElementById('username').value;
                // In a real application, you would send this data to a server
                // and handle the response.

                if (username) {
                    messageElement.textContent = `Login attempt for ${username}. (This is a demo, no actual login occurred.)`;
                    messageElement.style.color = 'green';
                } else {
                    messageElement.textContent = 'Please enter a username.';
                    messageElement.style.color = 'red';
                }

                // Clear message after a few seconds
                setTimeout(() => {
                    messageElement.textContent = '';
                }, 5000);
            });
        }

        const signupForm = document.getElementById('signupForm');
        const messageElement = document.getElementById('message');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        if (signupForm) {
            signupForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent actual form submission for this demo

                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;

                messageElement.textContent = ''; // Clear previous messages
                messageElement.style.color = 'red'; // Default to error color

                if (!username || !email || !password || !confirmPassword) {
                    messageElement.textContent = 'All fields are required.';
                    return;
                }

                if (password !== confirmPassword) {
                    messageElement.textContent = 'Passwords do not match!';
                    // Optionally, add error styling to password fields
                    passwordInput.style.borderColor = 'red';
                    confirmPasswordInput.style.borderColor = 'red';
                    return;
                } else {
                    passwordInput.style.borderColor = '#ddd'; // Reset border color
                    confirmPasswordInput.style.borderColor = '#ddd';
                }

                // Basic password strength (example: min 6 characters)
                if (password.length < 6) {
                    messageElement.textContent = 'Password must be at least 6 characters long.';
                    passwordInput.style.borderColor = 'red';
                    return;
                } else {
                    passwordInput.style.borderColor = '#ddd';
                }


                // If all validations pass (for this demo)
                messageElement.textContent = `Account creation attempt for ${username}. (This is a demo, no account created.)`;
                messageElement.style.color = 'green';

                // In a real application, you would send data to a server here.
                // Example:
                // fetch('/api/signup', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ username, email, password })
                // })
                // .then(response => response.json())
                // .then(data => {
                //     if (data.success) {
                //         messageElement.textContent = 'Account created successfully! Redirecting to login...';
                //         messageElement.style.color = 'green';
                //         setTimeout(() => window.location.href = 'login.html', 2000);
                //     } else {
                //         messageElement.textContent = data.message || 'Signup failed.';
                //         messageElement.style.color = 'red';
                //     }
                // })
                // .catch(error => {
                //     console.error('Error:', error);
                //     messageElement.textContent = 'An error occurred. Please try again.';
                //     messageElement.style.color = 'red';
                // });


                // Clear message after a few seconds
                setTimeout(() => {
                    messageElement.textContent = '';
                }, 7000);
            });
        }