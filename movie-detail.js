const newReleases = [
    {	
	"id":"1",
        "title": "Movie Title 1",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 1.",
        "trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"2",
        "title": "Movie Title 2",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 2.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"3",
        "title": "Movie Title 3",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 3.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"4",
        "title": "Movie Title 4",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 4.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"5",
        "title": "Movie Title 5",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 4.",
	      "trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
       {	
	"id":"6",
        "title": "Movie Title 6",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 1.",
        "trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"7",
        "title": "Movie Title 7",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 2.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"8",
        "title": "Movie Title 8",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 3.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"9",
        "title": "Movie Title 9",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 4.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"10",
        "title": "Movie Title 10",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 4.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    }
];


// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to display movie details
function displayMovieDetails() {
    const movieId = getUrlParameter('id');
    const movieData = newReleases.find(movie => movie.id === movieId);

    if (movieData) {
        const titleElement = document.getElementById('movie-title');
        const posterElement = document.getElementById('movie-poster');
        const descriptionElement = document.getElementById('movie-description');
        const trailerPlayer = document.getElementById('trailer-player');

        titleElement.textContent = movieData.title;
        posterElement.src = movieData.image;
        descriptionElement.textContent = movieData.description;

        const videoId = movieData.trailerLink.split('.be/')[1];
        trailerPlayer.src = `https://www.youtube.com/embed/${videoId}`;

        // Append the trailer link to the movie info
        //document.querySelector('.movie-info').appendChild(trailerLinkElement);
    } else {
        console.error("No movie data found for the given ID.");
    }
}

// Call the function to display movie details
displayMovieDetails();