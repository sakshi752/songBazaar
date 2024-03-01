const playlists = [
    { image: "Images\\img1.jpg", title: "Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images\\img2.jpg", title: "Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images\\img3.jpg", title: "Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images\\img4.jpg", title: "Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images\\img5.jpg", title: "Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images\\img6.jpg", title: "Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images\\img7.jpg", title: "Title 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images\\img8.jpg", title: "Title 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

// Function to create a card element
function createCard(playlist) {
    const {image,title,description}=playlist
    const card = document.createElement('div');
    card.classList.add('col-lg-3');
    card.classList.add('col-md-6');
    card.classList.add('col-sm-6');

    card.innerHTML = `
      <div class="card">
        <img src="${image}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
    `;

    return card;
}

// Function to append cards to the container
function appendCards() {
    const container = document.getElementById('playlist-row');
    container.style.maxHeight = '43vh';
    playlists.slice(0, 4).forEach(playlist => {
        const card = createCard(playlist);
        container.appendChild(card);
    });
}

// Function to show all cards
function showAllCards() {
    const container = document.getElementById('playlist-row');
    container.innerHTML = '';
    container.style.maxHeight = '43vh';
    container.style.overflowY = 'auto';
    container.style.scrollbarWidth = '.7';
    container.style.scrollbarColor = 'rgb(255, 58, 153) var(--color-secondary)';
    playlists.forEach(playlist => {
        const card = createCard(playlist);
        container.appendChild(card);
    });
}


window.onload = appendCards;

document.getElementById('showAllButton').addEventListener('click', showAllCards);
