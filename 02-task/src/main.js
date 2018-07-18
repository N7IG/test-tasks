const { from, fromEvent, interval, of } = rxjs;
const { map, flatMap, filter} = rxjs.operators;

const chart = new Chart();
let pathDelay = 1000;
let renderDelay = 17;

let lineFunction = chart.getLine();

let pathArray = getPathArray(3);

let axis$ = interval(renderDelay);
let paths$ = interval(pathDelay).pipe(map(() => randomList(pathArray)));

paths$.subscribe(
    (valueList) => {
        chart.updateTime();
        pathArray.forEach((path, index) => path.updateData(valueList[index]));
    }, 
    () => console.log("error"),
    () => console.log("completed")
);

axis$.subscribe(
    () => {
        chart.updateXAxis();
        pathArray.forEach((path) => path.render());
    },
    () => console.log("error"),
    () => console.log("completed")
);
