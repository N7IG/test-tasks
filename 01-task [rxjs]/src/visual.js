let infoTitle = document.querySelector('.info-title');
let infoBox = document.querySelector('.info-box');
let average = document.querySelector('.average');
let poster = document.querySelector('.mov-poster');
let description = document.querySelector('.mov-description');

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); 
    template.innerHTML = html;

    return template.content.firstChild;
}

function displayElement(movieJSON){
    
    let movie = constructElement(movieJSON.title, 'http://image.tmdb.org/t/p/w185' + movieJSON.backdrop_path, movieJSON.credits.cast.slice(0, 3), movieJSON.id);
    moviesListElement.appendChild(movie);
    let hr = document.createElement("hr");
    moviesListElement.appendChild(hr);

    if (movie === moviesListElement.firstChild) {
        movie.querySelector('h2').click();
    }
}

function updateDetails(resp) {
    infoBox.style.display = "block";
    infoTitle.innerHTML = resp.title;
    average.innerHTML = resp.vote_average;
    poster.src = `http://image.tmdb.org/t/p/w500/${resp.backdrop_path}`
    description.innerHTML = resp.overview;
}

function clearMoviesList(){
    moviesListElement.innerHTML = "";
}

function constructElement(title, imgURL, castArray, movId){
  
    let castListElm = document.createElement("ul");
    castArray.forEach(actor => {
        castListElm.innerHTML += `<li>${actor.name}</li>`;
    });

    let movieElementHTML = 
    `<li data-id="${movId}">
        <h2 class="mov-title">${title}</h2>
        <div>
            <img src="${imgURL}" class="thumbnail">
        </div>
        <div>
            <hx>Cast:</hx>
            <ul>${castListElm.innerHTML}</ul>
        </div>
    </li>`

    return htmlToElement(movieElementHTML);
}