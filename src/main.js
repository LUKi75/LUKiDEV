import { Application } from "./Application.js";

function main() {
  const canvas = document.getElementById("gameCanvas");
  const app = new Application(canvas);
  app.start();
}

main();