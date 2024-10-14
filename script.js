
function movieSearch(){
    const movieInput = document.getElementById("inputBox").value;
    fetch(`https://www.omdbapi.com/?t=${movieInput}&apikey=c37526bb`)
        .then(response => response.json())
        .then(data => {
            const Title = data.Title;
            const year = data.Year;
            const released = data.Released; 
            const runtime = data.Runtime;
            const director = data.Director;
            const writer = data.Writer;
            const actors = data.Actors;
            const language = data.Language;
            const country = data.Country;
            const genre = data.Genre;
            const poster = data.Poster;
            
            const movieInfoDiv = document.getElementById("text");
            movieInfoDiv.innerHTML = `
                <h1>Title: ${Title}</h1>
                <p>Year: ${year}</p>
                <p>Release: ${released}</p>
                <p>Runtime: ${runtime}</p>
                <p>Director: ${director}</p>
                <p>Writer: ${writer}</p>
                <p>Actors: ${actors}</p>
                <p>Language: ${language}</p>
                <p>Country: ${country}</p>
                <p>Genre: ${genre}</p>
            `;
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movieImg");
            movieDiv.innerHTML=` <img src="${poster}">`
            text.appendChild( movieDiv);
            console.log(Araray[1].license.name)

        })
        .catch(error => {
            console.log("Error:", error);
        });
}