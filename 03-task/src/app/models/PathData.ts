import { Point } from "./Point";

export class PathData {
    data: Point[];

    constructor() {
        this.data = [];
    }

    addPoint(newPoint: Point) {
        this.data.push(newPoint);
    }
}