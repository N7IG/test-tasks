class MovieApi {

    constructor(apiKey) {
        this.API_KEY = apiKey;  
        this.requestBase = 'https://api.themoviedb.org/3';      
    }

    getObservableResponse(requestUrl) {
        var fetchPromise = fetch(requestUrl)
            .then(response => response.json());
        
        return from(fetchPromise);
    }
    
    getMovies(query) {
        return this.getObservableResponse(`${this.requestBase}/search/movie?api_key=${this.API_KEY}&query=${query}`);
    }
    
    getMovieDesc(mId) {
        return this.getObservableResponse(`${this.requestBase}/movie/${mId}?api_key=${this.API_KEY}`);
    }

    getMovieCredits(movies) {
        return movies.results.map(movie => `${this.requestBase}/movie/${movie.id}?api_key=${this.API_KEY}&append_to_response=credits`);
    }
}