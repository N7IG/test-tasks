function randomList(pathList) {
    let k = 1.5;
    let s = 0;
    return pathList.map(() => {
        k /=1.5;
        s = Math.abs(s - 1);
        return Math.abs(( Math.random())*k);
    });
}

function getRandomColor() {
    return `hsl(${Math.random()*360}, 100%, 70%)`;
}

function getPathArray(pathQuantity) {
    let pathArray = [];
    for (let i = 0; i < pathQuantity; i++) {
        pathArray.push(new Path(chart.initializePath(getRandomColor(), 2), lineFunction));
    }

    return pathArray;
}