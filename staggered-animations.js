// "staggered-animation.js"-part
const staggeredAnimObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log('Staggered_Animation Element ✨')
        if (entry.isIntersecting) {
            entry.target.classList.add('show-staggered-anim');
        };
    });
});

const hiddenStaggeredElements = document.querySelectorAll('.staggered-anim-hidden');
hiddenStaggeredElements.forEach((el) => staggeredAnimObserver.observe(el));