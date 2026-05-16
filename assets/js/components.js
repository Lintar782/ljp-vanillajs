const components = {
    navbar: `
    <nav class="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="index.html" class="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="assets/images/logo.png" alt="LJP Studio Logo" class="h-10 w-auto">
            <span class="text-2xl font-serif tracking-tighter">LJP <span class="text-walnut">STUDIO</span></span>
        </a>
        <ul class="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-medium text-text-secondary">
            <li><a href="index.html" class="nav-link hover:text-text-primary transition-colors">Home</a></li>
            <li><a href="about.html" class="nav-link hover:text-text-primary transition-colors">About</a></li>
            <li><a href="services.html" class="nav-link hover:text-text-primary transition-colors">Services</a></li>
            <li><a href="portfolio.html" class="nav-link hover:text-text-primary transition-colors">Portfolio</a></li>
            <li><a href="contact.html" class="nav-link hover:text-text-primary transition-colors">Contact</a></li>
        </ul>
        <button id="mobile-menu-btn" class="md:hidden flex flex-col space-y-1.5 focus:outline-none group">
            <span class="w-6 h-0.5 bg-text-primary transition-all duration-300"></span>
            <span class="w-6 h-0.5 bg-text-primary transition-all duration-300"></span>
            <span class="w-4 h-0.5 bg-text-primary self-end transition-all duration-300"></span>
        </button>
    </nav>
    <div id="mobile-menu" class="fixed top-0 left-0 w-screen h-screen bg-primary z-[100] flex flex-col items-center justify-center space-y-8 text-2xl font-serif translate-x-full transition-transform duration-700 md:hidden">
        <button id="close-menu-btn" class="absolute top-8 right-8 text-sm uppercase tracking-widest text-text-secondary">Close</button>
        <a href="index.html" class="hover:text-walnut transition-colors">Home</a>
        <a href="about.html" class="hover:text-walnut transition-colors">About</a>
        <a href="services.html" class="hover:text-walnut transition-colors">Services</a>
        <a href="portfolio.html" class="hover:text-walnut transition-colors">Portfolio</a>
        <a href="contact.html" class="hover:text-walnut transition-colors">Contact</a>
    </div>
    `,
    footer: `
    <div class="container mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
            <div class="md:col-span-2">
                <a href="index.html" class="flex items-center space-x-3 mb-8 hover:opacity-80 transition-opacity">
                    <img src="assets/images/logo.png" alt="LJP Studio Logo" class="h-8 w-auto">
                    <span class="text-3xl font-serif tracking-tighter">LJP STUDIO</span>
                </a>
                <p class="text-text-secondary max-w-sm leading-relaxed">
                    Redefining spaces with bespoke furniture and cinematic craftsmanship. Based in Indonesia, serving excellence worldwide.
                </p>
            </div>
            <div>
                <h4 class="text-xs uppercase tracking-widest text-walnut mb-8 font-sans font-bold">Navigation</h4>
                <ul class="space-y-4 text-sm text-text-secondary">
                    <li><a href="about.html" class="hover:text-text-primary transition-colors">About Us</a></li>
                    <li><a href="portfolio.html" class="hover:text-text-primary transition-colors">Portfolio</a></li>
                    <li><a href="services.html" class="hover:text-text-primary transition-colors">Our Services</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-xs uppercase tracking-widest text-walnut mb-8 font-sans font-bold">Connect</h4>
                <ul class="space-y-4 text-sm text-text-secondary">
                    <li><a href="#" class="hover:text-text-primary transition-colors">Instagram</a></li>
                    <li><a href="#" class="hover:text-text-primary transition-colors">Facebook</a></li>
                    <li><a href="https://wa.me/6281234567890" class="hover:text-text-primary transition-colors">WhatsApp</a></li>
                    <li><a href="mailto:hello@ljpstudio.com" class="hover:text-text-primary transition-colors">Email Us</a></li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col md:row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest text-text-secondary/50">
            <p>&copy; 2024 LJP Custom Furniture. All Rights Reserved.</p>
            <div class="mt-4 md:mt-0 flex space-x-8">
                <a href="privacy.html">Privacy Policy</a>
                <a href="terms.html">Terms of Service</a>
            </div>
        </div>
    </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const navbarEl = document.getElementById('navbar');
    const footerEl = document.querySelector('footer');

    if (navbarEl) {
        navbarEl.innerHTML = components.navbar;
        
        // Highlight active link
        const currentPath = window.location.pathname;
        const navLinks = navbarEl.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
                link.classList.add('text-text-primary');
            }
        });

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuBtn = document.getElementById('close-menu-btn');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            });
            closeMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            });
            
            // Close menu on link click
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('translate-x-full');
                    document.body.style.overflow = '';
                });
            });
        }
    }

    if (footerEl) {
        footerEl.innerHTML = components.footer;
    }
});
