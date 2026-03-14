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

    this.geometry = new THREE.BoxGeometry(100, 100, 100);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);

    this.camera.position.x = 0;
    this.camera.position.y = 50;
    this.camera.position.z = 100;
    this.camera.lookAt(0, 0, 0);
  }

  start() {
    this.renderer.setAnimationLoop((time) => this.animate(time));
  }

  animate(time) {
    this.renderer.render(this.scene, this.camera);
  }
}