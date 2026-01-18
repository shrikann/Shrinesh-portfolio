/* ================= GSAP SETUP ================= */
gsap.registerPlugin(ScrollTrigger);

/* ================= LOADER ================= */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1200);
});

/* ================= NAVBAR ENTRY ================= */
gsap.from(".navbar", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

/* ================= HERO ANIMATIONS ================= */
gsap.fromTo(
    ".hero-title",
    { opacity: 0, y: -80 },
    {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        clearProps: "all"
    }
);

gsap.fromTo(
    ".hero-subtitle",
    { opacity: 0, y: 40 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        clearProps: "all"
    }
);

gsap.fromTo(
    ".hero-desc",
    { opacity: 0, y: 30 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        clearProps: "all"
    }
);

/* ================= HERO BUTTONS (SAFE) ================= */
gsap.fromTo(
    ".hero-buttons .btn",
    { opacity: 0, y: 20 },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "opacity,transform"
    }
);

/* ================= SECTION TITLES ================= */
gsap.utils.toArray(".animate-title").forEach(title => {
    gsap.fromTo(
        title,
        { opacity: 0, y: 60 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            },
            clearProps: "all"
        }
    );
});

/* ================= CONTENT CARDS ================= */
gsap.utils.toArray(".animate-card").forEach(card => {
    gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play reverse play reverse"
            },
            clearProps: "all"
        }
    );
});

/* ================= UI MICRO INTERACTIONS ================= */

/* Buttons */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
            y: -4,
            duration: 0.25,
            ease: "power2.out"
        });
    });

    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
            y: 0,
            duration: 0.25,
            ease: "power2.out"
        });
    });

    btn.addEventListener("mousedown", () => {
        gsap.to(btn, {
            scale: 0.95,
            duration: 0.1
        });
    });

    btn.addEventListener("mouseup", () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.1
        });
    });
});

/* Cards hover (movement only – visuals handled by CSS) */
document.querySelectorAll(".skill-card, .project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

/* ================= HERO PARALLAX ================= */
gsap.to(".hero", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    backgroundPosition: "50% 100%"
});

/* ================= NAVBAR SHADOW ================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.style.boxShadow =
        window.scrollY > 50
            ? "0 10px 30px rgba(0,0,0,0.15)"
            : "0 5px 20px rgba(0,0,0,0.08)";
});

/* ================= BRANDING ================= */
console.log(
    "%c🚀 Premium Portfolio – K SHRINESH",
    "color:#c60000;font-size:18px;font-weight:bold;"
);
