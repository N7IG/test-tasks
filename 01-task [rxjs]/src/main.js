const { fromEvent, from } = rxjs;
const { map, flatMap, filter, debounce, debounceTime, auditTime, tap } = rxjs.operators;

const searchButton = document.querySelector('.query-submit');
const searchInput = document.querySelector('.query-input');
const moviesListElement = document.querySelector('.result-list');
const movieApi = new MovieApi(insert_your_private_key); //NEED YOUR OWN PRIVATE KEY

let movieName$ = fromEvent(searchInput, 'input').pipe(
    auditTime(350),
    filter(() => searchInput.value !== "")
);

let movies$ = movieName$.pipe(
    tap(clearMoviesList),
    flatMap(() => movieApi.getMovies(searchInput.value)),
    flatMap(movie => movieApi.getMovieCredits(movie)),
    flatMap(url => movieApi.getObservableResponse(url))
);

movies$.subscribe(
    
    movJSON => displayElement(movJSON),
    () => console.log('error'),
    () => console.log('completed')
);

function getMovieDataId(target){
    return target.parentNode.getAttribute('data-id');
}

function isTitle(target) {
    return target.tagName === 'H2';
}

const selectedMovieId$ = fromEvent(moviesListElement, 'click').pipe(
    map(event => event.target),
    filter(isTitle),
    map(getMovieDataId)
);

let selectedMovieDesc$ = selectedMovieId$.pipe(
    flatMap(id => movieApi.getMovieDesc(id))
);

selectedMovieDesc$.subscribe(descJSON => updateDetails(descJSON));