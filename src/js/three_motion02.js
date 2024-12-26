import * as THREE from './three.module.js'

export default function canvas02() {
    const sec02_canvas = document.querySelector('.section02 .canvas-wrap #intro-cas');
    const renderer02 = new THREE.WebGLRenderer({ canvas: sec02_canvas, antialias: true, alpha: true  });

    renderer02.setSize(window.innerWidth > 769 ?  window.innerWidth / 2 : window.innerWidth , window.innerWidth > 769 ? window.innerHeight / 2 : window.innerHeight);
    renderer02.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

    const scene02 = new THREE.Scene();
    scene02.background = null;

    const camera02 = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight, 0.1, 1000
    );

    camera02.position.z = 5;
    scene02.add(camera02);

    const ambientLight02 = new THREE.AmbientLight('white', 1);
    const directionalLight02 = new THREE.DirectionalLight('white', 1);
    directionalLight02.position.set(1, 1, 2);

    scene02.add(ambientLight02, directionalLight02);
    
    const geometry = innerWidth > 768 ? new THREE.BoxGeometry( 3.5, 3.5, 3.5 ) : new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
    const wireframe = new THREE.WireframeGeometry( geometry );
    
    const line = new THREE.LineSegments( wireframe );
    line.material.depthTest = false;
    line.material.opacity = 1;
    line.material.transparent = true;
    
    scene02.add(line);
    
    ScrollTrigger.create({
        trigger: '.section02',
        start: 'top center',
        end: 'bottom center',
        onUpdate(self) {
            gsap.to(line.rotation , {x:self.progress * 10, y:self.progress * 5})
        },
        scrub: true,
    })

    const clock = new THREE.Clock();

    function draw() {
        const delta = clock.getDelta();

        renderer02.render(scene02, camera02);
        renderer02.setAnimationLoop(draw);
    }

    function setSize() {

        camera02.aspect = window.innerWidth / window.innerHeight;
        camera02.updateProjectionMatrix();
        renderer02.setSize(window.innerWidth > 769 ?  window.innerWidth / 2 : window.innerWidth , window.innerWidth > 769 ? window.innerHeight / 2 : window.innerHeight);

        renderer02.render(scene02, camera02);
    }

    window.addEventListener('resize', setSize);

    draw();
}