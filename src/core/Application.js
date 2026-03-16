import { SceneManager } from "./SceneManager.js";

export class Application {
  constructor(canvas) {
    this.canvas = canvas;
    this.sceneManager = new SceneManager(this.canvas);

    this.scene = this.sceneManager.scene;
    this.camera = this.sceneManager.camera;
    this.renderer = this.sceneManager.renderer;
    this.controls = this.sceneManager.controls;
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