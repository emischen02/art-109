// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

let scene, camera, renderer, cube;
//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

function init() {
    // ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(1,1,5);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.CapsuleGeometry( 1, 1, 1, 4 ); 
    //const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
    
    const texture = new THREE.TextureLoader().load('textures/grasslight-big.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh( geometry, material ); 
    scene.add( cube );

    const torusKnotGeometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const torusKnotTexture = new THREE.TextureLoader().load('textures/grasslight-big.jpg');
    const torusKnotMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    torusKnot.position.set(3, 0, 0); 
    scene.add(torusKnot); 

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader(); // to load 3d models

loader.load('tutorials\three-00-starter\three-00-starter\assets\candle_model.gltf', function (gltf){
    const candle = gltf.scene;
    scene.add(candle);
    candle.scale.set(2,2,2);
})


// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


