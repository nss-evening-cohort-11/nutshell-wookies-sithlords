import singleViewExcursionSpecies from '../singleViewExcursionSpecies/singleViewExcursionSpecies';
import singleViewExcursionEnvReading from '../singleViewExcursionEnvirRead/singleViewExcursionEnvirRead';
import singleViewExcursionCrew from '../singleViewExcursionCrew/singleViewExcursionCrew';
import singleViewDestination from '../singleViewDestination/singleViewDestination';

import excursionData from '../../helpers/data/excursionData';
import utils from '../../helpers/utils';

// reveal single view excursion
const revealSingleView = () => {
  $('#single-view-excursion').removeClass('hide');
  $('#excursion').addClass('hide');
  $('#crew').addClass('hide');
  $('#destinations').addClass('hide');
  $('#envReadings').addClass('hide');
  $('#species').addClass('hide');
  $('#dashboard').addClass('hide');
};

// close single view excursion
const closeSingleView = () => {
  $('#single-view-excursion').addClass('hide');
  $('#excursion').removeClass('hide');
  $('#crew').addClass('hide');
  $('#destinations').addClass('hide');
  $('#envReadings').addClass('hide');
  $('#species').addClass('hide');
  $('#dashboard').addClass('hide');
};


// build single view excursion
const buildSingleViewExcursion = (e) => {
  revealSingleView();
  const excursionId = e.target.closest('.card').id;
  excursionData.getSingleExcursion(excursionId)
    .then((resp) => {
      const excursion = resp.data;
      const excursionDestination = excursion.destinationId;
      let domString = '';
      domString += `<div class="pageDisplay" data-id="${excursionId}">`;
      domString += '<div class="row">';
      domString += `<h1 class="col-8 headingDisplay softEmboss"><p class="typewriter">${excursion.excursionName}</p></h1>`;
      domString += '<button type="button" class="btn-default btn-lg buttonHeadingDisplay glowing col-2" id="close-single-view-excursion"><i class="fas fa-window-close"></i></button>';
      domString += '</div>';
      domString += '<div id="singleViewDestination"></div>';
      singleViewDestination.viewExcursionDestination(excursionDestination);
      domString += '<div id="single-view-crew"></div>';
      singleViewExcursionCrew.buildCrewMemberExcursionCards(excursionId);
      domString += '<div id="build-the-dang-cards"></div>';
      singleViewExcursionSpecies.buildSpeciesExcursionView(excursionId);
      domString += '<div id="single-view-excursion-envir-read"></div>';
      singleViewExcursionEnvReading.buildAllEnvExcursionCards(excursionId);
      domString += '</div>';
      utils.printToDom('single-view-excursion', domString);
    })
    .catch((err) => console.error('could not get single excursion', err));
};

const singleExcursionEvents = () => {
  $('body').on('click', '.delete-species-excursion-btn', singleViewExcursionSpecies.removeSpeciesExcursion);
  $('body').on('click', '.delete-envir-read-excursion-btn', singleViewExcursionEnvReading.removeEnvirReadExcursion);
  $('body').on('click', '.delete-crew-excursion-btn', singleViewExcursionCrew.removeCrewFromExcursion);
};

export default { buildSingleViewExcursion, closeSingleView, singleExcursionEvents };
