import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";

export class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;

    this.createScene();
    this.createCamera();
    this.createRenderer();
    this.createControls();

    window.addEventListener("resize", () => this.resizeWindow());
  }

  createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    
    const ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene.add(ambientLight);
    const gridHelper = new THREE.GridHelper(200, 20);
    this.scene.add(gridHelper);
    const axesHelper = new THREE.AxesHelper(100);
    this.scene.add(axesHelper);
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth /
                                              window.innerHeight, 0.1, 1000);
    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(0, 0, 0);
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  createControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.keys = {
      
    }
  }

  resizeWindow() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}