import * as THREE from "three";

/** Application class for managing the 3D scene */
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

    this.initCamera([100, 100, 100], [0, 0, 0]);

    this.cube1 = this.createCube([0, 0, 0], 100, 0xff0000);
    this.scene.add(this.cube1);
  }

  start() {
    this.renderer.setAnimationLoop(() => this.animate());
  }

  animate() {
    this.renderer.render(this.scene, this.camera);
  }

  initCamera(position, lookAt) {
    this.camera.position.set(...position);
    this.camera.lookAt(...lookAt);
  }

  createCube(position, size, color) {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(...position);
    return cube;
  }
}