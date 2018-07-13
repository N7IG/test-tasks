const { from, fromEvent, interval, of } = rxjs;
const { map, flatMap, filter} = rxjs.operators;

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

let settingsBlock = document.querySelector('.path-controls');

let chart = new Chart(new Date, 600);
let pathDelay = 1000;
let renderDelay = 17;

chart.initializeAxes();
let lineFunction = chart.getLine();

let pathArray = [];
pathArray.push(new Path(chart.initializePath("orange", 2), lineFunction));
pathArray.push(new Path(chart.initializePath("#e600ff", 2), lineFunction));
pathArray.push(new Path(chart.initializePath("yellow", 2), lineFunction));

let color$ = fromEvent(settingsBlock, 'input').pipe(map(event => event.target), filter((target) => target.className === 'path-color'));

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

color$.subscribe(
    (inputElement) => {
        // console.log(inputElement.value);
        pathArray[inputElement.getAttribute('data-id')].changeColor(inputElement.value);
    },
    () => console.log("error"),
    () => console.log("completed")
);