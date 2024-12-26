import * as THREE from './three.module.js';
// import { OrbitControls } from './OrbitControls.js';

export default function canvas01() {
    const sec01_canvas = document.querySelector('#canvas01')
    const renderer = new THREE.WebGLRenderer({ canvas : sec01_canvas, antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    
    const scene = new THREE.Scene();
    scene.background = null;
    
    const camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    
    camera.position.z = 5;
    scene.add(camera);
    
    const ambientLight = new THREE.AmbientLight('white', 1);
    const directionalLight = new THREE.DirectionalLight('white', 1);
    directionalLight.position.set(1, 1, 2);

    scene.add(ambientLight, directionalLight);
    
    //// Controls
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    

    const Boxgeo02 = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
    const material02 = new THREE.MeshNormalMaterial(/* {color:'plum'} */);

    const mesh02 = new THREE.Mesh(Boxgeo02, material02);
    gsap.to(mesh02.rotation, {x:10000 , y:10000 , duration:10000, repeat:-1, yoyo:true, ease: "none"});


    scene.add(mesh02)

    // 그리기
    const clock = new THREE.Clock();
    
    function draw() {
        const delta = clock.getDelta();
    
        // controls.update();

        // gsap.to([mesh02.position, mesh02.rotation], {x: -Math.PI * delta * 1000, y: -Math.PI * delta * 1000, duration: 3, ease: "power1.inOut"});
        // gsap.to(mesh02.rotation, {x: -Math.PI * delta * 1000, y: -Math.PI * delta * 1500, duration: 2, repeat:-1, ease: "power1.inOut"});

        renderer.render(scene, camera);
        renderer.setAnimationLoop(draw);
        
    }
    
    function setSize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }
    
    window.addEventListener('resize', setSize);
    
    draw();

}
    