import React from "react";
import { Application } from "./runtime";

useEffect(() => {
  const { current } = canvasRef;
  if (current.width) {
    // const app = new speRuntimeFactory();
    // app.start(scene, current);
    new Application().start(scene);
  }
}, [canvasRef]);

export default function index() {
  return (
    <div>
      <canvas ref={canvasRef} id="canvas3d"></canvas>
    </div>
  );
}
