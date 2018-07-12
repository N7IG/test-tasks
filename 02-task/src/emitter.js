const { from, interval } = rxjs;
const { map, flatMap} = rxjs.operators;

let svgHandler = new SvgHandler();

let pathOneDelay = 1000;

svgHandler.initializeAxes();
let pathOne = new Path(pathOneDelay);
// let pathOne = svgHandler.initializePath(pathOneDelay);

let axis$ = interval(Math.max(300, pathOneDelay)).pipe(map(() => Math.random()));
let data$ = interval(pathOneDelay).pipe(map(() => Math.random()));

data$.subscribe(
    (val) => svgHandler.renderPath(pathOne,val),
    () => console.log("error"),
    () => console.log("completed")
);

axis$.subscribe(
    () => svgHandler.renderXAxis(),
    () => console.log("error"),
    () => console.log("completed")
);


