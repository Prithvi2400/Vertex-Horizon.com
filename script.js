// script.js

document.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll(".content");
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const bgColor = window.getComputedStyle(section).backgroundColor;
            navbar.style.backgroundColor = bgColor;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-section');
    const sliderIndicator = document.querySelector('.slider-indicator');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const scrollItems = document.querySelectorAll('.scroll-item');

    scrollContainer.addEventListener('scroll', function() {
        const scrollPercentage = scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth);
        const maxTranslate = sliderDots[sliderDots.length - 1].offsetLeft - sliderDots[0].offsetLeft;
        sliderIndicator.style.transform = `translateX(${scrollPercentage * maxTranslate}px)`;

        const activeIndex = Math.round(scrollPercentage * (scrollItems.length - 1));
        sliderDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-section');
    const scrollItems = document.querySelectorAll('.scroll-item');

    // ... existing code ...

    function updateTextVisibility() {
        const containerRect = scrollContainer.getBoundingClientRect();
        scrollItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            const textContent = item.querySelector('.scroll-item-content');
            
            // Check if the item is fully in view
            if (itemRect.left >= containerRect.left && itemRect.right <= containerRect.right) {
                textContent.style.opacity = 1;
            } else {
                textContent.style.opacity = 0;
            }
        });
    }

    scrollContainer.addEventListener('scroll', updateTextVisibility);
    updateTextVisibility(); // Initial call to set visibility
});
/*const threshold = 20; // pixels
if (itemRect.left >= containerRect.left - threshold && 
    itemRect.right <= containerRect.right + threshold) {
    textContent.style.opacity = 1;
} else {
    textContent.style.opacity = 0;
}
*/
//
document.addEventListener('DOMContentLoaded', function() {
    const headingSection = document.getElementById('heading-section');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const headingTop = headingSection.getBoundingClientRect().top;

        if (headingTop < triggerBottom) {
            headingSection.classList.add('visible');
        } else {
            headingSection.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load

    // For debugging
    console.log('Script loaded');
    console.log('Heading section:', headingSection);
});

//
document.addEventListener('DOMContentLoaded', function() {
    const scrollSection = document.querySelector('.scroll-section');
    const sliderContainer = document.querySelector('.slider-container');

    function checkScrollSection() {
        const rect = scrollSection.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );

        if (isVisible) {
            sliderContainer.classList.add('visible');
        } else {
            sliderContainer.classList.remove('visible');
        }
    }

    // Check on scroll
    window.addEventListener('scroll', checkScrollSection);

    // Check on initial load
    checkScrollSection();

    // Existing scroll logic...
    const scrollContainer = document.querySelector('.scroll-section');
    const sliderIndicator = document.querySelector('.slider-indicator');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const scrollItems = document.querySelectorAll('.scroll-item');

    scrollContainer.addEventListener('scroll', function() {
        const scrollPercentage = scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth);
        const maxTranslate = sliderDots[sliderDots.length - 1].offsetLeft - sliderDots[0].offsetLeft;
        sliderIndicator.style.transform = `translateX(${scrollPercentage * maxTranslate}px)`;

        const activeIndex = Math.round(scrollPercentage * (scrollItems.length - 1));
        sliderDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    });
});

//section 2

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 200
    });

    // Add event listener to CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        alert('Thank you for your interest! We will contact you shortly for your free SEO audit.');
        // You can replace this with your own logic, like opening a modal or redirecting to a contact form
    });

    // Add scroll reveal effect to SEO cards
    const seoCards = document.querySelectorAll('.seo-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    seoCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

//section 3
document.addEventListener('DOMContentLoaded', function() {
    const wheelItems = document.querySelectorAll('.wheel-item');
    const serviceTitle = document.getElementById('serviceTitle');
    const serviceDescription = document.getElementById('serviceDescription');

    const services = {
        ContentCreation : 'Add creative reel template.',
        SponserdAds: 'PPC,Meta Ads,LinkedIn ads,Twitter ads',
        OrganicGrowth: 'Increase engagement,followers,awareness of your brand.',
        Engagement: 'Get leads for your business.',
        Automationtools: 'If you are doing every thing manually, automate your business.'
    };

    wheelItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceName = this.getAttribute('data-service');
            serviceTitle.textContent = serviceName;
            serviceDescription.textContent = services[serviceName];
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const seoTitle = document.querySelector('.seo-title');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const titleTop = seoTitle.getBoundingClientRect().top;

        if (titleTop < triggerBottom) {
            seoTitle.classList.add('visible');
        }
    }

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    // Check on initial load
    checkScroll();
});