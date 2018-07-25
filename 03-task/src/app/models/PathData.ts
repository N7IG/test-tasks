import { Point } from "./Point";

export class PathData {
    data: Point[];
    color: string;
    isVisible: boolean;

    constructor(iColor?: string ) {
        this.data = [];
        this.isVisible = true;
        if(!iColor) {
            this.color = this.randomColor();
        } else {
        this.color = iColor;
        }
    }

    addPoint(newPoint: Point) {
        this.data.push(newPoint);
    }

    randomColor() {
        //from orange to light blue 
        return `hsl(${Math.random()*170 + 30}, 100%, 50%)`; 
    }

    changeColor(iColor: string) {
        this.color = iColor;
    }
}