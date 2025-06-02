// Main function to search for movie information using the OMDB API
let Main = async () => {
    // Get the value from the input with id 'name', replacing spaces with '+'
    let name = (document.getElementById('name').value).replace(/ /g, '+');

    // Get the image element where the movie poster will be displayed
    let img = document.getElementById("img");

    // Construct the URL to fetch data from the OMDB API
    let url = `https://www.omdbapi.com/?apikey=de3c957&t=${name}`;

    // Fetch the movie data from the API
    let anwser = await fetch(url);
    
    // Parse the response to JSON
    let anwserJson = await anwser.json();

    // If the API response indicates the movie was not found
    if (anwserJson.Response == "False") {
        // Display an error message in the element with id 'console'
        document.getElementById("console").innerHTML = `Movie not found!`;
    } else {
        // If the movie is found, display the poster image
        img.style.display = "block";

        // Populate the form fields with the movie data
        document.getElementById("name").value = anwserJson.Title;
        document.getElementById("year").value = anwserJson.Released;
        document.getElementById("runTime").value = anwserJson.Runtime;
        document.getElementById("genre").value = anwserJson.Genre;
        document.getElementById("actor").value = anwserJson.Actors;
        document.getElementById("boxOffice").value = anwserJson.BoxOffice;

        // Set the 'src' attribute of the image element to show the movie poster
        document.getElementById("img").src = anwserJson.Poster;
    }
}
