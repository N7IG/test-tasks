import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Config } from "./models/Config";

@Injectable({
    providedIn: "root"
})
export class ConfigService {
    private config$: Observable<Config[]>;

    constructor() {}

    getRandomConfig(pathNumber: number): Observable<Config[]> {
        
        let newConfig: Config[] = [];
        for (let i=0; i<pathNumber; i++){
            newConfig.push({
                color: this.randomColor(), 
                isVisible: true
            });
        }
        this.config$ =  of(newConfig);
        return this.config$;
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
