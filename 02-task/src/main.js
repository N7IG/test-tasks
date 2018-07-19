const { from, fromEvent, interval, of } = rxjs;
const { map, flatMap, filter} = rxjs.operators;

// let renderDelay = 17;

let pathDelay = 1000;

const chart = new Chart('#svg-container');
let lineFunction = chart.getLineFunction();

let pathArray = getPathArray(3, '.path-controls');

// let axis$ = interval(renderDelay);
let data$ = interval(pathDelay)
    .pipe(map(() => getNewRandomData(pathArray)));
let resize$ = fromEvent(window, 'resize');

data$.subscribe(
    (valueList) => {
        // chart.updateTime(new Date());
        chart.updateTimeAxis(new Date());
        pathArray.forEach((path, index) => path.addData(valueList[index]));
        
        pathArray.forEach((path) => path.render());
    }, 
    () => console.log("error"),
    () => console.log("completed")
);

resize$.subscribe(
    () => {
        console.log('res');
        pathArray.forEach((path) => path.render());
        chart.updateTimeAxis();
    }, 
    () => console.log("error"),
    () => console.log("completed")
);

// axis$.subscribe(
//     () => {
//         chart.updateXAxis();
//         pathArray.forEach((path) => path.render());
//     },
//     () => console.log("error"),
//     () => console.log("completed")
// );
