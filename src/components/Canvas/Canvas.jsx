import { fabric } from "fabric";
import { useState, useEffect } from "react";
import { System } from "detect-collisions";

export const Canvas = () => {
  const system = new System();

  let initCanvas;

  useEffect(() => {
    initCanvas = new fabric.Canvas("canvas", {
      height: 1000,
      width: 1000,
      backgroundColor: "orange",
    });

    initCanvas.on("object:moving", (e) => {
      system.update(e.target);
    });
  }, []);

  {
    // 'object:moving': onChange,
    //'object:scaling': onChange,
    // 'object:rotating': onChange,
  }

  const addRect = (lienzo) => {
    const Rect = new fabric.Rect({
      height: 200,
      name: "Rect",
      width: 350,
      fill: "blue",
      stroke: "white",
    });
    lienzo.add(Rect);
    system.insert(Rect);
    lienzo.renderAll();
  };

  const addCuad = (lienzo) => {
    const Cuad = new fabric.Rect({
      name: "Cuad",
      height: 200,
      width: 200,
      fill: "green",
      stroke: "black",
    });
    lienzo.add(Cuad);
    system.insert(Cuad);
    lienzo.renderAll();
  };

  return (
    <>
      <h1>Test Collisions</h1>
      <button onClick={() => addRect(initCanvas)}>Rectángulo</button>
      <button onClick={() => addCuad(initCanvas)}>Cuadrado</button>
      <div>
        <br />
        <canvas id="canvas" />
      </div>
    </>
  );
};
