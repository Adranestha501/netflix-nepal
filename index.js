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
    }
];

const topMovies = [
       {	
	"id":"6",
        "title": "Movie Title 1",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 1.",
        "trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"7",
        "title": "Movie Title 2",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 2.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"8",
        "title": "Movie Title 3",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 3.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"9",
        "title": "Movie Title 4",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 4.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"10",
        "title": "Movie Title 5",
        "image": "https://picsum.photos/200/200?random=1",
        "description": "Description of Movie Title 4.",
	"trailerLink": "https://youtu.be/xFU8U4UVUBs?si=nWmyMqMSU5m7NqIH"
    }
];
const newReleasesArea = document.querySelector('.new_releases_area');
let currentIndex = 0;

function renderMovies() {
  newReleases.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('new_release_card');
      card.innerHTML = `
	<a href="movie-detail.html?id=${movie.id}" onclick="setMovieData('${movie.id}')">
          <img src="${movie.image}" alt="${movie.title}">
          <h5>${movie.title}</h5>
          <p>${movie.description}</p>
	</a>
      `;
      newReleasesArea.appendChild(card);
  });
}

function moveSlide(direction) {
    const totalMovies = newReleases.length;
    const cardsToShow = 5; // Number of cards to show at once
    currentIndex += direction;

    // Loop around if we go out of bounds
    if (currentIndex < 0) {
        currentIndex = totalMovies - cardsToShow;
    } else if (currentIndex > totalMovies - cardsToShow) {
        currentIndex = 0;
    }

    // Calculate the offset for the slider
    const offset = -currentIndex * (20 + 2); // 20 is card width, 2 is margin
    newReleasesArea.style.transform = `translateX(${offset}rem)`;
}


const topMoviesArea = document.querySelector('.top_movies_area');
let currentTopIndex = 0;

function renderTopMovies() {
    topMovies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('top_movie_card');
        card.innerHTML = `
	<a href="movie-detail.html?id=${movie.id}" onclick="setMovieData('${movie.id}')">
            <img src="${movie.image}" alt="${movie.title}">
            <h5>${movie.title}</h5>
            <p>${movie.description}</p>
</a>
        `;
        topMoviesArea.appendChild(card);
    });
}

function moveTopSlide(direction) {
    const totalMovies = topMovies.length;
    const cardsToShow = 5; // Number of cards to show at once
    currentTopIndex += direction;

    // Loop around if we go out of bounds
    if (currentTopIndex < 0) {
        currentTopIndex = totalMovies - cardsToShow;
    } else if (currentTopIndex > totalMovies - cardsToShow) {
        currentIndex = 0;
    }

    // Calculate the offset for the slider
    const offset = -currentTopIndex * (20 + 2); // 20 is card width, 2 is margin
    topMoviesArea.style.transform = `translateX(${offset}rem)`;
}

renderMovies();
renderTopMovies();