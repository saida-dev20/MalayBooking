const sr = ScrollReveal({
    distance: "25px",
    duration: 1000,
    easing: "ease-out",
});

// Base
sr.reveal(".small-title")
sr.reveal(".title", { delay: 250 })
sr.reveal(".desc", { delay: 500 })

// Home
sr.reveal(".home_content-btn", { delay: 750 })
sr.reveal(".home_cards .home_card", { delay: 500, interval: 500 })

// About
sr.reveal(".about_cards .about_card", { delay: 500, interval: 500 })
sr.reveal(".about_stats .about_stat", { delay: 700, interval: 250 })

// Destinations
sr.reveal(".destinations_content-btn", { delay: 700 })
sr.reveal(".swiper", { delay: 500 })

// Services
sr.reveal(".services_man-img", { delay: 2000 })
sr.reveal(".services_cards .services_card", { delay: 700, interval: 500 })

// Subscribe
sr.reveal(".subscribe_input", { delay: 750 })
sr.reveal(".subscribe_btn", { delay: 1000 })
