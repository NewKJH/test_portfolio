import * as THREE from './three.module.js'

export default function canvas02() {
    const sec02_canvas = document.querySelector('.section02 .canvas-wrap #intro-cas');
    const renderer02 = new THREE.WebGLRenderer({ canvas: sec02_canvas, antialias: true, });

    renderer02.setSize(window.innerWidth / 2 , window.innerHeight / 2);
    renderer02.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

    // console.log(renderer02)
    // ScrollTrigger.create({
    //     trigger: '.section02',
    //     start: 'top center',
    //     end: 'bottom center',
    //     scrub: true,
    //     onUpdate() {
    //         renderer02.setSize(window.innerWidth , window.innerHeight);
    //     }
    // })

    const scene02 = new THREE.Scene();
    // scene02.background = new THREE.Color('white');

    const camera02 = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight, 0.1, 1000
    );

    camera02.position.z = 5;
    scene02.add(camera02);

    const ambientLight02 = new THREE.AmbientLight('white', 1);
    const directionalLight02 = new THREE.DirectionalLight('white', 1);
    directionalLight02.position.set(1, 1, 2);

    scene02.add(ambientLight02, directionalLight02);

    const vertices = [];

    for ( let i = 0; i < 10000; i ++ ) {
        const x = THREE.MathUtils.randFloatSpread( 1000 );
        const y = THREE.MathUtils.randFloatSpread( 1000 );
        const z = THREE.MathUtils.randFloatSpread( 1000 );
    
        vertices.push( x, y, z );
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
    const material = new THREE.PointsMaterial( { color: '#ffffff' } );
    const points = new THREE.Points(geometry, material);
    
    scene02.add( points );

    const clock = new THREE.Clock();

    function draw() {
        const delta = clock.getDelta();

        // gsap.to(sec02_mesh.rotation, {x:Math.PI * delta * 1000, y:Math.PI * delta * 1000, duration: 3, ease: "power1.inOut"})

        renderer02.render(scene02, camera02);
        renderer02.setAnimationLoop(draw);
    }

    function setSize() {
        camera02.aspect = window.innerWidth / window.innerHeight;
        camera02.updateProjectionMatrix();
        renderer02.setSize(window.innerWidth / 2, window.innerHeight / 2);
        renderer02.render(scene02, camera02);
    }

    window.addEventListener('resize', setSize);

    draw();
}