document.addEventListener("DOMContentLoaded", () => {
  let imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  let breedUrl = "https://dog.ceo/api/breeds/list/all";

  let dogImageContainer = document.getElementById("dog-image-container");
  let breedDropdown = document.getElementById("breed-dropdown");
  let dogBreedsList = document.getElementById("dog-breeds");

  // Fetch dog images
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      let images = data.message;

      images.forEach(imageUrl => {
        let imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        dogImageContainer.appendChild(imgElement);
      });
    })
    .catch(error => {
      console.error("Error fetching dog images:", error);
    });

  // Fetch dog breeds
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      let breeds = data.message;
      let filteredBreeds = Object.keys(breeds);

      breedDropdown.addEventListener("change", () => {
        let selectedLetter = breedDropdown.value;
        filteredBreeds = Object.keys(breeds).filter(breed => breed.startsWith(selectedLetter));
        updateBreedList(filteredBreeds);
      });

      updateBreedList(filteredBreeds);
    })
    .catch(error => {
      console.error("Error fetching dog breeds:", error);
    });

  function updateBreedList(breeds) {
    dogBreedsList.innerHTML = "";
    breeds.forEach(breed => {
      let breedItem = document.createElement("li");
      breedItem.textContent = breed;
      breedItem.addEventListener("click", () => {
        breedItem.style.color = "red"; // Change the font color to red
      });
      dogBreedsList.appendChild(breedItem);
    });
  }
});
