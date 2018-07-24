export class Point {
    private _value: number;
    private _time: Date;

    constructor(value: number, time: Date) {
        this._value = value;
        this._time = time;
    }

    get time(): Date {
        return this._time;
    }

    get value(): number {
        return this._value;
    }

}