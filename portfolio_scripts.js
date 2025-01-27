// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Offset for fixed navbar
            behavior: 'smooth'
        });
    });
});

// Highlight Active Section in Navbar on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 70; // Adjust for fixed navbar height

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Form Submission Alert
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        form.reset(); // Reset form fields
    });
}
