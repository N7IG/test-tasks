// import { Point } from "./Point";

export class PathData {
    data: {value: number, time: Date}[];
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

    addPoint(newPoint: {value: number, time: Date}) {
        this.data = [...this.data, newPoint];
        // push(newPoint);
    }

    randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}