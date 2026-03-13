import { World } from "./engine/World.js";
import { RenderSystem } from "./systems/RenderSystem.js";
import { MovementSystem } from "./systems/MovementSystem.js";

export class Application {
  constructor(canvas) {
    this.world = new World();

    this.world.addSystem(new MovementSystem());
    this.world.addSystem(new RenderSystem(canvas));
  }

  start() {
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(time) {
    this.world.update();
    requestAnimationFrame(this.loop.bind(this));
  }
}