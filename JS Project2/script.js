document.querySelectorAll('nav ul li a, .cta-button, .footer-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const name = this.querySelector('input[placeholder="Your Name"]');
    const email = this.querySelector('input[placeholder="Your Email"]');
    const message = this.querySelector('textarea[placeholder="Your Message"]');

    if (!name.value.trim()) {
        valid = false;
        alert('Please enter your name.');
    }
    if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
        valid = false;
        alert('Please enter a valid email address.');
    }
    if (!message.value.trim()) {
        valid = false;
        alert('Please enter your message.');
    }

    if (valid) {
        alert('Message sent successfully!');
        this.reset();
    }
});

const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const style = document.createElement('style');
style.innerHTML = `
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #625f5d;
    color: #fbfbf9;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
}
`;
document.head.appendChild(style);