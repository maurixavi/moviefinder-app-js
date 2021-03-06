const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

//const main = document.querySelector("main")

async function getMovies() {
    const response = await fetch(APIURL);
    const respData = await response.json();

    console.log(respData);

    //Get movie posters
    respData.results.forEach(movie => {
        const { poster_path, title, vote_average} = movie;
        /*const img = document.createElement('img');
        img.src = IMGPATH + movie.poster_path;
        document.body.appendChild(img);*/
        const movieElem = document.createElement('div');
        movieElem.classList.add("movie");
        movieElem.innerHTML = `
            <img 
                src="${IMGPATH + movie.poster_path}" 
                alt="${title}"
            />
            
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${vote_average}</span>
            </div>
            `;
        document.body.appendChild(movieElem);

    });

    return respData;
}

getMovies();