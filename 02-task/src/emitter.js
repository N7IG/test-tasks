const { from, interval, of } = rxjs;
const { map, flatMap} = rxjs.operators;

let chart = new Chart(new Date, 800);

let pathDelay = 1000;

// let pathOne = new Path(chart.initializePath("#e600ff", 2), pathDelay);

chart.initializeAxes();
let lineFunction = chart.getLine();

function randomList(pathList) {
    let randomValues = [];
    let k = 1.5;
    let s = 0;
    return pathList.map(() => {
        k /=1.5;
        s = Math.abs(s - 1);
        return Math.abs(( Math.random())*k);
    });
}

let pathArray = [];
pathArray.push(new Path(chart.initializePath("orange", 2), pathDelay));
pathArray.push(new Path(chart.initializePath("#e600ff", 2), pathDelay));
pathArray.push(new Path(chart.initializePath("yellow", 2), pathDelay));


// let axis$ = interval(Math.max(300, pathDelay));

let paths$ = interval(pathDelay).pipe(map(() => randomList(pathArray)));

paths$.subscribe(
    (valueList) => {
        // console.log(valueList);       
        chart.updateXDomain();
        chart.updateTime();
        pathArray.forEach((path, index) => path.render(valueList[index], lineFunction));
        chart.renderXAxis();
    }, 
    () => console.log("error"),
    () => console.log("completed")
);

// let firstPath$ = interval(pathDelay).pipe(map(() => Math.random()));
// let secondPath$ = interval(pathDelay).pipe(map(() => 1 - Math.random()));

// firstPath$.subscribe(
//     (value) => {
//         console.log("CATCH");
//         console.log(chart.timeArray);
//         console.log(pathOne.data);
//         chart.updateXDomain();
//         chart.updateTime();
//         pathOne.render(value, lineFunction);       
        
        
//     }, 
//     () => console.log("error"),
//     () => console.log("completed")
// );

// secondPath$.subscribe(
//     (value) => {
//         // chart.updateXDomain();
//         // chart.updateTime();
//         pathTwo.render(value, lineFunction);       
//     }, 
//     () => console.log("error"),
//     () => console.log("completed")
// );

// axis$.subscribe(
//     () => chart.renderXAxis(),
//     () => console.log("error"),
//     () => console.log("completed")
// );


