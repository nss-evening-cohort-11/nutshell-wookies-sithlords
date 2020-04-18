import enviroData from '../../helpers/data/envReadings';
import readingComponent from '../enviromentalReadings/enviromentalReadings';
import utils from '../../helpers/utils';

const buildReadings = () => {
  enviroData.getEnvironmentalData()
    .then((enviroRead) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<h1 class="headingDisplay softEmboss"><p class = "typewriter">Enviromental Readings</p>';
      domString += '<input type="button" class="col-6 btn-default btn-lg crudButtonImage glowing" value="Add Data">';
      enviroRead.forEach((reading) => {
        domString += readingComponent.envReadingMaker(reading);
      });
      domString += '</div>';
      utils.printToDom('envReadings', domString);
    })
    .catch((err) => console.error('problem with Peta', err));
};

export default { buildReadings };
