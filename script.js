gsap.registerPlugin(ScrollTrigger);

// Headline animation
gsap.from(".headline", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out"
});

// Stats animation
gsap.from(".stat", {
  opacity: 0,
  y: 30,
  stagger: 0.3,
  delay: 0.5,
  ease: "power2.out"
});

// Image scroll animation
gsap.to(".image", {
  y: -200,
  scale: 1.2,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

if (typeof gsap !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".headline", {
    opacity: 0,
    y: 50,
    duration: 1
  });

  gsap.from(".stat", {
    opacity: 0,
    y: 30,
    stagger: 0.3,
    delay: 0.5
  });
}