const { from, interval } = rxjs;
const { map, flatMap} = rxjs.operators;

let chart = new Chart(new Date, 800);

let pathOneDelay = 1000;

chart.initializeAxes();
let pathOne = new Path(chart.initializePath("orange", 2), pathOneDelay);
let lineFunction = chart.getLine();
// let pathOne = chart.initializePath(pathOneDelay);

let axis$ = interval(Math.max(300, pathOneDelay)).pipe(map(() => Math.random()));
let data$ = interval(pathOneDelay).pipe(map(() => Math.random()));

data$.subscribe(
    (value) => {
        
        chart.updateXDomain();
        chart.updateTime();
        pathOne.render(value, lineFunction);
        // console.log('mapsdi');
       
    }, 
    () => console.log("error"),
    () => console.log("completed")
);

axis$.subscribe(
    () => chart.renderXAxis(),
    () => console.log("error"),
    () => console.log("completed")
);


