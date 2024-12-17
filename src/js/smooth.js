export function smoothFunc() {
    gsap.registerPlugin(ScrollTrigger);
    const container = document.querySelector('#container');

    let options = {
        damping: 0.03,
        alwaysShowTracks: true,
    }

    if (window.innerWidth <= 768) {
        options.damping = 0.01;
    }

    const scrollbar = Scrollbar.init(container, {
        ...options
    });

    ScrollTrigger.scrollerProxy(container, {
        scrollTop(value) {
            if (arguments.length) {
                scrollbar.scrollTop = value; // setter
            }

            return scrollbar.scrollTop; // getter
        },
    });

}