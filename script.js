// ========== THEME TOGGLE ========== //
const bodyElement = document.querySelector("html");
const themeToggleBtn = document.getElementById("themeToggleBtn");

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-theme");
  bodyElement.classList.toggle("light-theme");
});

// ========== SCROLL TO TOP BUTTON ========== //
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  // Show button when user scrolls down 200px
  if (window.pageYOffset > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ========== COLLAPSIBLE CONTACT FORM ========== //
const toggleContactFormBtn = document.getElementById("toggleContactFormBtn");
const contactFormContainer = document.getElementById("contactFormContainer");

toggleContactFormBtn.addEventListener("click", () => {
  if (contactFormContainer.style.maxHeight) {
    contactFormContainer.style.maxHeight = null;
    toggleContactFormBtn.querySelector(".toggle-arrow").textContent = "expand_more";
  } else {
    contactFormContainer.style.maxHeight = contactFormContainer.scrollHeight + "px";
    toggleContactFormBtn.querySelector(".toggle-arrow").textContent = "expand_less";
  }
});

// ========== FORM SUBMISSION ========== //
const emailForm = document.getElementById("emailForm");
const thankYouMessage = document.getElementById("thankYouMessage");

emailForm.addEventListener("submit", function(event) {
  // Optionally handle it manually:
  // event.preventDefault();

  // Hide form fields
  emailForm.style.display = 'none';
  
  // Show Thank You message
  thankYouMessage.style.display = 'block';
});

// ========== YEAR IN FOOTER ========== //
document.getElementById("year").textContent = new Date().getFullYear();

// ========== SCROLL ANIMATIONS (IntersectionObserver) ========== //
const animatedItems = document.querySelectorAll(".animate-on-scroll");

const observerOptions = {
  threshold: 0.1
};

function animateOnScroll(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      // Remove if you want them to pop out when off-screen
      entry.target.classList.remove("in-view");
    }
  });
}

const observer = new IntersectionObserver(animateOnScroll, observerOptions);
animatedItems.forEach(item => {
  observer.observe(item);
});

// Default theme set to light
bodyElement.classList.add("light-theme");
const menuToggleBtn = document.getElementById("menuToggleBtn");
const mainNav       = document.getElementById("mainNav");

menuToggleBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

