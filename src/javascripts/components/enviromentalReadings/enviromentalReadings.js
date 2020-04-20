const envReadingMaker = (envReading) => {
  let domString = '';
  domString += `<div class ="card cardDisplay" id="${envReading.id}" >`;
  // domString += `<div class ="enviroReadingDiv">`;
  domString += `<img id="envUrl" src="${envReading.Url}>`;
  domString += '<div class="row" id="env-card-read">';
  domString += `<h2>${envReading.destinationId}</h2>`;
  domString += '<div class="row no-gutters">';
  domString += '<div class="col-8 col-sm-6">TimeStamps:</div>';
  domString += `<div class="col-4 col-sm-6">${envReading.TimeStamp}</div>`;
  domString += '<div class="col-8 col-sm-6">Latitudes:</div>';
  domString += `<div class="col-4 col-sm-6">${envReading.Latitude}</div>`;
  domString += '<div class="col-8 col-sm-6">Longitudes:</div>';
  domString += `<div class="col-4 col-sm-6">${envReading.Longitude}</div>`;
  domString += '<div class="col-8 col-sm-6">Temperatures:</div>';
  domString += `<div class="col-4 col-sm-6"> ${envReading.Temperature}</div>`;
  domString += '<div class="col-8 col-sm-6">Depths:</div>';
  domString += `<div class="col-4 col-sm-6"> ${envReading.Depth}</div>`;
  domString += '<div class="col-8 col-sm-6">Currents:</div>';
  domString += `<div class="col-4 col-sm-6"> ${envReading.Current}</div>`;
  domString += '<div class="col-8 col-sm-6">Pressures:</div>';
  domString += `<div class="col-4 col-sm-6"> ${envReading.Pressure}</div>`;
  domString += '<button type="button" class="col-4 btn-default btn-lg crudButtonColor glowing " id="edit-data"><i class="fas fa-feather-alt"></i></button>';
  domString += '<button type="button" class="delete-enviroment col-4 btn-default btn-lg crudButtonColor glowing"><i class="fas fa-skull-crossbones"></i></button>';
  domString += '</div>';
  domString += '</div>';
  // domString += '</div>';


  return domString;
};

export default { envReadingMaker };
