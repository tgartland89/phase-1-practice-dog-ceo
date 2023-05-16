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
  
        for (let breed in breeds) {
          let breedOption = document.createElement("option");
          breedOption.value = breed;
          breedOption.textContent = breed;
          breedDropdown.appendChild(breedOption);
        }
      })
      .catch(error => {
        console.error("Error fetching dog breeds:", error);
      });
  });
  