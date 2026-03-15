import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { SceneManager } from "./core/SceneManager.js";

export class Application {
  constructor(canvas) {
    this.canvas = canvas;
    this.sceneManager = new SceneManager(this.canvas);

    this.scene = this.sceneManager.scene;
    this.camera = this.sceneManager.camera;
    this.renderer = this.sceneManager.renderer;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 10, 0);
    this.controls.update();

    window.addEventListener("resize", () => this.sceneManager.resizeWindow());
  }

  start() {
    this.renderer.setAnimationLoop(() => this.animate());
  }

  reset() {
    this.sceneManager.resizeWindow();
  }

  animate() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}