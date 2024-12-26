export default function cursorFunc() {
    // 마우스커서 이벤트
    let cursor = document.querySelector('#cursor');
    let cursor_text = document.querySelector('#cursor p');

    let xTo = gsap.quickTo(cursor, "x", {duration: 0.4, ease: "power3"}),
        yTo = gsap.quickTo(cursor, "y", {duration: 0.4, ease: "power3"});

    window.addEventListener('mousemove', ({ clientX: x, clientY: y }) => {
        xTo(x - (cursor.offsetWidth * 0.5));
        yTo(y - (cursor.offsetHeight * 0.5));
    });

    document.body.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'A') {
            gsap.to(cursor, { scale:2,  duration: 0.3 });
            gsap.to(cursor_text, {opacity:1,});
        }
    });

    document.body.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'A') {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(cursor_text, {opacity:0,});
        }
    });
}