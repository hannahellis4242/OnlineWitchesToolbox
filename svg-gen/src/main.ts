import { writeFile } from "fs/promises";
import { join } from "path";
import quadratic from "./Curve/quadratic";
import Point, { point } from "./Curve/Point";
import draw from "./Curve/draw";
import cubic from "./Curve/cubic";
//quadratic
{
  const points = [
    point(10, 50),
    point(20, 50),
    point(30, 50),
    point(40, 50),
    point(50, 50),
    point(60, 50),
  ];
  const gradient = point(5, 10);

  writeFile(
    join(__dirname, "..", "test.svg"),
    draw({
      width: 100,
      height: 100,
      stroke: "white",
      fill: "transparent",
      thickness: 1,
      generator: () => quadratic(points, gradient),
    })
  );
}
//cubic
{
  const points: [Point, Point][] = [
    [point(30, 50), point(0, -10)],
    [point(50, 30), point(10, 0)],
    [point(70, 50), point(0, 10)],
    [point(50, 70), point(-10, 0)],
    [point(30, 50), point(0, -10)],
  ];
  writeFile(
    join(__dirname, "..", "test2.svg"),
    draw({
      width: 100,
      height: 100,
      stroke: "white",
      fill: "transparent",
      thickness: 1,
      generator: () => cubic(points),
    })
  );
}
