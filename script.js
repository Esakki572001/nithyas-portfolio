document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // --------------------------------------
  // HOME SECTION ANIMATION
  // --------------------------------------

  function animateHomeSection() {
    gsap.from("#name", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from("#role", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });

    gsap.from("#intro-right", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.4
    });
  }

  // Animate on load
  animateHomeSection();

  // Re-animate on Home nav click
  const homeNav = document.getElementById("nav-home");
  if (homeNav) {
    homeNav.addEventListener("click", () => {
      setTimeout(() => {
        animateHomeSection();
      }, 300);
    });
  }

  // --------------------------------------
  // ABOUT SECTION CARDS ON SCROLL
  // --------------------------------------

  gsap.from("#about-left", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about-left",
      toggleActions: "play none none reset"
    }
  });

  gsap.from("#about-center", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about-center",
      toggleActions: "play none none reset"
    }
  });

  gsap.from("#about-right", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about-right",
      toggleActions: "play none none reset"
    }
  });

  // --------------------------------------
  // EDUCATION & CERTIFICATION SCROLL ANIMATION (LEFT → RIGHT & RIGHT → LEFT)
  // --------------------------------------

  gsap.from("#education-card", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#education-card",
      toggleActions: "play none none reset"
    }
  });

  gsap.from("#certification-card", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#certification-card",
      toggleActions: "play none none reset"
    }
  });

  // --------------------------------------
  // ABOUT NAVBAR CLICK → Re-animate all 5 cards
  // --------------------------------------

  const aboutNav = document.getElementById("nav-about");
  if (aboutNav) {
    aboutNav.addEventListener("click", () => {
      setTimeout(() => {
        // Old About cards
        gsap.fromTo("#about-left", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
        gsap.fromTo("#about-center", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power2.out" });
        gsap.fromTo("#about-right", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power2.out" });

        // Education (left → right)
        gsap.fromTo("#education-card", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out" });

        // Certification (right → left)
        gsap.fromTo("#certification-card", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1,  ease: "power2.out" });
      }, 300);
    });
  }

  // --------------------------------------
  // SKILLS SECTION (percent count on scroll)
  // --------------------------------------

  function animateSkillPercentages() {
    document.querySelectorAll(".percent").forEach((el) => {
      const target = parseInt(el.getAttribute("data-percent"));
      gsap.fromTo(el, {
        innerText: 0
      }, {
        duration: 2,
        innerText: target,
        ease: "power2.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          el.textContent = Math.floor(el.innerText) + "%";
        }
      });
    });
  }

  // Animate on scroll
  ScrollTrigger.create({
    trigger: "#skills",
    start: "top 80%",
    once: true,
    onEnter: animateSkillPercentages
  });

  // Animate on nav click
  const skillsNav = document.getElementById("nav-skills");
  if (skillsNav) {
    skillsNav.addEventListener("click", () => {
      setTimeout(() => {
        animateSkillPercentages();
      }, 300);
    });
  }
});
