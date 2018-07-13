let settingsBlock = document.querySelector('.path-controls');

let color$ = fromEvent(settingsBlock, 'input').pipe(
    map(event => event.target), 
    filter((target) => target.className === 'path-color')
);
let chbox$ = fromEvent(settingsBlock, 'input').pipe(
    map(event => event.target), 
    filter((target) => target.className === 'path-chbox')
);

color$.subscribe(
    (inputElement) => {
        pathArray[inputElement.parentNode.getAttribute('data-id')].changeColor(inputElement.value);
    },
    () => console.log("error"),
    () => console.log("completed")
);

chbox$.subscribe(
    (inputElement) => {
        if (inputElement.checked) {
            pathArray[inputElement.parentNode.getAttribute('data-id')].makeVisible();
        } else {
            pathArray[inputElement.parentNode.getAttribute('data-id')].hide();
        }
    },
    () => console.log("error"),
    () => console.log("completed")
);