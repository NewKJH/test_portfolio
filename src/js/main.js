// import { markesFunc } from "./makers";
import canvas01 from './three_motion01.js';
import canvas02 from './three_motion02.js';

document.addEventListener('DOMContentLoaded', () => {
    canvas01();
    canvas02();
});

const sectionsEle = document.querySelectorAll('main .sections');
const sections = document.querySelectorAll('main section');

const sec01 = document.querySelector('main .section01')
const sec01_spanAll = document.querySelectorAll('main .section01 .btTxt h1 span');

ScrollTrigger.create({
    trigger: sec01,
    start: "top center",
    end: "bottom center",
    animation: gsap.from(sec01_spanAll, {duration:0.8, y:'100%', rotationY:'360deg', opacity:0, stagger:{each:0.05, from:'random'}}),
    pin: false,
})


const sec02 = document.querySelector('.section02');
const sec02_Area01 = document.querySelector('.section02 .introArea');
const sec02_Area02 = document.querySelector('.section02 .careerArea');
const sec02_span = document.querySelector('.section02 .introArea > span');
const sec02_text01 = document.querySelector('.section02 .introArea .introTxt');
const sec02_text02 = document.querySelector('.section02 .careerArea');

const sec02_tl = gsap.timeline();

sec02_tl
.from(sec02_span, {scaleY: 0,}, '-=0.3')
.from(sec02_text01, { opacity: 0, })


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
    markers:true,
})

ScrollTrigger.create({
    trigger: sec02_Area02,
    start: "top center",
    end: "bottom center",
    animation: gsap.from(sec02_text02, {opacity:0,}),
    pin:false,
    scrub:true,
})

// 포트폴리오
const sec03 = document.querySelector('main .section03')
const sec03_title = document.querySelector('main .section03 .title')
const sec03_title_text = document.querySelector('main .section03 .title h1')

const title_tl = gsap.timeline({defaults:{ease:'none'}});
title_tl
.from(sec03_title_text, {x:innerWidth})
.to(sec03_title_text, {delay:0.3,scale:30, xPercent:200,})
.to(sec03_title_text, {duration:0.3, opacity:0,}, '-=0.3')
// .to(sectionsEle, {immediateRender:false, background:'transparent',}, '-=0.3')

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
                    start:'top bottom',
                    scrub:0.5
                }
            }
        )
    }
})

const sec04 = document.querySelector('main .section04')
const sec04_container = document.querySelector('main .section04 .sec04_container')

const sec04_tl = gsap.timeline();
sec04_tl
.from(sec04_container, {delay:0.3, opacity:0})
.to(sec04_container, {x:-sec04_container.scrollWidth / 2,})
.to(sec04_container, {delay:0.3,})

ScrollTrigger.create({
    trigger: sec04,
    start: "top top",
    end: "+=150%",
    animation: sec04_tl,
    pin:true,
    scrub:true,
})

const sec05 = document.querySelector('main .section05')
const sec05_textAll = document.querySelectorAll('main .section05 .txtBox a')

ScrollTrigger.create({
    trigger: sec05,
    start: "top top",
    end: "+=50%",
    // end: "bottom center",
    animation: gsap.from(sec05_textAll, { opacity: 0, top:'50%', left:'50%', stagger:{from:'random'}}),
    pin:true,
    // scrub:true,
})
