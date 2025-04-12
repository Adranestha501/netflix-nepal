const newReleases = [
    {	
	"id":"1",
        "title": "The Secrets of Radha",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/1.png",
        "description": "Radha, a young pregnant woman from a village in Nepal, embarks on a journey to find her missing husband, a migrant worker in Doha, and discovers a web of lies, deceit and fraud.",
        "trailerLink": "https://youtu.be/jI9QBXl4p_U?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"2",
        "title": "Pujar Sarki",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/2.png",
        "description": "Three individuals unite against societal norms perpetuating caste discrimination, facing challenges in their collective struggle to defy the existing caste-based social order.",
	"trailerLink": "https://youtu.be/0JlBb1KuzNE?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"3",
        "title": "Harry Ki Pyari",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/3.png",
        "description": "Harry and his 'Pyaari' Jenny, are chasing similar goals in life, but the extent to which they both go about to achieve this is unimaginable.",
	"trailerLink": "https://youtu.be/LUEjJuMKATM?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"4",
        "title": "Ganapati",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/4.png",
        "description": "The people of a village think a newborn baby is an incarnation of Ganesh until he is diagnosed as having a birth defect, which impacts the life of the baby as he grows into a man.",
	"trailerLink": "https://youtu.be/jcwZt0mJlLY?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"5",
        "title": "Paaso",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/5.png",
        "description": "Paaso is a thriller movie starring Rista Basnet, who is kidnapped and imprisoned in a box by unknown kidnappers. The narrative revolves around two female best friends who are abducted and forced to satisfy the sexual desires of affluent businessmen",
	"trailerLink": "https://youtu.be/AYsdkwL3Bho?si=nWmyMqMSU5m7NqIH"
    }
];

const topMovies = [
       {	
	"id":"6",
        "title": "Prakash",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/6.png",
        "description": "An educated young boy from remote Nepal who dreams of becoming a teacher in a government school, the story of his struggle to fulfill his dream amidst economic hardships.",
        "trailerLink": "https://youtu.be/GCaqNxKXwNw?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"7",
        "title": "Aincho Paincho",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/7.png",
        "description": "Dilendra (Mukun Bhusal) positions in his political career in order to play the game with excellent ideals and ethics. His party, however, does not see him as a viable contender for the next election, despite the fact that his beliefs are highly valued by locals.",
	"trailerLink": "https://youtu.be/_N3dIaiXOsU?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"8",
        "title": "Ek Bhagavad Ra Ek Geeta",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/8.png",
        "description": "This film delves into the realm of standing up for what’s right, even in the face of adversity. With a unique twist that sees Bipin Karki embodying the role of Kamalamai Avatar, the movie presents a dynamic portrayal of a third-gender character, adding layers of depth to the narrative.",
	"trailerLink": "https://youtu.be/BuVx0fqMQWg?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"9",
        "title": "Lakhey",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/9.jpg",
        "description": "Sameer Maharjan, born in a family Lakhey, is a bank manager. He regards Lakhey as Lord Indra and the protector of the community. His professional and family life is ruined as he gets trapped in the bank fraud case. Then he devises an increasingly perilous series of revenge tactics.",
	"trailerLink": "https://youtu.be/xyyKHCbD1jo?si=nWmyMqMSU5m7NqIH"
    },
    {
	"id":"10",
        "title": "Chiso Manchhe",
        "image": "https://netflix-nepal-bucket.s3.us-east-1.amazonaws.com/img/10.jpg",
        "description": "When a Nepalese worker dies in Qatar, his wife Puspa (Swastima Khadka) and father (Desh Bhakta Khanal) travel to Kathmandu to retrieve his body. They meet a driver, Ram (Arpan Thapa) who offers to take them back to their hometown. The plot revolves around Puspa, who has spent her entire life in rural Nepal. Her journey from the city back home is the subject of the narrative.",
	"trailerLink": "https://youtu.be/ZqUVi_ZEIvU?si=nWmyMqMSU5m7NqIH"
    }
];
const newReleasesArea = document.querySelector('.new_releases_area');
let currentIndex = 0;

function renderMovies() {
  newReleases.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('new_release_card');
      card.innerHTML = `
	<a href="movie-detail.html?id=${movie.id}" onclick="setMovieData('${movie.id}')" style="text-decoration:none">
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
	<a href="movie-detail.html?id=${movie.id}" onclick="setMovieData('${movie.id}')" style="text-decoration:none">
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
