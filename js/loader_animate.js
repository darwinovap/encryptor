
/* gsap.from("#logo-alura", 0.5, {
    left: "-100%",
    ease: "power3.inOut",
    stagger: 1,
}); */

gsap.from(".prompt", 0.5, {
    left: "-100%",
    ease: "power3.inOut",
    stagger: 1,
});

gsap.from('.title',1,{
    opacity:0,
    y:-100,
    ease: 'bounce'
});

gsap.to('.title',1,{
    opacity:1,
    y:0,
    ease: 'bounce'
});

gsap.from('.encryptor-text',1,{
    opacity:0,
    x:-100,
    ease: "back.out(1.7)"
});

gsap.to('.encryptor-text',1,{
    opacity:1,
    y:0,
    ease: 'bounce'
});

gsap.from('.buttons',1,{
    opacity:0,
    y: 100,
    ease: 'sine'
});

gsap.from('.output',1,{
    opacity:0,
    x:100,
    ease: "back.out(1.7)"
});

gsap.from('.advice',1,{
    opacity:0,
    x:-100,
    ease: "back.out(1.7)"
});

gsap.to('.advice',1,{
    opacity:1,
    y:0,
    ease: 'bounce'
});