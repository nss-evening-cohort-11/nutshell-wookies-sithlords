const buildSpeciesExcursionCards = (species) => {
  let domString = '';
  domString += `
  <div class="card speciesCard text-center mb-5" id="${species.id}">
  <img src="${species.imageUrl}" alt="..." class="card-img-top"/>
  <h5 class="card-title">${species.type}</h5>
  <p class="card-text">${species.description}</p>
  <p class="card-text">Color: ${species.color}</p>
  <p class="card-text">Depth: ${species.depth}</p>
  <p class="card-text">Location: ${species.location}</p>
  </div>`;
  return domString;
};

export default { buildSpeciesExcursionCards };
