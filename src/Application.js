import * as THREE from "three";

export class Application {
  constructor(canvas) {
    this.canvas = canvas;

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.initCamera();

    this.cube = createCube();
    this.scene.add(this.cube);
  }

  start() {
    this.renderer.setAnimationLoop((time) => this.animate(time));
  }

  animate(time) {
    this.renderer.render(this.scene, this.camera);
  }

  initCamera() {
    this.camera.position.set();
  }

  createCube() {
    this.geometry = new THREE.BoxGeometry(100, 100, 100);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    return this.cube;
  }
}