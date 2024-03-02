const bollywoodSongs = [
    { image: "Images/bolly/1.jpg", title: "Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/bolly/2.jpg", title: "Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/bolly/3.jpg", title: "Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/bolly/4.jpg", title: "Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/bolly/5.jpg", title: "Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/bolly/6.jpg", title: "Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/bolly/7.jpg", title: "Title 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/bolly/8.jpg", title: "Title 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];
const hollywoodSongs = [
    { image: "Images/holly/1.jpg", title: "Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/holly/2.jpg", title: "Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/holly/3.jpg", title: "Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/holly/4.jpg", title: "Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/holly/5.jpg", title: "Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/holly/6.jpg", title: "Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/holly/7.jpg", title: "Title 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/holly/8.jpg", title: "Title 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];
const podcasts = [
    { image: "Images/podcast/1.jpg", title: "Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/podcast/2.jpg", title: "Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/podcast/3.jpg", title: "Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/podcast/4.jpg", title: "Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/podcast/5.jpg", title: "Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { image: "Images/podcast/6.jpg", title: "Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

// function to create card
function createCard(playlist) {
    const { image, title, description } = playlist
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

const customTitle = document.createElement('h5');
function handleBollywood() {
    const title = document.getElementById('showAllButton')
    title.style.display = "none"
    customTitle.textContent = "Bollywood Songs";
    customTitle.style.fontSize = "1.5rem";
    customTitle.style.color = "white";
    customTitle.style.marginBottom = "20px";
    customTitle.style.marginTop = "20px";
    customTitle.style.fontWeight = "700";
    const container = document.getElementById('playlist-row');
    container.insertAdjacentElement('beforebegin', customTitle);
    container.innerHTML = '';
    container.style.maxHeight = '43vh';
    container.style.overflowY = 'auto';
    container.style.scrollbarWidth = '.7';
    container.style.scrollbarColor = 'rgb(255, 58, 153) var(--color-secondary)';
    bollywoodSongs.forEach(playlist => {
        const card = createCard(playlist);
        container.appendChild(card);
    });
}
function handleHollywood() {
    const title = document.getElementById('showAllButton')
    title.style.display = "none"

    customTitle.textContent = "Hollywood Songs";
    customTitle.style.fontSize = "1.5rem";
    customTitle.style.color = "white";
    customTitle.style.marginBottom = "20px";
    customTitle.style.marginTop = "20px";
    customTitle.style.fontWeight = "700";
    const container = document.getElementById('playlist-row');
    container.insertAdjacentElement('beforebegin', customTitle);
    container.innerHTML = '';
    container.style.maxHeight = '43vh';
    container.style.overflowY = 'auto';
    container.style.scrollbarWidth = '.7';
    container.style.scrollbarColor = 'rgb(255, 58, 153) var(--color-secondary)';
    hollywoodSongs.forEach(playlist => {
        const card = createCard(playlist);
        container.appendChild(card);
    });
}
function handlePodcaste() {
    const title = document.getElementById('showAllButton')
    title.style.display = "none"

    customTitle.textContent = "Podcasts";
    customTitle.style.fontSize = "1.5rem";
    customTitle.style.color = "white";
    customTitle.style.marginBottom = "20px";
    customTitle.style.marginTop = "20px";
    customTitle.style.fontWeight = "700";
    const container = document.getElementById('playlist-row');
    container.insertAdjacentElement('beforebegin', customTitle);
    container.innerHTML = '';
    container.style.maxHeight = '43vh';
    container.style.overflowY = 'auto';
    container.style.scrollbarWidth = '.7';
    container.style.scrollbarColor = 'rgb(255, 58, 153) var(--color-secondary)';
    podcasts.forEach(playlist => {
        const card = createCard(playlist);
        container.appendChild(card);
    });
}


const bollyBtn = document.querySelector('#bollyBtn')
const hollyBtn = document.querySelector('#hollyBtn')
const podcastBtn = document.querySelector('#podcastBtn')
bollyBtn.addEventListener('click', handleBollywood)
hollyBtn.addEventListener('click', handleHollywood)
podcastBtn.addEventListener('click', handlePodcaste)


function performSearch(query) {
    query = query.trim().toLowerCase();

    const mixedContent = [...bollywoodSongs, ...hollywoodSongs, ...podcasts]


    const searchResults = [];
    mixedContent.forEach((song) => {
        if (song.title.toLocaleLowerCase().includes(query)) {
            searchResults.push(song);
        }
    })

    displaySearchResults(searchResults)
}

function displaySearchResults(results) {
    const title = document.getElementById('showAllButton')
    title.style.display = "none"
    customTitle.innerText = ""
    customTitle.textContent = "Searched results";
    customTitle.style.fontSize = "1.5rem";
    customTitle.style.color = "white";
    customTitle.style.marginBottom = "20px";
    customTitle.style.marginTop = "20px";
    customTitle.style.fontWeight = "700";
    const container = document.getElementById('playlist-row');
    container.insertAdjacentElement('beforebegin', customTitle);
    container.innerHTML = '';
    if (results.length > 0) {
        container.textContent = '';
        container.style.maxHeight = '43vh';
        container.style.overflowY = 'auto';
        container.style.scrollbarWidth = '.7';
        container.style.scrollbarColor = 'rgb(255, 58, 153) var(--color-secondary)';

        results.forEach(item => {
            const card = createCard(item);
            container.appendChild(card);
        });
    }
    else{
        container.textContent="no results found"
        container.style.margin='auto'
    }

    console.log(results);
}

document.addEventListener("DOMContentLoaded", function () {
    const searchLink = document.getElementById("searchLink");
    const searchInput = document.getElementById("search-input");

    searchLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        searchInput.style.border = "2px solid hotpink"
        searchInput.focus(); // Focus on the search input field
    });

    searchInput.addEventListener('input', function () {
        const query = searchInput.value;
        performSearch(query);
    });

    searchInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            const query = searchInput.value;
            if (query === "") {

                alert("please enter input first")
            }
            else {
                performSearch(query)
            }
        }
    });
});
