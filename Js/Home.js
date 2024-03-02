// const playlists = [
//     { image: "Images\\img1.jpg", title: "Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { image: "Images\\img2.jpg", title: "Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { image: "Images\\img3.jpg", title: "Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { image: "Images\\img4.jpg", title: "Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { image: "Images\\img5.jpg", title: "Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { image: "Images\\img6.jpg", title: "Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { image: "Images\\img7.jpg", title: "Title 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { image: "Images\\img8.jpg", title: "Title 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
// ];
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

function handleCard(playlist){
    const {image,title,description}=playlist

    const title1 = document.getElementById('showAllButton')
    title1.style.display = "none"
    customTitle.style.display="none"
    const container = document.getElementById('playlist-row');
    container.innerHTML=`
    <div class="song-container">
    <div class="song-image-continer">
      <img src=${image} alt="" class="">
    </div>
    <div class="song-description-container">
      <h3>${title}</h3>
      <p>${description}</p>
      <div class="song-play-btnsContainer">
      <i class="fa-solid fa-arrow-left-long"></i>
      <i class="fa-solid fa-play"></i>
      <i class="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
  </div>
    `
    console.log(playlist)
}

function handleBollywood() {
    const title = document.getElementById('showAllButton')
    title.style.display = "none"
    customTitle.style.display="block"
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
        card.addEventListener('click',()=>{
            handleCard(playlist)
        })
    });
}
function handleHollywood() {
    const title = document.getElementById('showAllButton')
    title.style.display = "none"
    customTitle.style.display="block"
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
    customTitle.style.display="block"
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


// search feature
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

    customTitle.style.display="block"
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
    // const homeLink=document.getElementById("homeLink")

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
                const container = document.getElementById('playlist-row');
                container.innerHTML="please enter proper input"
            }
            else {
                performSearch(query)
            }
        }
    });
});

// home link feature
homeLink.addEventListener('click',()=>{
    document.getElementById('showAllButton').style.display="block"
    customTitle.style.display="none"
})

// song feature

