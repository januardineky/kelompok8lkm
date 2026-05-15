// ============================================
// WELCOME & NAVIGATION
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  // Event listener untuk tombol mulai
  const mulaiBtn = document.getElementById("mulaiBtn");
  if (mulaiBtn) {
    mulaiBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Animasi click
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
        showWelcomeMessage();
      }, 100);
    });
  }

  // Smooth scroll untuk navigasi
  setupSmoothScroll();

  // Animasi fade-in untuk elements
  setupScrollAnimations();

  // Hover effects untuk navigation links
  setupNavHoverEffects();

  // Animasi untuk cards
  setupCardAnimations();

  // Ripple effect untuk buttons
  setupRippleEffect();
});

// ============================================
// WELCOME MESSAGE ANIMATION
// ============================================
function showWelcomeMessage() {
  const message = "Selamat datang di website kelompok 8 LKM Informatika 2026";
  const modal = document.createElement("div");
  modal.className = "welcome-modal";
  modal.innerHTML = `
    <div class="welcome-content">
      <div class="close-btn">&times;</div>
      <h2>${message}</h2>
      <p>Mari bersama-sama belajar dan berkembang!</p>
      <button class="modal-btn">Mulai Sekarang</button>
    </div>
  `;

  // Tambah styling
  const style = document.createElement("style");
  style.textContent = `
    .welcome-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: fadeInModal 0.3s ease-out;
    }

    @keyframes fadeInModal {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .welcome-content {
      background: linear-gradient(135deg, #243bb8 0%, #1f2f99 100%);
      color: white;
      padding: 50px;
      border-radius: 20px;
      text-align: center;
      max-width: 500px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      animation: slideInContent 0.4s ease-out;
    }

    @keyframes slideInContent {
      from {
        transform: translateY(-50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 32px;
      cursor: pointer;
      color: white;
      transition: transform 0.2s;
    }

    .close-btn:hover {
      transform: rotate(90deg);
    }

    .welcome-content h2 {
      font-size: 28px;
      margin-bottom: 15px;
      letter-spacing: 0.5px;
    }

    .welcome-content p {
      font-size: 16px;
      margin-bottom: 30px;
      opacity: 0.9;
    }

    .modal-btn {
      padding: 12px 40px;
      background: white;
      color: #243bb8;
      border: none;
      border-radius: 25px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .modal-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".close-btn");
  const modalBtn = modal.querySelector(".modal-btn");

  function closeModal() {
    modal.style.animation = "fadeOutModal 0.3s ease-out";
    setTimeout(() => modal.remove(), 300);
  }

  closeBtn.addEventListener("click", closeModal);
  modalBtn.addEventListener("click", () => {
    closeModal();
    // Redirect ke halaman anggota
    window.location.href = "anggota.html";
  });

  // Tutup dengan Escape key
  document.addEventListener("keydown", function handler(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", handler);
    }
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Tambahkan gaya animasi
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOutModal {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Observer untuk card dan section
  document.querySelectorAll(".card, .mentor-card, section").forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });
}

// ============================================
// NAVIGATION HOVER EFFECTS
// ============================================
function setupNavHoverEffects() {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
      this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
    });
  });
}

// ============================================
// CARD ANIMATIONS
// ============================================
function setupCardAnimations() {
  const cards = document.querySelectorAll(".card, .mentor-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease";
      this.style.transform = "translateY(-8px)";
      this.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    });
  });
}

// ============================================
// RIPPLE EFFECT UNTUK BUTTONS
// ============================================
function setupRippleEffect() {
  const buttons = document.querySelectorAll(".btn, .modal-btn, button");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.className = "ripple";

      // Tambahkan style ripple
      if (!document.querySelector("style[data-ripple]")) {
        const style = document.createElement("style");
        style.setAttribute("data-ripple", "true");
        style.textContent = `
          .btn, .modal-btn, button {
            position: relative;
            overflow: hidden;
          }

          .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleAnimation 0.6s ease-out;
            pointer-events: none;
          }

          @keyframes rippleAnimation {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener("load", function () {
  document.body.style.animation = "pageLoad 0.5s ease-out";

  const style = document.createElement("style");
  style.textContent = `
    @keyframes pageLoad {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
});

// ============================================
// ACTIVE LINK INDICATOR
// ============================================
function updateActiveLink() {
  const currentLocation = location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentLocation || (currentLocation === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

updateActiveLink();
