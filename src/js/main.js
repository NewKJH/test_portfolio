// import { markesFunc } from "./makers";
import canvas01 from './three_motion01.js';
import canvas02 from './three_motion02.js';
import cursorFunc from './cursor.js'

document.addEventListener('DOMContentLoaded', () => {
    canvas01();
    canvas02();
    cursorFunc();
});

const sectionsEle = document.querySelectorAll('main .sections');

// section01 변수
const sec01 = document.querySelector('main .section01');
const sec01_spanAll = document.querySelectorAll('main .section01 .btTxt h1 span');

// section02 변수
const sec02 = document.querySelector('.section02');
const sec02_Area01 = document.querySelector('.section02 .introArea');
const sec02_span = document.querySelector('.section02 .introArea > span');
const sec02_text01 = document.querySelector('.section02 .introArea .introTxt');
const sec02_canvas_wrap = document.querySelector('.section02 .canvas-wrap')
const sec02_Area02 = document.querySelector('.section02 .careerArea');
const sec02_Area02_title = document.querySelector('.section02 .careerArea h2');
const sec02_lis = document.querySelectorAll('.section02 .careerArea li');

// section03 변수
const sec03 = document.querySelector('main .section03')
const sec03_title = document.querySelector('main .section03 .title')
const sec03_title_text = document.querySelector('main .section03 .title h1')
const sec03_short_text = document.querySelector('main .section03 .short_txt h6')

// section04 변수
const sec04 = document.querySelector('main .section04')
const sec04_container = document.querySelector('main .section04 .sec04_container')
const sec04_moveCont = document.querySelector('main .section04 .moveContainer')

// section05 변수
const sec05 = document.querySelector('main .section05')
const sec05_spans = document.querySelectorAll('main .section05 .leftArea span')
const sec05_text = document.querySelectorAll('main .section05 .leftArea p')
const sec05_right_divs = document.querySelectorAll('main .section05 .rightArea div')
const sec05_lines = document.querySelectorAll('main .section05 .lineArea span')

const createScrollTriggers = () => {
    const mm = gsap.matchMedia();
    /* 
    =========================================

                    pc

    =========================================
    */

    mm.add("(min-width:1025px)", () => { 

        // section01
        ScrollTrigger.create({
            trigger: sec01,
            start: "top center",
            end: "bottom center",
            animation: gsap.from(sec01_spanAll, {duration:0.8, y:'100%', rotationY:'360deg', opacity:0, stagger:{each:0.05, from:'random'}}),
            pin: false,
        })

        // section02
        const sec02_tl = gsap.timeline();
        sec02_tl
        .from(sec02_span, {scaleY: 0,}, '-=0.3')
        .from([sec02_text01, sec02_canvas_wrap], { opacity: 0, stagger:{each:0.2} })
        
        ScrollTrigger.create({
            trigger: sec02,
            animation: gsap.to(sectionsEle, {immediateRender:false, duration: 1, background: "black" }),
            toggleActions:'play reverse play reverse'
        
        })
        
        ScrollTrigger.create({
            trigger: sec02_Area01,
            start: "top center",
            end: "center center",
            animation: sec02_tl,
            pin:false,
            scrub: true,
        })

        const sec02_tl02 = gsap.timeline();
        sec02_tl02
        .from([sec02_Area02_title, sec02_lis], {opacity: 0, stagger: { each: 0.15 },})

        ScrollTrigger.create({
            trigger: sec02_Area02,
            start: "top center",
            end: "center center",
            animation: sec02_tl02,
            scrub:true,
        })

        // section03
        const title_tl = gsap.timeline({defaults:{ease:'none'}});
        title_tl
        .from(sec03_title_text, {x:innerWidth})
        .to(sec03_title_text, {delay:0.5, scale:30, xPercent:250,})
        .to(sec03_title_text, {duration:0.3, opacity:0,}, '-=0.3')

        ScrollTrigger.create({
            trigger: sec03_title,
            start: "top top",
            end: "+=125%",
            animation:title_tl,
            pin: true,
            pinSpacing:true,
            scrub:true,
        })

        gsap.utils.toArray('.port-section').forEach((item, idx) => {
            const w = item.querySelector('.wrapper')

            if (w) {
                const [x , xEnd] = idx % 2 ? ['100%' , -(w.scrollWidth - innerWidth)] : [-(w.scrollWidth ) , 0]
            
                gsap.fromTo(w,
                    { x },
                    {
                        x: xEnd,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top bottom',
                            scrub: 0.5,
                        }
                    }
                )
            }
        })

        ScrollTrigger.create({
            trigger: sec03_short_text,
            start: "top 80%",
            end: "top center",
            animation:gsap.from(sec03_short_text, {y:'100%', duration:1, opacity:0,}),
            scrub: true,
        })

        // section04
        const sec04_tl = gsap.timeline();
        sec04_tl
        .from(sec04_container, {delay:0.3, opacity:0})
        .to(sec04_moveCont, {x:'-50%'})
        .to(sec04_container, {delay:0.3,})
        
        ScrollTrigger.create({
            trigger: sec04,
            start: "top top",
            end: "+=150%",
            animation: sec04_tl,
            pin:true,
            scrub:true,
        })
        
        // section05
        const sec05_tl = gsap.timeline();
        sec05_tl
        .from([sec05_spans , sec05_text], {opacity:0, stagger:{each:0.15}})
        .from(sec05_right_divs, {opacity:0, y:'2vw' , stagger:{each:0.15}}, '-=0.3')
        .from(sec05_lines, {delay:0.2, duration:1.5, scale:0 ,}, 0)
        
        ScrollTrigger.create({
            trigger: sec05,
            start: 'top center',
            end: 'bottom center',
            animation: sec05_tl,
            toggleActions:'play reverse play reverse'
        })
    })

    /* 
    =========================================

                    tablt

    =========================================
    */

    mm.add("(min-width:769px) and (max-width:1024px)", () => {
        // section01
        ScrollTrigger.create({
            trigger: sec01,
            start: "top center",
            end: "bottom center",
            animation: gsap.from(sec01_spanAll, {duration:0.8, y:'100%', rotationY:'360deg', opacity:0, stagger:{each:0.05, from:'random'}}),
            pin: false,
        })
        
        // section02
        const sec02_tl = gsap.timeline();
        sec02_tl
        .from(sec02_span, {scaleY: 0,}, '-=0.3')
        .from([sec02_text01, sec02_canvas_wrap], { opacity: 0, stagger:{each:0.2} })
        
        ScrollTrigger.create({
            trigger: sec02,
            start: 'top center',
            end:'bottom center',
            animation: gsap.to(sectionsEle, {immediateRender:false, duration: 1, background: "black" }),
            toggleActions:'play reverse play reverse'
        
        })
        
        ScrollTrigger.create({
            trigger: sec02_Area01,
            start: "top center",
            end: "center center",
            animation: sec02_tl,
            pin:false,
            scrub: true,
        })

        const sec02_tl02 = gsap.timeline();
        sec02_tl02
        .from([sec02_Area02_title, sec02_lis], {opacity: 0, stagger: { each: 0.15 },})

        ScrollTrigger.create({
            trigger: sec02_Area02,
            start: "top center",
            end: "center center",
            animation: sec02_tl02,
            scrub:true,
        })

        // section03
        const title_tl = gsap.timeline({defaults:{ease:'none'}});
        title_tl
        .from(sec03_title_text, {x:innerWidth})
        .to(sec03_title_text, {delay:0.3,scale:30, xPercent:200,})
        .to(sec03_title_text, {duration:0.3, opacity:0,}, '-=0.3')

        ScrollTrigger.create({
            trigger: sec03_title,
            start: "top top",
            end: "+=100%",
            animation:title_tl,
            pin: true,
            pinSpacing:true,
            scrub:true,
        })

        gsap.utils.toArray('.port-section').forEach((item, idx) => {
            const w = item.querySelector('.wrapper')

            if (w) {
                const [x , xEnd] = idx % 2 ? ['100%' , -(w.scrollWidth - innerWidth)] : [-(w.scrollWidth ) , 0]
            
                gsap.fromTo(w,
                    { x },
                    {
                        x: xEnd,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top bottom',
                            scrub:0.5
                        }
                    }
                )
            }
        })

        ScrollTrigger.create({
            trigger: sec03_short_text,
            start: "top 80%",
            end: "top center",
            animation:gsap.from(sec03_short_text, {y:'100%', duration:1, opacity:0,}),
            scrub: true,
        })

        // section04
        const sec04_tl = gsap.timeline();
        sec04_tl
        .from(sec04_container, {delay:0.3, opacity:0})
        .to(sec04_moveCont, {x:'-50%'})
        .to(sec04_container, {delay:0.3,})
        
        ScrollTrigger.create({
            trigger: sec04,
            start: "top top",
            end: "+=150%",
            animation: sec04_tl,
            pin:true,
            scrub:true,
        })

        // section05
        const sec05_tl = gsap.timeline();
        sec05_tl
        .from([sec05_spans , sec05_text], {opacity:0, stagger:{each:0.15}})
        .from(sec05_right_divs, {opacity:0, y:'2vw' , stagger:{each:0.15}}, '-=0.3')
        .from(sec05_lines, {delay:0.2, duration:1.5, scale:0 ,}, 0)
        
        ScrollTrigger.create({
            trigger: sec05,
            start: 'top center',
            end: 'bottom center',
            animation: sec05_tl,
            toggleActions:'play reverse play reverse'
        })
    })
    /* 
    =========================================

                    mobile

    =========================================
    */
    mm.add("(max-width: 768px)", () => {
        // section01
        ScrollTrigger.create({
            trigger: sec01,
            start: "top center",
            end: "bottom center",
            animation: gsap.from(sec01_spanAll, {duration:0.8, y:'100%', rotationY:'360deg', opacity:0, stagger:{each:0.05, from:'random'}}),
            pin: false,
        })

        // section02
        const sec02_tl = gsap.timeline();
        sec02_tl
        .from(sec02_span, {scaleY: 0,}, '-=0.3')
        .from([sec02_text01, sec02_canvas_wrap], { opacity: 0, stagger:{each:0.2} })
        
        ScrollTrigger.create({
            trigger: sec02,
            start: 'top center',
            end: 'bottom center',
            animation: gsap.to(sectionsEle, {immediateRender:false, duration: 1, background: "black" }),
            toggleActions:'play reverse play reverse'
        })
        
        ScrollTrigger.create({
            trigger: sec02_Area01,
            start: "top center",
            end: "center center",
            animation: sec02_tl,
            pin:false,
            scrub: true,
        })

        const sec02_tl02 = gsap.timeline();
        sec02_tl02
        .from([sec02_Area02_title, sec02_lis], {opacity: 0, stagger: { each: 0.15 },})

        ScrollTrigger.create({
            trigger: sec02_Area02,
            start: "top center",
            end: "center center",
            animation: sec02_tl02,
            scrub:true,
        })

        // section03
        ScrollTrigger.create({
            trigger: sec03,
            start: "top center",
            end: "bottom center",
            animation:gsap.from(sec03_title, {opacity:0}),
            // scrub:true,
            toggleActions:'play reverse play reverse',
        })
        
        gsap.utils.toArray('.port-section').forEach((item) => {
            ScrollTrigger.create({
                trigger: item,
                start: 'top center',
                end:'bottom center',
                animation: gsap.from(item.querySelectorAll('li'), { opacity: 0, y: '2vw', stagger: { each: 0.2, } }),
                toggleActions:'play none play reverse',
            })

        })

        ScrollTrigger.create({
            trigger: sec03_short_text,
            start: "top 80%",
            end: "top center",
            animation:gsap.from(sec03_short_text, {y:'100%', duration:1, opacity:0,}),
            scrub: true,
        })


        // section04
        const sec04_tl = gsap.timeline();
        sec04_tl
        .from(sec04_container, {delay:0.3, opacity:0})
        .from(sec04_moveCont, {y:'2vw', opacity:0})
        
        ScrollTrigger.create({
            trigger: sec04,
            start: "top center",
            end: "bottom center",
            animation: sec04_tl,
            pin:false,
            scrub: false,
            toggleActions:'play none play reverse',
        })

        // section05
        const sec05_tl = gsap.timeline();
        sec05_tl
        .from([sec05_spans , sec05_text], {opacity:0, stagger:{each:0.15}})
        .from(sec05_right_divs, {opacity:0, y:'2vw' , stagger:{each:0.15}}, '-=0.3')
        .from(sec05_lines, {delay:0.2, duration:1.5, scale:0 ,}, 0)
        
        ScrollTrigger.create({
            trigger: sec05,
            start: 'top center',
            end: 'bottom center',
            animation: sec05_tl,
            toggleActions:'play reverse play reverse',
        })
    })

}

createScrollTriggers();