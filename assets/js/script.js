'use strict';

// Element toggle functionality
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Portfolio filter functionality
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "cases de sucesso") {
      // Show only items that are cases de sucesso
      if (filterItems[i].dataset.category.toLowerCase() === "cases de sucesso") {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    } else if (selectedValue === "landing pages") {
      // Show only items that are landing pages
      if (filterItems[i].dataset.category.toLowerCase() === "landing pages") {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    } else if (selectedValue === "sistemas") {
      // Show only items that are sistemas
      if (filterItems[i].dataset.category.toLowerCase() === "sistemas") {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  }
}

// Add event to all filter buttons
for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    filterFunc(selectedValue);
    
    // Remove active class from all buttons
    for (let j = 0; j < filterBtns.length; j++) {
      filterBtns[j].classList.remove("active");
    }
    
    // Add active class to clicked button
    this.classList.add("active");
  });
}

// Initialize with "Cases de Sucesso" active
window.addEventListener('load', () => {
  filterFunc("cases de sucesso");
});

// Form functionality
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
if (form) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // Check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }

  // Form submit event
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Show success message (you can replace this with actual form submission)
    alert("Mensagem enviada com sucesso! Retornarei o contato em breve.");
    
    // Reset form
    form.reset();
    formBtn.setAttribute("disabled", "");
  });
}

// Typing effect for title
const typingElement = document.querySelector('.typing-text');
const texts = [
  'Desenvolvedor Full Stack',
  'Criador de Landing Pages',
  'Especialista em Sistemas',
  'UI/UX Designer'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500; // Pause before typing next text
  }
  
  setTimeout(typeEffect, typeSpeed);
}

// Start typing effect
if (typingElement) {
  setTimeout(typeEffect, 1000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-item, .timeline-item, .project-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Add loading state management
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Skills animation on scroll
const skillBars = document.querySelectorAll('.skill-progress-fill');
const skillsSection = document.querySelector('.skill');

if (skillsSection) {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = width;
          }, 200);
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillsObserver.observe(skillsSection);
}

// Console message for developers
console.log(`
🚀 Portfólio desenvolvido por Mateus Ribeiro
💻 Tecnologias: HTML5, CSS3, JavaScript (Vanilla)
🎨 Design: Moderno e responsivo
📧 Contato: mateusribeiromkt@gmail.com

Interessado em uma aplicação similar? Entre em contato!
`);
